export function createDeckSlides(deckData, deckMeta) {
  const growthEngineSlides = [
    {
      id: 'engine-core',
      type: 'growth-engine',
      title: 'Growth engine 1: Core Platform acceleration',
      headline:
        'Core is the financial backbone of the plan and the fastest path to in-year dollars.',
      engineTitle: 'Core Platform',
      overviewGroup: 'base',
      overviewTone: 'core',
      overviewRole: 'Primary committed engine',
      roleContext:
        'Largest committed bridge slice because it already converts bottom-up developer adoption into paid production usage with less GTM lift than the other engines.',
      overviewCatalysts: [
        'More developers shipping more production apps onto Vercel',
        'AI-era workloads increase compute intensity per app',
        'Monetization deepens when experimental usage becomes paid production usage',
      ],
      whyItMatters: [
        'Largest starting product base',
        'Strongest existing differentiation',
        'Primary committed engine for 2026',
      ],
      drivers: [
        {
          lead: 'Production app count, not project count',
          body: 'The unlock is more developers crossing into paid, always-on production usage.',
        },
        {
          lead: 'Workload intensity per winning app',
          body: 'AI-era deployments matter when they increase compute duration, transfer, concurrency, and multi-region needs.',
        },
        {
          lead: 'Time-to-production compression',
          body: 'Pulling builders faster from first deployment to durable live usage moves dollars into the year.',
        },
        {
          lead: 'Post-deployment team expansion',
          body: 'One successful app should lead to more collaborators, domains, and governed production footprint.',
        },
        {
          lead: 'Higher-criticality workload mix',
          body: 'Customer-facing, performance-sensitive use cases monetize better than low-stakes experimentation.',
        },
        {
          lead: 'Healthy AI-native channel conversion',
          body: 'New builder cohorts only matter if they retain and productionize on-platform.',
        },
      ],
      mustBeTrue: [
        'More projects become production apps',
        'Usage per app deepens',
        'Conversion stays healthy in new channels',
        'AI-native workloads lift monetization rather than dilute it',
      ],
      risks: [
        {
          lead: 'Activity growth without production conversion',
          body: 'Developer activity rises, but too little of it becomes paid, always-on production usage.',
        },
        {
          lead: 'AI demand shows up as low-quality revenue',
          body: 'AI-native demand arrives as low-value experimentation or thin pass-through traffic instead of high-intensity app workloads.',
        },
        {
          lead: 'Usage expands without account deepening',
          body: 'Usage expands inside accounts without team formation, governance, or broader platform footprint, capping monetization depth.',
        },
      ],
      role: 'Primary committed engine',
    },
    {
      id: 'engine-plg',
      type: 'growth-engine',
      title: 'Growth engine 2: PLG conversion',
      headline:
        'PLG conversion turns existing developer pull into higher-value team and commercial revenue.',
      engineTitle: 'PLG Conversion',
      overviewGroup: 'base',
      overviewTone: 'plg',
      overviewRole: 'High-confidence committed engine',
      roleContext:
        'Wins when individual production usage starts to look like a real organizational buying signal.',
      overviewCatalysts: [
        'AI-assisted qualification and signaling improve PQL accuracy and routing',
        'Product investments reduce procurement, upgrade, and expansion friction',
        'Faster team formation turns developer pull into monetizable team behavior',
      ],
      whyItMatters: [
        'One of the most underwritten and reliable 2026 growth drivers',
        'Turns existing bottoms-up developer adoption into higher-value team revenue',
        'Creates an efficient path from product pull to denser account monetization and selective commercial expansion',
      ],
      drivers: [
        {
          lead: 'Production persistence after first launch',
          body: 'The first real signal is an individual-built app that stays live, keeps deploying, and sustains spend after launch instead of fading like a hobby project.',
        },
        {
          lead: 'Collaboration around the same live workload',
          body: 'The pattern to watch is more teammates touching the same production app, repo, domain, and environment, not just more users appearing anywhere in the account.',
        },
        {
          lead: 'Multi-project concentration inside one workspace',
          body: 'PLG economics improve when multiple production apps and domains consolidate into one team workspace instead of staying fragmented across individual builders.',
        },
        {
          lead: 'Governance and spend controls arriving with usage growth',
          body: 'RBAC, spend visibility, invoices, admin workflows, and domain ownership matter when they appear alongside rising production traffic and persistent usage.',
        },
        {
          lead: 'Product-qualified signal stack crossing the assist threshold',
          body: 'Sales and lifecycle marketing should engage when production persistence, spend growth, teammate formation, and governance signals converge; any one metric alone is too noisy.',
        },
      ],
      mustBeTrue: [
        'Individual usage turns into shared team workspaces earlier',
        'Team workspaces become production teams with more projects, domains, and collaborators',
        'PLG-originated accounts convert into commercial expansion without losing speed',
        'Premium attach rises after team formation',
      ],
      risks: [
        {
          lead: 'Audience growth without monetizable intent',
          body: 'AI-led adoption can expand developers faster than accounts with a real team or contract path.',
        },
        {
          lead: 'Product-qualified signals without a real buying center',
          body: 'Usage can look team-like without a budget owner, governance need, or standardization intent.',
        },
        {
          lead: 'Conversion before product readiness for the workload',
          body: 'Accounts may upgrade into workloads where missing admin or workflow features cap expansion or trigger churn.',
        },
        {
          lead: 'Commercial engagement is mistimed',
          body: 'Too early raises CAC; too late leaves the account to standardize elsewhere.',
        },
      ],
      role: 'High-confidence committed engine\nMonetizes and matures the Core base',
    },
    {
      id: 'engine-attach',
      type: 'growth-engine',
      title:
        'Growth engine 3: Premium attach across Observability, Security, and Storage',
      headline:
        'Attach is a real standalone engine, but its value mix differs by segment and workload maturity.',
      engineTitle: 'Attach',
      overviewGroup: 'base',
      overviewTone: 'attach',
      overviewRole: 'Committed engine',
      overviewCatalysts: [
        'AI workloads make observability, security, and storage more mission-critical',
        'Higher-risk, higher-volume usage increases attach monetization',
        'Attach deepens as workloads become more production-critical',
      ],
      whyItMatters: [
        'Real across self-serve, mid-market, and enterprise',
        'Deepens monetization and retention',
        'Improves gross margin dollars and account quality',
      ],
      drivers: [
        {
          lead: 'Observability attaches when uptime risk becomes real',
          body: 'Attach accelerates when teams move from launching apps to operating production systems where performance issues, incidents, and debugging cost real money.',
        },
        {
          lead: 'Security attaches when governance becomes mandatory',
          body: 'Security monetizes best once teams need access controls, protection, and policy guardrails because the workload is no longer just a developer experiment.',
        },
        {
          lead: 'Storage attaches when the workload becomes stateful',
          body: 'Persistent data, user state, and higher-volume application behavior create a much stronger storage attach path than ephemeral or stateless usage.',
        },
        {
          lead: 'Production criticality matters more than raw feature adoption',
          body: 'The best attach cohorts are the ones where the app matters operationally, because reliability, security, and data persistence become harder to work around.',
        },
        {
          lead: 'AI-era workloads can raise attach intensity',
          body: 'AI apps can deepen attach when they create more logs, secrets, storage, and operational risk, but only where that complexity is durable and monetizable.',
        },
      ],
      mustBeTrue: [
        'Attach rises with workload maturity',
        'Adopted products are monetized, not just used',
        'Enterprise-weighted attach is not over-assumed if enterprise itself is conservative',
      ],
      risks: [
        {
          lead: 'Attach is adopted but not strategic',
          body: 'Customers may use Vercel add-ons for lighter workflows while keeping mission-critical monitoring, security, or data workloads elsewhere.',
        },
        {
          lead: 'Growth mix skews toward lower-attach-value cohorts',
          body: 'If growth comes mostly from self-serve, lighter workloads, or smaller teams, attach matters less and premium monetization depth underwhelms.',
        },
        {
          lead: 'Enterprise underperformance suppresses attach depth',
          body: 'The heaviest, most governance-intensive accounts are often the richest attach opportunities, so slower enterprise ramp can cascade into weaker attach revenue.',
        },
      ],
      role: 'Committed engine, with segment-mix caveats',
    },
    {
      id: 'engine-ai',
      type: 'growth-engine',
      title: 'Growth engine 4: AI-native transformation',
      headline:
        'AI deserves more bridge weight only if it becomes durable platform revenue and lifts the rest of the stack.',
      engineTitle: 'AI',
      overviewGroup: 'strategic',
      overviewTone: 'ai',
      overviewRole: 'Selective committed contribution plus major upside',
      roleContext:
        'Base plan assumes modest pull-through into Core and attach. Upside assumes AI also proves durable direct monetization.',
      overviewCatalysts: [
        'AI matters when experimentation becomes durable production workload',
        'Lower barriers let new builders, including citizen developers, start and consume',
        'Platform value rises when AI usage pulls through into Core and attach',
      ],
      whyItMatters: [
        'Strategically mandatory',
        'Can ramp quickly in a usage model',
        'Only attractive if it improves the rest of the business',
      ],
      drivers: [
        {
          lead: 'Production AI apps, not experimental launches',
          body: 'The real driver is how many AI apps become durable production workloads with repeat usage, not how many prototypes or demos get created.',
        },
        {
          lead: 'Workflow economics matter more than raw token volume',
          body: 'Model mix, inference pattern, and workload type determine whether usage becomes high-quality revenue or thin pass-through spend.',
        },
        {
          lead: 'Orchestration complexity creates platform value',
          body: 'AI apps become more valuable to Vercel when tool calls, background work, auth, observability, and state management pull the workload deeper into the platform.',
        },
        {
          lead: 'Pull-through into Core and attach is the quality test',
          body: 'The strongest AI cohorts also consume Core, Observability, Security, and Storage, proving Vercel is capturing platform value rather than just model traffic.',
        },
        {
          lead: 'Retention after novelty fades separates signal from hype',
          body: 'Acceleration is real when AI apps keep traffic, spend, and operational complexity after the initial launch wave instead of collapsing after experimentation.',
        },
      ],
      mustBeTrue: [
        'AI apps move from experimentation to production',
        'Usage is durable',
        'Model economics stay healthy enough',
        'AI accounts lift non-AI parts of the business',
      ],
      risks: [
        {
          lead: 'AI revenue stays thin and margin-light',
          body: 'If model providers capture most value or workload mix stays expensive, Vercel can grow usage without attractive economics.',
        },
        {
          lead: 'Vercel wins deploy, not AI monetization',
          body: 'Teams may build with Claude Code or Codex and call Anthropic or OpenAI directly, leaving Vercel as standard hosting.',
        },
        {
          lead: 'Winning workloads graduate off managed layers',
          body: 'As scale rises, high-value teams may replace managed AI abstractions with direct inference or custom orchestration for cost and control.',
        },
        {
          lead: 'Experimentation scales faster than productionization',
          body: 'Launch volume can look strong even if too few AI apps become durable production workloads or deepen the rest of the stack.',
        },
      ],
      role: 'Selective committed contribution plus major upside',
    },
    {
      id: 'engine-enterprise',
      type: 'growth-engine',
      title: 'Growth engine 5: Enterprise modernization and standardization',
      headline:
        'Enterprise is the top strategic priority, but its 2026 contribution should be underwritten selectively.',
      engineTitle: 'Enterprise',
      overviewGroup: 'strategic',
      overviewTone: 'enterprise',
      overviewRole: 'Strategic priority',
      roleContext:
        'AI-assisted migration can shorten implementation cycles, but it does not remove 2026 execution risk.',
      overviewCatalysts: [
        'Repeatable migrations make enterprise growth underwritable',
        'Security, compliance, and admin readiness unlock broader standardization',
        'Expansion from first workload to platform footprint drives the upside',
      ],
      whyItMatters: [
        'Biggest upside per account',
        'Critical for durable long-term revenue concentration',
        'Important competitive battleground versus Cloudflare, AWS, and homegrown stacks',
      ],
      drivers: [
        {
          lead: 'A migration wedge tied to real modernization pain',
          body: 'Enterprise momentum starts when Vercel solves a painful use case or platform bottleneck, not when it sells abstract platform superiority.',
        },
        {
          lead: 'Time to first production traffic matters more than logos',
          body: 'The 2026 engine strengthens when signed accounts move meaningful workloads live quickly; slow post-close implementation weakens in-year dollars.',
        },
        {
          lead: 'Repeatable migration playbooks make revenue underwritable',
          body: 'The motion becomes credible only when discovery, security review, migration steps, and launch patterns repeat across accounts instead of resetting each time.',
        },
        {
          lead: 'Security and admin readiness unlock broader standardization',
          body: 'Compliance, RBAC, auditability, networking, and admin controls matter because they determine whether the first land expands into a broader platform foothold.',
        },
        {
          lead: 'Expansion from first workload proves enterprise quality',
          body: 'The best enterprise wins do not stop at one migrated app; they create a path to more teams, more workloads, and larger standardized spend.',
        },
      ],
      mustBeTrue: [
        '3 to 5 repeatable reference migrations',
        'Meaningful production traffic moved',
        'Faster technical win to go-live',
        'Evidence of path to larger enterprise spend',
      ],
      risks: [
        {
          lead: 'Production ramp timing misses the year',
          body: 'Even with strong top-of-funnel and conversion, migrations can take too long for meaningful production traffic to land inside 2026.',
        },
        {
          lead: 'Migration wedges fail to expand into real production',
          body: 'A promising first land can stall before broader workload migration, leaving too little standardized spend behind the initial win.',
        },
        {
          lead: 'Security and platform gaps stall rollout',
          body: 'Security credibility, compliance, networking, or admin gaps can stop standardization after the win, especially in sensitive accounts.',
        },
      ],
      role: 'Strategic priority\nSelectively underwritten in base plan',
    },
  ];

  const engineOverviewItems = growthEngineSlides.map((slide, index) => ({
    number: index + 1,
    title: slide.engineTitle,
    description: slide.headline,
    catalysts: slide.overviewCatalysts,
    tone: slide.overviewTone,
    group: slide.overviewGroup,
  }));

  return [
    {
      id: 'cover',
      type: 'cover',
      title: 'Vercel 2026 Growth Plan',
      subtitle: 'Credible Path to $650M',
      footer: deckMeta.footer,
      date: deckMeta.date,
    },
    {
      id: 'executive-summary',
      type: 'executive-summary',
      title: 'Executive Summary',
      headline: 'Keep the $650M ambition. Change how the plan is carried.',
      keyPoints: [
        'Support the $650M target, but do not underwrite all $350M of incremental growth equally.',
        'Let Core Platform, PLG conversion, and broad attach carry most of the committed 2026 bridge.',
        'Invest disproportionately in Enterprise modernization and AI platform leadership because they matter most strategically.',
        'Raise or lower Enterprise and AI weight only as migration, monetization, and readiness proof points turn green.',
      ],
      boxes: [
        {
          title: 'Target',
          items: [
            '$650M remains the right ambition.',
            'The plan should be framed as base plus upside, not as one equally de-risked number.',
          ],
        },
        {
          title: 'What carries the base',
          items: [
            'Core Platform expansion',
            'PLG to team to commercial conversion',
            'Premium attach across mature workloads',
          ],
        },
        {
          title: 'What gets strategic investment',
          items: [
            'Enterprise modernization and migration capability',
            'AI-native platform leadership and productionization',
          ],
        },
        {
          title: 'What changes my view',
          items: [
            'Repeatable enterprise migrations',
            'AI pull-through into Core and attach',
            'Stronger PLG conversion by channel and originating product land',
          ],
        },
      ],
    },
    {
      id: 'grounding',
      type: 'grounding',
      title: '2026 target and fixed GTM plan set a very high bar',
      headline:
        'The plan requires more than doubling revenue in one year and a major mix shift toward sales-led motions.',
    },
    {
      id: 'segment-execution',
      type: 'segments',
      title: 'Where Vercel is execution-ready today vs. where 2026 risk rises',
      headline:
        'Velocity motions are more ready to carry the base plan. Deal motions carry more upside, but depend on readiness still being built.',
      groups: [
        {
          title: 'Velocity motion',
          items: deckData.segment_execution_reality.filter((item) =>
            item.segment.startsWith('Self-Serve'),
          ),
        },
        {
          title: 'Deal motion',
          items: deckData.segment_execution_reality.filter((item) =>
            item.segment.startsWith('Sales-Led'),
          ),
        },
      ],
    },
    {
      id: 'engine-overview',
      type: 'engine-overview',
      title: 'The five growth engines and the main drivers behind each one',
      headline:
        'Before ranking them or sizing the bridge, define what each engine is and what catalysts matter in 2026.',
      groups: [
        {
          id: 'base',
          title: 'Committed 2026 base',
        },
        {
          id: 'strategic',
          title: 'Strategic upside',
        },
      ],
      items: engineOverviewItems,
    },
    {
      id: 'weights',
      type: 'weights',
      title: 'How I would weight the five growth engines',
      headline:
        'Separate what carries the committed 2026 plan from what deserves disproportionate strategic investment.',
      takeawaysTitle: 'Three takeaways',
      takeaways: [
        'This is not a ranking of importance. It is a ranking of what can responsibly carry the 2026 number.',
        'Core, PLG, and Attach carry the base plan because they have the shortest feedback loops and the strongest execution readiness.',
        'AI and Enterprise deserve disproportionate investment because they are strategic multipliers, but they should earn committed weight only as proof points turn green.',
      ],
      footerInsight:
        'More committed weight should be earned through proof points: enterprise migration velocity, AI production monetization, PLG conversion by channel, and attach depth on mature workloads.',
    },
    ...growthEngineSlides,
    {
      id: 'bridge',
      type: 'bridge',
      title:
        'Core, PLG, and Attach should carry most of the 2026 base plan; Enterprise and AI drive the upside to $650M',
      headline:
        '2025 base to 2026 target, split between committed underwriting and upside.',
      takeaways: [
        'Core, PLG, and Attach carry most of the committed bridge.',
        'Enterprise and AI add meaningful upside, but depend on proof points.',
        'The plan should be managed as base plus upside, not one equally underwritten number.',
      ],
    },
    {
      id: 'operating-model',
      type: 'operating-model',
      title: 'Product and Finance should run one AI-native operating system',
      headline:
        'Embed Finance in product decisions, review the portfolio weekly, go deep monthly in Core and AI, and use the quarterly review to make cross-portfolio tradeoffs.',
    },
    {
      id: 'risks',
      type: 'risks',
      title: 'The plan is most fragile in three engine risks, plus two macro risks',
      headline: 'The key question is what we would monitor early enough to react.',
    },
    {
      id: 'summary',
      type: 'summary',
      title: 'My answer to the case',
      headline:
        'Five direct answers to the interview prompt: plan path, pushback, data asks, operating model, and risks.',
      boxes: [
        {
          title: '1. How do you get to $650M?',
          items: [
            '**Committed bridge:** Carry the 2026 base plan with Core expansion, PLG conversion, and broad attach.',
            '**Upside logic:** Let Enterprise and AI earn more weight only as readiness, monetization, and migration proof points turn green.',
          ],
        },
        {
          title: '2. What would you push back on?',
          items: [
            '**I would not underwrite the fixed mix as-is** because it puts too much in-year burden on Sales-Led Enterprise.',
            '**Base-plan weight should shift** toward self-serve and mid-market motions with faster conversion and clearer product signal.',
          ],
        },
        {
          title: '3. What data or analysis would you ask for?',
          items: [
            '**Driver trees by engine:** enterprise migration funnel, production app counts, PLG-to-team conversion, and AI’s lift on Core intensity and attach.',
            '**Most important cuts:** workload, segment, model, and channel, especially if acquisition shifts toward agent-native, plug-in, and coding-agent surfaces.',
          ],
        },
        {
          title: '4. How should Product + Finance partner?',
          items: [
            '**Run one operating system:** set targets, allocate resources, and track performance through weekly metrics reviews, monthly deep dives, quarterly tradeoff reviews, and one shared scorecard with common definitions, owners, and AI-generated pre-reads for near-real-time visibility.',
            '**Use a default portfolio posture:** roughly 50 / 30 / 20 across core, proven growth channels and features, and upside bets; treat it as a governance framework, not a rigid formula, and keep upside funding gated by delivery and outcome milestones.',
          ],
        },
        {
          title: '5. What are the biggest risks?',
          items: [
            '**Most fragile areas:** enterprise migration timing, AI failing to become a tailwind for Core monetization, and PLG conversion / retention quality, plus macro channel and hosting commoditization risk.',
            '**Early monitors and contingencies:** watch AI apps reaching production, revenue per production AI app, attach depth on AI accounts, deploy-to-team expansion, PLG retention, and win-loss / channel trends; if they turn red, shift weight back toward Core, PLG, and proven attach while narrowing AI and Enterprise to the best wedges.',
          ],
        },
      ],
    },
  ];
}
