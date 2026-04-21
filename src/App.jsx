import { useEffect, useRef, useState } from 'react';
import deckData, { deckMeta, slides } from './data/deckContent';

const moneyFormatter = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 0,
});
const STAGE_WIDTH = 1600;
const STAGE_HEIGHT = 900;

function formatMoney(value) {
  return `$${moneyFormatter.format(value)}M`;
}

function clampSlide(index) {
  return Math.max(0, Math.min(slides.length - 1, index));
}

function getInitialSlideIndex() {
  const hashMatch = window.location.hash.match(/slide-(\d+)/i);

  if (!hashMatch) {
    return 0;
  }

  return clampSlide(Number(hashMatch[1]) - 1);
}

function App() {
  const [activeSlide, setActiveSlide] = useState(getInitialSlideIndex);
  const [stageScale, setStageScale] = useState(1);
  const [showNotes, setShowNotes] = useState(false);
  const viewportRef = useRef(null);
  const slide = slides[activeSlide];

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'ArrowRight' || event.key === 'PageDown') {
        setActiveSlide((current) => clampSlide(current + 1));
      }

      if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        setActiveSlide((current) => clampSlide(current - 1));
      }

      if (event.key === 'Home') {
        setActiveSlide(0);
      }

      if (event.key === 'End') {
        setActiveSlide(slides.length - 1);
      }

      if (event.key.toLowerCase() === 'n') {
        setShowNotes((current) => !current);
      }
    };

    const onHashChange = () => {
      setActiveSlide(getInitialSlideIndex());
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('hashchange', onHashChange);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  useEffect(() => {
    const nextHash = `slide-${activeSlide + 1}`;

    if (window.location.hash !== `#${nextHash}`) {
      window.history.replaceState(null, '', `#${nextHash}`);
    }
  }, [activeSlide]);

  useEffect(() => {
    const updateStageScale = () => {
      const viewport = viewportRef.current;

      if (!viewport) {
        return;
      }

      const { width, height } = viewport.getBoundingClientRect();

      if (!width || !height) {
        return;
      }

      const nextScale = Math.min(width / STAGE_WIDTH, height / STAGE_HEIGHT, 1);
      setStageScale(nextScale);
    };

    updateStageScale();

    const resizeObserver = new ResizeObserver(() => {
      window.requestAnimationFrame(updateStageScale);
    });

    if (viewportRef.current) {
      resizeObserver.observe(viewportRef.current);
    }

    window.addEventListener('resize', updateStageScale);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateStageScale);
    };
  }, []);

  return (
    <div className="app-shell">
      <header className="deck-chrome">
        <div className="deck-chrome__meta">
          <span className="deck-label">{deckMeta.purpose}</span>
          <span className="deck-separator" />
          <span>{deckMeta.audience}</span>
        </div>
        <div className="deck-chrome__controls">
          <button
            aria-pressed={showNotes}
            className={`nav-button nav-button--notes ${showNotes ? 'nav-button--active' : ''}`}
            onClick={() => setShowNotes((current) => !current)}
            type="button"
          >
            Notes
          </button>
          <button
            className="nav-button"
            disabled={activeSlide === 0}
            onClick={() => setActiveSlide((current) => clampSlide(current - 1))}
            type="button"
          >
            Previous
          </button>
          <span className="progress-label">
            {activeSlide + 1} / {slides.length}
          </span>
          <button
            className="nav-button"
            disabled={activeSlide === slides.length - 1}
            onClick={() => setActiveSlide((current) => clampSlide(current + 1))}
            type="button"
          >
            Next
          </button>
        </div>
      </header>

      <main className="stage-viewport" ref={viewportRef}>
        <div
          className="stage-shell"
          style={{
            width: `${STAGE_WIDTH * stageScale}px`,
            height: `${STAGE_HEIGHT * stageScale}px`,
          }}
        >
          <div
            className="stage"
            style={{
              width: `${STAGE_WIDTH}px`,
              height: `${STAGE_HEIGHT}px`,
              transform: `scale(${stageScale})`,
            }}
          >
            <SlideRenderer slide={slide} slideIndex={activeSlide} />
          </div>
        </div>
      </main>

      {showNotes ? <SpeakerNotesPanel slide={slide} /> : null}

      <footer className="progress-rail" aria-hidden="true">
        <div
          className="progress-rail__fill"
          style={{ width: `${((activeSlide + 1) / slides.length) * 100}%` }}
        />
      </footer>
    </div>
  );
}

function SpeakerNotesPanel({ slide }) {
  const notes = slide.speakerNotes;

  if (!notes) {
    return null;
  }

  const sections = [
    {
      title: 'Objective',
      items: [notes.objective],
    },
    {
      title: 'Talk Track',
      items: notes.talkTrack,
    },
    {
      title: 'Back Pocket',
      items: notes.backPocket,
    },
    {
      title: 'Transition',
      items: [notes.transition],
    },
  ].filter((section) => section.items && section.items.length > 0);

  return (
    <aside className="speaker-notes" aria-label="Speaker notes">
      <div className="speaker-notes__header">
        <div>
          <span className="speaker-notes__eyebrow">Speaker Notes</span>
          <strong>{slide.title}</strong>
        </div>
        <span className="speaker-notes__hint">Press N to hide</span>
      </div>
      <div className="speaker-notes__grid">
        {sections.map((section) => (
          <section key={section.title} className="speaker-notes__section">
            <h3>{section.title}</h3>
            <ul>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </aside>
  );
}

function SlideRenderer({ slide, slideIndex }) {
  switch (slide.type) {
    case 'cover':
      return <CoverSlide slide={slide} slideIndex={slideIndex} />;
    case 'executive-summary':
      return <ExecutiveSummarySlide slide={slide} slideIndex={slideIndex} />;
    case 'grounding':
      return <GroundingSlide slide={slide} slideIndex={slideIndex} />;
    case 'segments':
      return <SegmentSlide slide={slide} slideIndex={slideIndex} />;
    case 'engine-overview':
      return <EngineOverviewSlide slide={slide} slideIndex={slideIndex} />;
    case 'bridge':
      return <BridgeSlide slide={slide} slideIndex={slideIndex} />;
    case 'weights':
      return <WeightsSlide slide={slide} slideIndex={slideIndex} />;
    case 'growth-engine':
      return <GrowthEngineSlide slide={slide} slideIndex={slideIndex} />;
    case 'operating-model':
      return <OperatingModelSlide slide={slide} slideIndex={slideIndex} />;
    case 'risks':
      return <RiskSlide slide={slide} slideIndex={slideIndex} />;
    case 'summary':
      return <SummarySlide slide={slide} slideIndex={slideIndex} />;
    default:
      return null;
  }
}

function SlideFrame({ slideIndex, title, headline, children, className = '' }) {
  return (
    <section className={`slide-frame ${className}`}>
      <div className="slide-header">
        <div className="slide-kicker">Slide {slideIndex + 1}</div>
        <h1>{title}</h1>
        {headline ? <p className="slide-headline">{headline}</p> : null}
      </div>
      <div className="slide-body">{children}</div>
    </section>
  );
}

function CoverSlide({ slide, slideIndex }) {
  return (
    <section className="slide-frame cover-slide">
      <div className="cover-grid">
        <div className="cover-block">
          <div className="slide-kicker">Slide {slideIndex + 1}</div>
          <h1>{slide.title}</h1>
          <p className="cover-subtitle">{slide.subtitle}</p>
          <div className="cover-footer">
            <span>{slide.footer}</span>
            <span>{slide.date}</span>
          </div>
        </div>
        <div className="cover-aside">
          <div className="cover-panel">
            <span className="cover-panel__label">Readout</span>
            <strong>{deckData.deck.purpose}</strong>
          </div>
          <div className="cover-panel">
            <span className="cover-panel__label">Audience</span>
            <strong>{deckData.deck.audience}</strong>
          </div>
          <div className="cover-panel cover-panel--metric">
            <span className="cover-panel__label">Target</span>
            <strong>{formatMoney(deckData.financials.revenue_2026_target_m)}</strong>
            <span className="cover-panel__meta">
              from {formatMoney(deckData.financials.revenue_2025_m)} base
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExecutiveSummarySlide({ slide, slideIndex }) {
  return (
    <SlideFrame
      slideIndex={slideIndex}
      title={slide.title}
      headline={slide.headline}
      className="slide-frame--executive-summary"
    >
      <div className="executive-layout executive-layout--summary">
        <SectionCard title="Key points" className="summary-card summary-card--wide summary-card--key-points">
          <BulletList items={slide.keyPoints} />
        </SectionCard>
        <div className="summary-grid summary-grid--executive">
          {slide.boxes.map((box) => (
            <SectionCard key={box.title} title={box.title} className="summary-card">
              <BulletList items={box.items} />
            </SectionCard>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}

function GroundingSlide({ slide, slideIndex }) {
  const mixItems = [
    {
      label: 'Self-Serve SMB',
      value: deckData.gtm_mix_2026_m.self_serve_smb,
      tone: 'tone-core',
    },
    {
      label: 'Self-Serve Mid-Market',
      value: deckData.gtm_mix_2026_m.self_serve_mid_market,
      tone: 'tone-plg',
    },
    {
      label: 'Sales-Led Mid-Market',
      value: deckData.gtm_mix_2026_m.sales_led_mid_market,
      tone: 'tone-midmarket',
    },
    {
      label: 'Sales-Led Enterprise',
      value: deckData.gtm_mix_2026_m.sales_led_enterprise,
      tone: 'tone-enterprise',
    },
  ];

  return (
    <SlideFrame
      slideIndex={slideIndex}
      title={slide.title}
      headline={slide.headline}
      className="slide-frame--grounding"
    >
      <div className="grounding-layout grounding-layout--visual">
        <div className="grounding-left">
          <SectionCard title="Growth requirement" className="growth-visual">
            <div className="growth-runway">
              <div className="growth-runway__anchor">
                <span>2025</span>
                <strong>{formatMoney(deckData.financials.revenue_2025_m)}</strong>
              </div>
              <div className="growth-runway__delta">
                <span>Required growth</span>
                <strong>+{formatMoney(deckData.financials.incremental_growth_required_m)}</strong>
                <p>
                  <strong className="growth-runway__delta-callout">
                    +{deckData.financials.implied_yoy_growth_pct}% YoY
                  </strong>
                  More than doubling revenue in one year.
                </p>
              </div>
              <div className="growth-runway__anchor growth-runway__anchor--target">
                <span>2026</span>
                <strong>{formatMoney(deckData.financials.revenue_2026_target_m)}</strong>
              </div>
            </div>
          </SectionCard>
        </div>

        <SectionCard title="Fixed 2026 GTM mix" className="mix-card">
          <div className="mix-stack mix-stack--vertical">
            {mixItems.map((item) => (
              <div
                key={item.label}
                className={`mix-stack__segment mix-stack__segment--vertical ${item.tone}`}
                style={{
                  flexGrow: item.value,
                }}
              >
                <span>{item.label}</span>
                <strong>{formatMoney(item.value)}</strong>
              </div>
            ))}
          </div>
          <div className="mix-summary-grid">
            <MetricCard
              label="Self-Serve total"
              value={formatMoney(deckData.gtm_mix_2026_m.self_serve_total)}
              compact
            />
            <MetricCard
              label="Sales-Led total"
              value={formatMoney(deckData.gtm_mix_2026_m.sales_led_total)}
              compact
            />
            <MetricCard
              label="Enterprise share of target"
              value={`${deckData.gtm_mix_2026_m.enterprise_share_of_total_pct}%`}
              compact
              accent
            />
          </div>
          <p className="mix-card__quote">
            "Self-serve business estimated to be two-thirds of the total in 2025."
          </p>
        </SectionCard>
      </div>
    </SlideFrame>
  );
}

function SegmentSlide({ slide, slideIndex }) {
  return (
    <SlideFrame
      slideIndex={slideIndex}
      title={slide.title}
      headline={slide.headline}
      className="slide-frame--segments"
    >
      <div className="segment-layout">
        {slide.groups.map((group) => (
          <SectionCard key={group.title} title={group.title} className="segment-group">
            <div className="segment-stack">
              {group.items.map((item) => (
                <article key={item.segment} className="segment-card">
                  <div className="segment-card__top">
                    <div>
                      <h3>{item.segment}</h3>
                      <span className={`status-pill status-pill--${item.status.toLowerCase()}`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                  <p>{item.current_state}</p>
                  <div className="segment-card__implication">
                    <span>2026</span>
                    <strong>{item.implication_2026}</strong>
                  </div>
                </article>
              ))}
            </div>
          </SectionCard>
        ))}
      </div>
    </SlideFrame>
  );
}

function EngineOverviewSlide({ slide, slideIndex }) {
  const groups = slide.groups.map((group) => ({
    ...group,
    items: slide.items.filter((item) => item.group === group.id),
  }));

  return (
    <SlideFrame
      slideIndex={slideIndex}
      title={slide.title}
      headline={slide.headline}
      className="slide-frame--engine-overview"
    >
      <div className="engine-overview-layout">
        {groups.map((group) => (
          <SectionCard
            key={group.id}
            title={group.title}
            className={`engine-overview-panel engine-overview-panel--${group.id}`}
          >
            <div className="engine-overview-list">
              {group.items.map((item) => (
                <article
                  key={item.title}
                  className={`engine-overview-item engine-overview-item--${item.tone}`}
                >
                  <div className="engine-overview-item__main">
                    <span className="engine-overview-item__kicker">
                      Growth engine {item.number}
                    </span>
                    <h3>{item.title}</h3>
                    <p className="engine-overview-item__description">{item.description}</p>
                  </div>
                  <div className="engine-overview-item__drivers">
                    <span className="engine-overview-item__label">Main catalysts</span>
                    <MiniList items={item.catalysts} />
                  </div>
                </article>
              ))}
            </div>
          </SectionCard>
        ))}
      </div>
    </SlideFrame>
  );
}

function BridgeSlide({ slide, slideIndex }) {
  const bridgeData = deckData.engine_bridge_m;

  return (
    <SlideFrame
      slideIndex={slideIndex}
      title={slide.title}
      headline={slide.headline}
      className="slide-frame--bridge"
    >
      <div className="bridge-slide">
        <div className="bridge-summary">
          <MetricCard label="2025 Base" value={formatMoney(bridgeData.base_2025)} />
          <MetricCard
            label="Committed bridge"
            value={`+${formatMoney(bridgeData.committed_total_m)}`}
            accent
          />
          <MetricCard
            label="Upside bridge"
            value={`+${formatMoney(bridgeData.upside_total_m)}`}
          />
          <MetricCard label="2026 Target" value={formatMoney(bridgeData.target_2026_m)} />
        </div>

        <div className="bridge-visual">
          <div className="bridge-visual__header">
            <div className="bridge-visual__title">
              <span>Incremental bridge</span>
              <strong>+{formatMoney(bridgeData.increments_total)}</strong>
            </div>
            <span className="legend-chip">
              <span className="legend-swatch legend-swatch--committed" />
              Committed
            </span>
            <span className="legend-chip">
              <span className="legend-swatch legend-swatch--upside" />
              Upside
            </span>
          </div>

          <WaterfallBridgeChart bridgeData={bridgeData} />
        </div>

        <SectionCard title="Three implications" className="bridge-takeaways">
          <div className="bridge-takeaways-strip">
            {slide.takeaways.map((item, index) => (
              <article key={item} className="bridge-takeaway">
                <span className="bridge-takeaway__number">0{index + 1}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </SectionCard>
      </div>
    </SlideFrame>
  );
}

function WaterfallBridgeChart({ bridgeData }) {
  const width = 1040;
  const height = 262;
  const topPad = 58;
  const bottomPad = 54;
  const leftPad = 20;
  const barWidth = 102;
  const gap = 20;
  const plotHeight = height - topPad - bottomPad;
  const totalColumns = bridgeData.engines.length + 2;
  const totalWidth = totalColumns * barWidth + (totalColumns - 1) * gap;
  const startX = leftPad + (width - leftPad * 2 - totalWidth) / 2;
  const maxValue = bridgeData.target_2026_m;
  const baselineY = topPad + plotHeight;

  const yForValue = (value) => topPad + plotHeight - (value / maxValue) * plotHeight;

  let runningValue = bridgeData.base_2025;
  const columns = [
    {
      kind: 'total',
      label: '2025 Base',
      value: bridgeData.base_2025,
      x: startX,
    },
    ...bridgeData.engines.map((engine, index) => {
      const start = runningValue;
      const end = runningValue + engine.total_m;
      runningValue = end;

      return {
        kind: 'increment',
        label: engine.name,
        x: startX + (index + 1) * (barWidth + gap),
        start,
        end,
        total: engine.total_m,
        committed: engine.committed_m,
        upside: engine.upside_m,
      };
    }),
    {
      kind: 'total',
      label: '2026 Target',
      value: bridgeData.target_2026_m,
      x: startX + (totalColumns - 1) * (barWidth + gap),
    },
  ];

  const connectors = columns.slice(0, -1).map((column, index) => {
    const nextColumn = columns[index + 1];
    const exitValue = column.kind === 'total' ? column.value : column.end;

    return {
      x1: column.x + barWidth,
      x2: nextColumn.x,
      y: yForValue(exitValue),
    };
  });

  return (
    <div className="bridge-waterfall-chart">
      <svg
        className="bridge-waterfall-chart__svg"
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label="Waterfall chart from 2025 base to 2026 target"
      >
        <defs>
          <linearGradient id="waterfallCommitted" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#1b588f" />
            <stop offset="100%" stopColor="#0b3962" />
          </linearGradient>
          <linearGradient id="waterfallUpside" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#d8e8f7" />
            <stop offset="100%" stopColor="#b8d8f2" />
          </linearGradient>
          <linearGradient id="waterfallTotal" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#e4eef8" />
            <stop offset="100%" stopColor="#b9d4ee" />
          </linearGradient>
          <linearGradient id="waterfallTarget" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#77b39a" />
            <stop offset="100%" stopColor="#2f6d53" />
          </linearGradient>
        </defs>

        <line
          x1={leftPad}
          x2={width - leftPad}
          y1={baselineY}
          y2={baselineY}
          stroke="rgba(20, 32, 51, 0.12)"
          strokeWidth="1.25"
        />

        {connectors.map((connector) => (
          <line
            key={`${connector.x1}-${connector.x2}`}
            x1={connector.x1}
            x2={connector.x2}
            y1={connector.y}
            y2={connector.y}
            stroke="rgba(20, 32, 51, 0.14)"
            strokeLinecap="round"
            strokeWidth="1.75"
          />
        ))}

        {columns.map((column) => {
          if (column.kind === 'total') {
            const barY = yForValue(column.value);
            const barHeight = baselineY - barY;
            const isTarget = column.label === '2026 Target';

            return (
              <g key={column.label}>
                <text
                  x={column.x + barWidth / 2}
                  y={barY - 30}
                  fill="#4d5c73"
                  fontSize="10.5"
                  fontWeight="700"
                  textAnchor="middle"
                >
                  {column.label}
                </text>
                <rect
                  x={column.x}
                  y={barY}
                  width={barWidth}
                  height={barHeight}
                  rx="16"
                  fill={isTarget ? 'url(#waterfallTarget)' : 'url(#waterfallTotal)'}
                  stroke={isTarget ? 'rgba(47, 109, 83, 0.22)' : 'rgba(15, 76, 129, 0.16)'}
                />
                <text
                  x={column.x + barWidth / 2}
                  y={barY + barHeight / 2 + 8}
                  fill={isTarget ? '#ffffff' : '#172338'}
                  fontSize="23"
                  fontWeight="800"
                  letterSpacing="-0.03em"
                  textAnchor="middle"
                >
                  {formatMoney(column.value)}
                </text>
              </g>
            );
          }

          const committedTop = yForValue(column.start + column.committed);
          const totalTop = yForValue(column.end);
          const barBottom = yForValue(column.start);
          const committedHeight = barBottom - committedTop;
          const upsideHeight = committedTop - totalTop;
          const splitLabel =
            column.upside > 0
              ? `${formatMoney(column.committed)} C / ${formatMoney(column.upside)} U`
              : `${formatMoney(column.committed)} C`;

          return (
            <g key={column.label}>
                <text
                  x={column.x + barWidth / 2}
                  y={totalTop - 44}
                  fill="#4d5c73"
                  fontSize="10.5"
                  fontWeight="700"
                  textAnchor="middle"
                >
                  {column.label}
                </text>
                <text
                  x={column.x + barWidth / 2}
                  y={totalTop - 18}
                  fill="#0b3962"
                  fontSize="18"
                  fontWeight="800"
                  letterSpacing="-0.03em"
                  textAnchor="middle"
                >
                +{formatMoney(column.total)}
              </text>
              <rect
                x={column.x}
                y={committedTop}
                width={barWidth}
                height={committedHeight}
                rx="14"
                fill="url(#waterfallCommitted)"
                stroke="rgba(255, 255, 255, 0.18)"
              />
              {column.upside > 0 ? (
                <rect
                  x={column.x}
                  y={totalTop}
                  width={barWidth}
                  height={upsideHeight}
                  rx="14"
                  fill="url(#waterfallUpside)"
                  stroke="rgba(15, 76, 129, 0.08)"
                />
              ) : null}
                <text
                  x={column.x + barWidth / 2}
                  y={baselineY + 24}
                  fill="#5a687d"
                  fontSize="10.5"
                  fontWeight="700"
                  textAnchor="middle"
                >
                {splitLabel}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function WeightsSlide({ slide, slideIndex }) {
  const engineMeta = {
    'Core Platform': { tone: 'core' },
    'PLG Conversion': { tone: 'plg' },
    Attach: { tone: 'attach' },
    AI: { tone: 'ai' },
    Enterprise: { tone: 'enterprise' },
  };

  const committedRanks = Object.fromEntries(
    deckData.engine_weights.committed_plan_reliance.map((item, index) => [item, index + 1]),
  );
  const strategicRanks = Object.fromEntries(
    deckData.engine_weights.strategic_investment_priority.map((item, index) => [item, index + 1]),
  );

  const committedItems = deckData.engine_weights.committed_plan_reliance.map((item, index) => ({
    label: item,
    tone: engineMeta[item].tone,
    rank: index + 1,
    counterpartLabel: 'Strategic',
    counterpartRank: strategicRanks[item],
  }));

  const strategicItems = deckData.engine_weights.strategic_investment_priority.map(
    (item, index) => ({
      label: item,
      tone: engineMeta[item].tone,
      rank: index + 1,
      counterpartLabel: 'Committed',
      counterpartRank: committedRanks[item],
    }),
  );

  return (
    <SlideFrame
      slideIndex={slideIndex}
      title={slide.title}
      headline={slide.headline}
      className="slide-frame--weights"
    >
      <div className="weights-layout">
        <SectionCard
          title="Committed 2026 plan reliance"
          className="weights-card weights-card--committed"
        >
          <WeightLensList items={committedItems} />
        </SectionCard>

        <SectionCard
          title="Strategic investment priority"
          className="weights-card weights-card--strategic"
        >
          <WeightLensList items={strategicItems} />
        </SectionCard>

        <SectionCard
          title={slide.takeawaysTitle}
          className="weights-card weights-card--takeaways"
        >
          <div className="weights-takeaways">
            {slide.takeaways.map((item, index) => (
              <article key={item} className="weights-takeaway">
                <span className="weights-takeaway__number">0{index + 1}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
          <p className="weights-footer-insight">{slide.footerInsight}</p>
        </SectionCard>
      </div>
    </SlideFrame>
  );
}

function GrowthEngineSlide({ slide, slideIndex }) {
  const isExecutivePointSlide =
    slide.id === 'engine-core' ||
    slide.id === 'engine-plg' ||
    slide.id === 'engine-attach' ||
    slide.id === 'engine-ai' ||
    slide.id === 'engine-enterprise';

  return (
    <SlideFrame slideIndex={slideIndex} title={slide.title} headline={slide.headline}>
      <div className="growth-engine-stack">
        <div
          className={`growth-engine-layout ${
            slide.id === 'engine-core'
              ? 'growth-engine-layout--core'
              : slide.id === 'engine-plg'
                ? 'growth-engine-layout--plg'
                : slide.id === 'engine-attach'
                  ? 'growth-engine-layout--attach'
                  : slide.id === 'engine-ai'
                    ? 'growth-engine-layout--ai'
                    : slide.id === 'engine-enterprise'
                      ? 'growth-engine-layout--enterprise'
                      : ''
          }`}
        >
          <SectionCard title="Why it matters" className="growth-engine-card">
            <BulletList items={slide.whyItMatters} />
          </SectionCard>

          <SectionCard
            title="Main drivers / levers"
            className={`growth-engine-card growth-engine-card--drivers ${
              slide.id === 'engine-core'
                ? 'growth-engine-card--core-drivers'
                : slide.id === 'engine-plg'
                  ? 'growth-engine-card--plg-drivers'
                  : slide.id === 'engine-attach'
                    ? 'growth-engine-card--attach-drivers'
                    : slide.id === 'engine-ai'
                      ? 'growth-engine-card--ai-drivers'
                      : slide.id === 'engine-enterprise'
                        ? 'growth-engine-card--enterprise-drivers'
                        : ''
            }`}
          >
            {isExecutivePointSlide ? (
              <ExecutivePointList items={slide.drivers} tone="driver" />
            ) : (
              <BulletList items={slide.drivers} dense />
            )}
          </SectionCard>

          <SectionCard title="2026 role" className="growth-engine-card growth-engine-card--role">
            <p className="role-copy">{slide.role}</p>
            {slide.roleContext ? <p className="role-context">{slide.roleContext}</p> : null}
          </SectionCard>

          <SectionCard title="What must be true" className="growth-engine-card">
            <BulletList items={slide.mustBeTrue} />
          </SectionCard>

          <SectionCard
            title="Biggest risks"
            className={`growth-engine-card ${
              slide.id === 'engine-core'
                ? 'growth-engine-card--core-risks'
                : slide.id === 'engine-plg'
                  ? 'growth-engine-card--plg-risks'
                  : slide.id === 'engine-attach'
                    ? 'growth-engine-card--attach-risks'
                    : slide.id === 'engine-ai'
                      ? 'growth-engine-card--ai-risks'
                      : slide.id === 'engine-enterprise'
                        ? 'growth-engine-card--enterprise-risks'
                        : ''
            }`}
          >
            {isExecutivePointSlide ? (
              <ExecutivePointList items={slide.risks} tone="risk" compact />
            ) : (
              <BulletList items={slide.risks} />
            )}
          </SectionCard>
        </div>

        {slide.supportingPanels ? (
          <div className="growth-engine-supporting">
            {slide.supportingPanels.map((panel) => (
              <SectionCard
                key={panel.title}
                title={panel.title}
                className="growth-engine-support-card"
              >
                {panel.type === 'ladder' ? (
                  <StepFlow items={panel.items} />
                ) : (
                  <ChipList items={panel.items} />
                )}
              </SectionCard>
            ))}
          </div>
        ) : null}
      </div>

      {slide.footerNote ? <div className="slide-note">{slide.footerNote}</div> : null}
    </SlideFrame>
  );
}

function OperatingModelSlide({ slide, slideIndex }) {
  return (
    <SlideFrame
      slideIndex={slideIndex}
      title={slide.title}
      headline={slide.headline}
      className="slide-frame--operating-model"
    >
      <div className="operating-layout">
        <div className="operating-table">
          <div className="operating-table__header">
            <span>Cadence forum</span>
            <span>Cadence</span>
            <span>Focus</span>
            <span>Output</span>
          </div>
          {deckData.operating_model.forums.map((forum) => (
            <div key={forum.name} className="operating-row">
              <div className="operating-row__name">
                <span className="operating-row__dot" />
                <strong>{forum.name}</strong>
              </div>
              <span className="operating-row__cadence">{forum.cadence}</span>
              <p>{forum.focus}</p>
              <p>{forum.output}</p>
            </div>
          ))}
        </div>

        <div className="footer-chip-row">
          {deckData.operating_model.footer.map((item) => (
            <span key={item} className="footer-chip">
              {item}
            </span>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}

function RiskSlide({ slide, slideIndex }) {
  const riskBlocks = [
    {
      title: 'Risk 1: Enterprise modernization underdelivers',
      breaks: deckData.risks.enterprise.breaks,
      monitors: deckData.risks.enterprise.monitors,
    },
    {
      title: 'Risk 2: AI grows as low-quality revenue',
      breaks: deckData.risks.ai.breaks,
      monitors: deckData.risks.ai.monitors,
    },
    {
      title: 'Risk 3: PLG conversion underperforms',
      breaks: deckData.risks.plg_conversion.breaks,
      monitors: deckData.risks.plg_conversion.monitors,
    },
  ];

  return (
    <SlideFrame
      slideIndex={slideIndex}
      title={slide.title}
      headline={slide.headline}
      className="slide-frame--risks"
    >
      <div className="risk-layout">
        <div className="risk-grid">
          {riskBlocks.map((risk) => (
            <SectionCard key={risk.title} title={risk.title} className="risk-card">
              <div className="risk-card__section">
                <span className="risk-card__label">Breaks</span>
                <BulletList items={risk.breaks} dense rich />
              </div>
              <div className="risk-card__section">
                <span className="risk-card__label">Monitor</span>
                <BulletList items={risk.monitors} dense rich />
              </div>
            </SectionCard>
          ))}
        </div>

        <SectionCard title="Macro risks" className="macro-card">
          <div className="macro-card__column">
            <span className="risk-card__label">Breaks</span>
            <BulletList items={deckData.risks.macro.breaks} rich />
          </div>
          <div className="macro-card__column">
            <span className="risk-card__label">Macro monitors</span>
            <BulletList items={deckData.risks.macro.monitors} rich />
          </div>
        </SectionCard>
      </div>
    </SlideFrame>
  );
}

function SummarySlide({ slide, slideIndex }) {
  return (
    <SlideFrame
      slideIndex={slideIndex}
      title={slide.title}
      headline={slide.headline}
      className="slide-frame--summary-final"
    >
      <div className="summary-grid summary-grid--final">
        {slide.boxes.map((box) => (
          <SectionCard key={box.title} title={box.title} className="summary-card summary-card--final">
            <BulletList items={box.items} rich />
          </SectionCard>
        ))}
      </div>
    </SlideFrame>
  );
}

function SectionCard({ title, children, className = '' }) {
  return (
    <section className={`section-card ${className}`}>
      <div className="section-card__title">{title}</div>
      <div className="section-card__body">{children}</div>
    </section>
  );
}

function MetricCard({ label, value, compact = false, accent = false }) {
  return (
    <div
      className={`metric-card ${compact ? 'metric-card--compact' : ''} ${
        accent ? 'metric-card--accent' : ''
      }`}
    >
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function renderInlineRichText(text) {
  const parts = String(text)
    .split(/(\*\*[^*]+\*\*)/g)
    .filter(Boolean);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }

    return <span key={`${part}-${index}`}>{part}</span>;
  });
}

function BulletList({ items, dense = false, rich = false }) {
  return (
    <ul className={`bullet-list ${dense ? 'bullet-list--dense' : ''}`}>
      {items.map((item) => (
        <li key={item}>
          <span className="bullet-list__text">
            {rich ? renderInlineRichText(item) : item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function ExecutivePointList({ items, tone = 'driver', compact = false }) {
  return (
    <ul
      className={`executive-point-list executive-point-list--${tone} ${
        compact ? 'executive-point-list--compact' : ''
      }`}
    >
      {items.map((item) => (
        <li key={item.lead}>
          <span className="executive-point-list__marker" aria-hidden="true" />
          <div className="executive-point-list__content">
            <strong className="executive-point-list__lead">{item.lead}</strong>
            <span className="executive-point-list__body">{item.body}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

function MiniList({ items }) {
  return (
    <ul className="mini-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function WeightLensList({ items }) {
  return (
    <ol className="weights-rank-list">
      {items.map((item) => (
        <li key={item.label} className={`weights-rank-list__item weights-rank-list__item--${item.tone}`}>
          <span className="weights-rank-list__number">{item.rank}</span>
          <span className={`weights-rank-list__tone weights-rank-list__tone--${item.tone}`} />
          <strong>{item.label}</strong>
          <span className="weights-rank-list__counterpart">
            {item.counterpartLabel} #{item.counterpartRank}
          </span>
        </li>
      ))}
    </ol>
  );
}

function StepFlow({ items }) {
  return (
    <div className="step-flow" aria-label="Conversion path">
      {items.map((item, index) => (
        <div key={item} className="step-flow__step">
          <span className="step-flow__index">{index + 1}</span>
          <strong>{item}</strong>
        </div>
      ))}
    </div>
  );
}

function ChipList({ items }) {
  return (
    <div className="chip-list">
      {items.map((item) => (
        <span key={item} className="chip-list__item">
          {item}
        </span>
      ))}
    </div>
  );
}

export default App;
