export const speakerNotes = {
  cover: {
    objective:
      'Open by framing this as a credibility exercise under constraint, not a bottoms-up forecast pretending to be precise.',
    talkTrack: [
      'The case starts with a fixed $650M target, a fixed GTM mix, and a product portfolio that is broadening quickly.',
      'My job in this readout is to turn that top-down target into a plan that Product, Engineering, GTM, and Finance could actually execute.',
      'The central answer is: keep the ambition, but change how the plan is carried and how the company manages proof points through the year.',
    ],
    backPocket: [
      'I am using the facts in the prompt plus strategic underwriting logic, not pretending I have internal cohort data the company itself would have.',
      'The real question is not whether $650M sounds attractive. It is whether the mix carrying the plan is credible.',
    ],
    transition:
      'Start with the math and the fixed GTM mix, because that sets the constraint the rest of the deck is trying to solve.',
  },
  'executive-summary': {
    objective:
      'Land the whole answer in under a minute so the audience knows the recommendation before we walk through the evidence.',
    talkTrack: [
      'I support the $650M ambition, but I would not underwrite all $350M of incremental growth equally.',
      'Core Platform, PLG conversion, and broad attach should carry most of the committed 2026 bridge.',
      'Enterprise and AI deserve disproportionate strategic investment, but they should earn incremental committed weight only as proof points improve.',
      'So the plan should be run as base plus upside, not as one equally de-risked number.',
    ],
    backPocket: [
      'This is the distinction between underwriting confidence and strategic importance.',
      'Finance discipline says do not over-underwrite the slowest motions. Strategy says still invest where long-term control points matter most.',
    ],
    transition:
      'Now I’ll show why the fixed target and mix create tension before I explain how I would re-carry the plan.',
  },
  grounding: {
    objective:
      'Make the size of the target jump and the GTM mix shift feel concrete enough that the audience accepts the need to reframe the plan.',
    talkTrack: [
      'The company is moving from $300M in 2025 to a $650M target in 2026, which means a +$350M bridge and roughly +117% YoY growth.',
      'At the same time, the fixed GTM mix places a lot of weight into sales-led motions, especially Enterprise.',
      'That is the key tension: the plan asks the slowest and most execution-dependent motion to carry too much of the in-year burden.',
    ],
    backPocket: [
      'Enterprise alone is $230M of the fixed mix, which is a very large share for a motion that still depends on migration and readiness improvements.',
      'This slide is not arguing that Enterprise is unimportant. It is arguing that timing and underwriting confidence are not the same thing as long-term value.',
    ],
    transition:
      'The next question is where Vercel is most execution-ready today versus where 2026 risk rises.',
  },
  'segment-execution': {
    objective:
      'Pressure-test the fixed GTM mix against execution readiness by segment, not just against strategic desirability.',
    talkTrack: [
      'Self-serve SMB is the strongest natural fit because it has the fastest onboarding and cleanest in-year feedback loop.',
      'Self-serve mid-market is especially attractive because it bridges individual developer pull into denser team monetization.',
      'Sales-led mid-market can work if product-qualified conversion is real, but sales-led Enterprise remains the least ready motion to underwrite heavily in-year.',
      'So not all segments deserve the same 2026 carrying weight, even if some deserve more long-term investment.',
    ],
    backPocket: [
      'This is the slide where I explicitly separate execution readiness from strategic importance.',
      'If challenged on why self-serve gets more committed weight, the answer is time-to-signal and time-to-dollar, not lack of ambition.',
    ],
    transition:
      'With segment readiness in mind, I then define the five growth engines themselves before ranking or sizing them.',
  },
  'engine-overview': {
    objective:
      'Define the five engines in a way that feels like a driver tree, not a generic list of growth motions.',
    talkTrack: [
      'I group the engines into what can credibly support the committed base and what should be treated as strategic upside.',
      'The important move here is to define each engine by what would actually cause it to inflect in 2026.',
      'That means focusing on second- and third-order catalysts like productionization, workload intensity, governance signals, and migration repeatability rather than generic top-line growth language.',
    ],
    backPocket: [
      'This slide creates the logic backbone for the deep dives that follow.',
      'The engine names are intentionally canonical and stay consistent across the rest of the deck: Core Platform, PLG Conversion, Attach, AI, and Enterprise.',
    ],
    transition:
      'Once the engines are defined, the next step is to separate what should carry the plan from what deserves the most investment.',
  },
  weights: {
    objective:
      'Make the underwriting-versus-investment distinction explicit, because that is the core strategic move in the deck.',
    talkTrack: [
      'This is not one master ranking. It is two different lenses.',
      'The committed 2026 plan should lean most on Core, PLG, and Attach because those have shorter feedback loops and stronger current readiness.',
      'Strategic investment priority is different: Enterprise and AI matter most long term, so they deserve outsize investment even if they earn committed bridge weight more slowly.',
      'More committed weight should be earned through proof points like enterprise migration velocity, AI production monetization, PLG conversion by channel, and attach depth on mature workloads.',
    ],
    backPocket: [
      'If an executive asks why Enterprise can be number one strategically but number five in committed reliance, this is the answer.',
      'It is the difference between where you place risk capital and where you book near-term accountability.',
    ],
    transition:
      'Now I go one engine at a time to explain the actual catalysts, what must be true, and what can break.',
  },
  'engine-core': {
    objective:
      'Explain why Core Platform is the financial backbone of the plan and why its driver tree is stronger than generic “more developers” thinking.',
    talkTrack: [
      'The key metric is production app count, not project count. More hobby projects do not carry the plan.',
      'The next unlock is workload intensity per winning app: AI-era apps matter when they raise compute duration, transfer, concurrency, and operational requirements.',
      'Time-to-production compression matters because moving builders faster from first deploy to durable live traffic brings revenue into the year.',
      'A strong Core cohort should also deepen into team expansion and a broader governed production footprint.',
    ],
    backPocket: [
      'The main risk is activity growth without production conversion.',
      'If AI demand shows up only as low-quality experimentation, Core looks busy without getting more valuable.',
    ],
    transition:
      'From there, the next question is how individual developer adoption converts into denser team and commercial revenue.',
  },
  'engine-plg': {
    objective:
      'Show that PLG conversion is not a sales motion disguised as product growth; it is a monetization-quality engine built on the right product signals.',
    talkTrack: [
      'The first signal is production persistence after launch. I care far more about a live app that stays live than about broad casual sign-up volume.',
      'What matters next is collaboration around the same live workload, not random multi-user activity inside an account.',
      'The best pattern is multiple production apps and domains concentrating inside one workspace with governance and spend controls appearing as usage rises.',
      'Commercial assist should happen only when that signal stack converges; one metric by itself is too noisy.',
    ],
    backPocket: [
      'This is why I describe PLG as a densification engine, not simply a growth motion.',
      'The main failure mode is audience growth without monetizable organizational intent.',
    ],
    transition:
      'Once production teams are forming, the next monetization layer is attach across more operationally critical workloads.',
  },
  'engine-attach': {
    objective:
      'Frame Attach as real and meaningful, but only where workloads become operationally important enough to sustain premium monetization.',
    talkTrack: [
      'Attach is strongest when uptime risk, governance need, or statefulness becomes real, because that is when observability, security, and storage become harder to work around.',
      'So I care more about workload maturity and production criticality than about raw feature adoption.',
      'AI can deepen attach, but only if it creates durable logs, secrets, storage, and operational complexity that the customer will pay to manage.',
      'This is why attach improves both monetization depth and retention quality when it works.',
    ],
    backPocket: [
      'The risk is not that nobody uses the products. The risk is that customers use them tactically while mission-critical workflows stay elsewhere.',
      'Segment mix matters a lot here: self-serve-heavy growth can dilute premium attach depth.',
    ],
    transition:
      'AI then becomes the next question, but only if it behaves like a platform tailwind instead of low-quality volume.',
  },
  'engine-ai': {
    objective:
      'Make the AI thesis intellectually honest: strategically mandatory, but only financially attractive if it improves platform economics and the rest of the stack.',
    talkTrack: [
      'In the base plan, I only assume a modest AI tailwind into Core and attach. The real upside comes only if AI also becomes durable direct platform monetization.',
      'The key distinction is production AI apps versus experimental launches. Launch count is not the metric that matters.',
      'Workflow economics matter more than raw token volume because model mix, inference pattern, and workload type determine revenue quality.',
      'The best AI cohorts also deepen Core and attach usage. That pull-through is the quality test for whether Vercel is capturing platform value.',
      'Retention after novelty fades is what separates real platform signal from hype.',
    ],
    backPocket: [
      'A real red-team risk is that Vercel wins deploy while Claude Code, Codex, Anthropic, or OpenAI capture most of the AI monetization.',
      'Another risk is graduation off managed abstractions into direct inference or custom orchestration.',
    ],
    transition:
      'Enterprise then matters as the biggest strategic upside, but it should be judged by production traffic, not logos.',
  },
  'engine-enterprise': {
    objective:
      'Explain why Enterprise is the top strategic priority but still the least appropriate engine to overweight in the committed 2026 base.',
    talkTrack: [
      'Enterprise only becomes underwritable when Vercel has a migration wedge tied to real modernization pain, not just a broad platform pitch.',
      'Time to first production traffic matters more than logos, because signed accounts do not carry the year unless workloads actually ramp.',
      'The revenue becomes more credible as migration playbooks repeat and as security, compliance, admin, and networking readiness improve.',
      'The best wins also expand from the first workload into broader standardization, proving the platform is becoming sticky at account level.',
    ],
    backPocket: [
      'If asked why I am not more aggressive on Enterprise, the answer is timing, not lack of conviction.',
      'AI-assisted migration can reduce friction, but it does not erase 2026 execution risk.',
    ],
    transition:
      'With the engine logic set, I then put actual bridge math on top of the underwriting framework.',
  },
  bridge: {
    objective:
      'Turn the strategic view into a clear bridge: what is committed, what is upside, and why the plan should be managed in those two layers.',
    talkTrack: [
      'I start from the $300M 2025 base and bridge to $650M using the five engines, but I do not treat every dollar as equally de-risked.',
      'The committed bridge is $310M, carried mainly by Core, PLG, and Attach.',
      'That does not mean AI is absent from the base plan; a modest AI tailwind is already embedded inside Core and Attach. What remains mostly upside is direct AI monetization plus incremental pull-through beyond that.',
      'The remaining $40M is upside, driven primarily by AI and Enterprise earning more weight as proof points materialize.',
      'This makes the operating model clearer: base plan accountability sits in the most ready engines, while upside is earned rather than assumed.',
    ],
    backPocket: [
      'If challenged on why AI and Enterprise still show some committed dollars, the answer is that they are not zero, just selectively underwritten.',
      'This slide is the financial synthesis of the whole deck.',
    ],
    transition:
      'Once the bridge is set, the next question is how Product and Finance should run the company against it.',
  },
  'operating-model': {
    objective:
      'Answer the operating-model question from the prompt and show how Product and Finance can actually manage the plan together.',
    talkTrack: [
      'Finance should be embedded upstream in product decisions, not only downstream in reporting.',
      'The weekly forum is intentionally a metrics review, not a deep-dive meeting; deeper investigations happen async or in the monthly reviews.',
      'Monthly Core and AI reviews are where the major driver trees, forecast changes, and intervention decisions happen.',
      'The quarterly executive review is the place to make resource shifts, approve tradeoffs, and escalate product or delivery gaps.',
    ],
    backPocket: [
      'The enabling systems are a shared scorecard, AI-generated pre-reads, clear owners, and a decision log.',
      'This slide sets up the answer on slide 15 around target setting, resource allocation, and performance tracking.',
    ],
    transition:
      'The last structural question is risk: where the plan is fragile and what we would need to monitor early enough to react.',
  },
  risks: {
    objective:
      'Show the audience that the plan is not being sold as frictionless and that there is a concrete monitoring system behind the recommendations.',
    talkTrack: [
      'The three engine risks are Enterprise underdelivery, AI becoming low-quality revenue, and PLG conversion underperformance.',
      'For each one, I separate what breaks from what I would monitor so that the plan has real leading indicators rather than hindsight metrics.',
      'I then add two macro risks around agent-selected tool distribution and hosting commoditization, because those can change acquisition quality and pricing power.',
      'The point is to build the plan with early warning systems, not to wait for quarter-end misses.',
    ],
    backPocket: [
      'The most important nuance is timing: Enterprise can look healthy on top-of-funnel and still miss the year if production ramp takes too long.',
      'For AI, the real question is whether it becomes a tailwind to Core monetization, not just a standalone revenue line.',
    ],
    transition:
      'I end by answering the interview prompt directly, one question at a time, so the recommendation is explicit.',
  },
  summary: {
    objective:
      'Close the case by answering the prompt directly and making it easy for an interviewer to judge the quality of the recommendation.',
    talkTrack: [
      'I answer the prompt in five buckets: the path to $650M, the pushback on the plan, the data asks, the Product + Finance operating model, and the risks plus contingencies.',
      'The core recommendation is consistent across all five answers: keep the ambition, shift the carrying mix, and manage the year through proof points rather than hope.',
      'If time is short, this is the slide I would use to summarize the whole readout and handle discussion from here.',
    ],
    backPocket: [
      'The hidden logic behind the slide is that every answer ties back either to underwriting confidence or to strategic investment priority.',
      'If pushed on what changes my view most, the answer is repeatable enterprise migrations, stronger AI pull-through into Core and attach, and healthier PLG conversion by channel.',
    ],
    transition:
      'Stop here for discussion, and be ready to go deeper on the bridge, Enterprise timing, AI quality, or the operating cadence depending on where the interviewer wants to focus.',
  },
};

export default speakerNotes;
