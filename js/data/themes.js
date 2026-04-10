export const DOMAINS = {
  EXECUTING: {
    label: "Executing",
    color: "#006b62",
    bg: "bg-primary",
    text: "text-on-primary",
    bar: "bg-[#006b62]"
  },
  INFLUENCING: {
    label: "Influencing",
    color: "#865400",
    bg: "bg-[#865400]",
    text: "text-[#fff7f3]",
    bar: "bg-[#865400]"
  },
  RELATIONSHIP_BUILDING: {
    label: "Relationship Building",
    color: "#2E7D32",
    bg: "bg-[#2E7D32]",
    text: "text-white",
    bar: "bg-[#2E7D32]"
  },
  STRATEGIC_THINKING: {
    label: "Strategic Thinking",
    color: "#4F46E5",
    bg: "bg-[#4F46E5]",
    text: "text-white",
    bar: "bg-[#4F46E5]"
  }
};

export const THEMES = {
  ACHIEVER: {
    id: "ACHIEVER",
    name: "Achiever",
    domain: "EXECUTING",
    description: "You have a constant need for achievement. Every day starts at zero — by the end of the day you must accomplish something tangible in order to feel good about yourself. This drive motivates you to work long hours and fuels an extraordinary work ethic.",
    actionItems: [
      "Channel your drive by keeping a daily priority list — crossing off items will sustain your momentum.",
      "Partner with Futuristic or Strategic thinkers to give your relentless productivity long-term direction."
    ]
  },
  ARRANGER: {
    id: "ARRANGER",
    name: "Arranger",
    domain: "EXECUTING",
    description: "You are a conductor. When faced with a complex situation involving many factors, you enjoy managing all the variables, aligning and realigning them until you are sure you have arranged them in the most productive configuration possible.",
    actionItems: [
      "Take on projects that require coordinating many people and moving parts — complexity energizes you.",
      "Volunteer to organize team workflows when processes feel inefficient; others will benefit from your re-arrangement instinct."
    ]
  },
  BELIEF: {
    id: "BELIEF",
    name: "Belief",
    domain: "EXECUTING",
    description: "You have certain core values that are enduring. These values give your life meaning and satisfaction. Your family, altruism, high ethics — these are your constants. Your work and relationships must be squarely aligned with your values to be sustainable.",
    actionItems: [
      "Articulate your values clearly so others understand what drives you and can align with your standards.",
      "Seek roles that allow you to work toward causes that resonate with your deepest convictions."
    ]
  },
  CONSISTENCY: {
    id: "CONSISTENCY",
    name: "Consistency",
    domain: "EXECUTING",
    description: "Balance is important to you. You are keenly aware of the need to treat people the same, no matter what their station in life. You believe that the same rules and processes should apply to everyone, and you resist those who would make exceptions.",
    actionItems: [
      "Champion clear, consistent policies and procedures in your organization — you are a natural rule-setter.",
      "Use your fairness instinct to spot and correct situations where some people receive preferential treatment."
    ]
  },
  DELIBERATIVE: {
    id: "DELIBERATIVE",
    name: "Deliberative",
    domain: "EXECUTING",
    description: "You are careful. You are vigilant. You are a private person who is not comfortable with risk. You know that the world is an unpredictable place and that events can blindside you. That is why you are at your best when anticipating problems and sidestepping them.",
    actionItems: [
      "Build in reflection time before major decisions — your thoroughness protects teams from costly errors.",
      "Position yourself as the person who identifies risks others overlook; frame caution as a strategic asset."
    ]
  },
  DISCIPLINE: {
    id: "DISCIPLINE",
    name: "Discipline",
    domain: "EXECUTING",
    description: "Your world needs to be ordered, predictable, and planned. So you instinctively impose structure on your world. You set up routines, focus on timelines, and demand precision. Amid the chaos of life, you are the anchor of stability.",
    actionItems: [
      "Create templates, checklists, and rituals for complex processes — your systems will help others perform better.",
      "Apply your love of order to project management and planning; predictability is your superpower."
    ]
  },
  FOCUS: {
    id: "FOCUS",
    name: "Focus",
    domain: "EXECUTING",
    description: "You can take a direction, follow through, and make the corrections necessary to stay on track. You prioritize, then act. Every day you set out with a clear agenda. People with Focus often act as a rudder — keeping the team moving in the right direction.",
    actionItems: [
      "Set clear quarterly goals so your natural targeting ability has well-defined objectives to lock onto.",
      "Help diffuse team meetings by steering conversations back to the core agenda when discussions stray."
    ]
  },
  RESPONSIBILITY: {
    id: "RESPONSIBILITY",
    name: "Responsibility",
    domain: "EXECUTING",
    description: "You take psychological ownership of what you say you will do. You are committed to stable values such as honesty and loyalty. Counterintuitively, this Responsibility talent actually gives you more freedom because people know they can always count on you.",
    actionItems: [
      "Take on high-stakes deliverables — your ownership ethic makes you the team's most trusted executor.",
      "Be selective about what you commit to; once you say yes, you feel bound to follow through completely."
    ]
  },
  RESTORATIVE: {
    id: "RESTORATIVE",
    name: "Restorative",
    domain: "EXECUTING",
    description: "You love to solve problems. Whereas some are dismayed when they encounter yet another breakdown, you can be energized by it. You enjoy the challenge of analyzing a situation, identifying what is wrong, and finding a solution.",
    actionItems: [
      "Seek out turnaround situations and troubled projects — your diagnostic talent thrives on what others avoid.",
      "Build a reputation as the go-to problem solver; apply your skills equally to interpersonal and process issues."
    ]
  },
  ACTIVATOR: {
    id: "ACTIVATOR",
    name: "Activator",
    domain: "INFLUENCING",
    description: "You can make things happen by turning thoughts into action. You are impatient with those who want to wait. 'When can we start?' is your characteristic refrain. You believe that only action is real, and you push others to act as well.",
    actionItems: [
      "Position yourself to kick off initiatives — your bias for action gets projects off the ground when others stall.",
      "Partner with Deliberative or Strategic thinkers to ensure your fast starts are headed in the right direction."
    ]
  },
  COMMAND: {
    id: "COMMAND",
    name: "Command",
    domain: "INFLUENCING",
    description: "You have presence. You have the ability to take control of a situation and make decisions. Unlike some people, you feel no discomfort with imposing your views on others. On the contrary, once your opinion is formed, you need to share it.",
    actionItems: [
      "Step into leadership vacuums — your confidence and directness stabilize groups in ambiguous situations.",
      "Practice listening before commanding; pairing Command with Empathy makes your authority far more trusted."
    ]
  },
  COMMUNICATION: {
    id: "COMMUNICATION",
    name: "Communication",
    domain: "INFLUENCING",
    description: "You like to explain, describe, host, speak, and write. You feel a need to bring ideas to life, to energize them, to make them exciting and vivid. Storytelling, presenting, conversing — these are your preferred modes of expression.",
    actionItems: [
      "Volunteer to present complex ideas to stakeholders — your ability to simplify and engage is rare and valuable.",
      "Develop signature stories that illustrate your team's mission; great communicators shape culture."
    ]
  },
  COMPETITION: {
    id: "COMPETITION",
    name: "Competition",
    domain: "INFLUENCING",
    description: "Competition is rooted in comparison. You need other people present so that you can compare your performance against theirs. You notice other people's performance. Their performance is the ultimate yardstick. If the group does not have a winner, there is no game, merely an activity.",
    actionItems: [
      "Seek out measurable roles with clear performance metrics — you thrive when you can see exactly how you rank.",
      "Channel competitive energy toward shared team goals so peers are allies, not rivals."
    ]
  },
  MAXIMIZER: {
    id: "MAXIMIZER",
    name: "Maximizer",
    domain: "INFLUENCING",
    description: "Excellence, not average, is your measure. Taking something from below average to slightly above average takes too much energy. In your view, if it does not reach excellence, it is not worth doing. You focus on strengths as a way to stimulate personal and group excellence.",
    actionItems: [
      "Identify the highest-potential people and processes around you — invest your energy where greatness is possible.",
      "Frame feedback in terms of building on what's already strong; this approach gets faster traction than fixing weaknesses."
    ]
  },
  SELF_ASSURANCE: {
    id: "SELF_ASSURANCE",
    name: "Self-Assurance",
    domain: "INFLUENCING",
    description: "Self-Assurance is similar to self-confidence. In the deepest part of you, you have faith in your strengths. You know that you are able. You can do it — whatever the 'it' is. This quieter form of confidence usually stems from a deep certainty in your own judgment.",
    actionItems: [
      "Trust your gut in high-stakes decisions — your inner compass rarely misleads you when you honor it.",
      "Share your reasoning when you act on conviction; others will trust your self-assurance more when they understand why."
    ]
  },
  SIGNIFICANCE: {
    id: "SIGNIFICANCE",
    name: "Significance",
    domain: "INFLUENCING",
    description: "You want to be very significant in the eyes of other people. In the truest sense of the word you want to be recognized. You want to be known. In particular, you want to be known and appreciated for the unique strengths you bring.",
    actionItems: [
      "Pursue high-visibility projects that allow your contributions to be seen and credited.",
      "Build a personal brand that highlights your strengths — your need for significance can fuel ambitious public work."
    ]
  },
  WOO: {
    id: "WOO",
    name: "Woo",
    domain: "INFLUENCING",
    description: "Woo stands for winning others over. You enjoy the challenge of meeting new people and getting them to like you. Strangers are rarely intimidating to you. On the contrary, strangers can be energizing. You derive satisfaction from breaking the ice and sparking new connections.",
    actionItems: [
      "Lead networking events, introductions, and community outreach — your charisma is an organizational asset.",
      "Use your social talent to build bridges between groups that wouldn't normally connect."
    ]
  },
  ADAPTABILITY: {
    id: "ADAPTABILITY",
    name: "Adaptability",
    domain: "RELATIONSHIP_BUILDING",
    description: "You live in the moment. You don't see the future as a fixed destination. Instead, you see it as a place that you create out of the choices that you make right now. This is not an aimless philosophy but one that suits your preference for living in the present.",
    actionItems: [
      "Embrace roles that require frequent pivoting and real-time response — uncertainty is where you thrive.",
      "Help steady anxious teammates during change; your calm adaptability is a genuine stabilizing force."
    ]
  },
  CONNECTEDNESS: {
    id: "CONNECTEDNESS",
    name: "Connectedness",
    domain: "RELATIONSHIP_BUILDING",
    description: "Things happen for a reason. You are sure of it. You are sure of it because in your soul you know that we are all connected. This belief is not limited to a single group. It extends to all people across all nationalities, races, and creeds.",
    actionItems: [
      "Help teammates see how their individual work fits into a larger mission — you make purpose visible.",
      "Bridge divides by finding the shared human thread beneath surface-level differences."
    ]
  },
  DEVELOPER: {
    id: "DEVELOPER",
    name: "Developer",
    domain: "RELATIONSHIP_BUILDING",
    description: "You see the potential in others. Very often, in fact, potential is all you see. In your view no individual is fully formed. On the contrary, each individual is a work in progress, alive with possibilities. You are drawn to people for this very reason.",
    actionItems: [
      "Take on mentoring and coaching responsibilities — you notice growth that others miss, and it motivates you.",
      "Celebrate incremental progress publicly; your acknowledgment of improvement is one of your most powerful gifts."
    ]
  },
  EMPATHY: {
    id: "EMPATHY",
    name: "Empathy",
    domain: "RELATIONSHIP_BUILDING",
    description: "You can sense the emotions of those around you. You can feel what they are feeling as though their feelings are your own. Intuitively, you are able to see the world through their eyes and share their perspective. You do not necessarily agree with each person's perspective.",
    actionItems: [
      "Use your emotional radar to detect unspoken tension in meetings before it derails collaboration.",
      "Position yourself as a trusted confidant; people feel heard and understood in your presence."
    ]
  },
  HARMONY: {
    id: "HARMONY",
    name: "Harmony",
    domain: "RELATIONSHIP_BUILDING",
    description: "You look for consensus. You don't enjoy conflict; rather, you feel that there is little to be gained from it. You believe that we are all in the same boat, and that we need each other to get along if we are going to achieve anything of lasting worth.",
    actionItems: [
      "Facilitate difficult conversations — your instinct for common ground defuses tension and builds agreement.",
      "Identify areas of agreement as starting points in negotiations; you naturally reveal what people share."
    ]
  },
  INCLUDER: {
    id: "INCLUDER",
    name: "Includer",
    domain: "RELATIONSHIP_BUILDING",
    description: "You are accepting of others. You show awareness of those who feel left out, and you make an effort to include them. You want to expand the group so all can feel the warmth of belonging. You notice the unnoticed.",
    actionItems: [
      "Advocate for underrepresented voices in team decisions — your instinct to include improves outcomes.",
      "When forming groups or committees, actively scan for who is missing and champion their inclusion."
    ]
  },
  INDIVIDUALIZATION: {
    id: "INDIVIDUALIZATION",
    name: "Individualization",
    domain: "RELATIONSHIP_BUILDING",
    description: "You are intrigued with the unique qualities of each person. You have a gift for figuring out how people who are different can work together productively. You resist the urge to treat people the same; instead, you tailor your approach to each individual.",
    actionItems: [
      "Customize how you manage and communicate with each teammate — your personalized style builds loyalty.",
      "Help leaders build better teams by articulating what makes each person uniquely valuable."
    ]
  },
  POSITIVITY: {
    id: "POSITIVITY",
    name: "Positivity",
    domain: "RELATIONSHIP_BUILDING",
    description: "You are generous with praise, quick to smile, and always on the lookout for the positive in the situation. Some call you lighthearted. Others just wish that their world were as positive as yours seems to be. You get others excited about what they are going to do.",
    actionItems: [
      "Kick off projects and meetings with genuine enthusiasm — your energy is contagious and motivating.",
      "Be a deliberate culture carrier; your positivity shapes team morale more than you realize."
    ]
  },
  RELATOR: {
    id: "RELATOR",
    name: "Relator",
    domain: "RELATIONSHIP_BUILDING",
    description: "Relator describes your attitude toward your relationships. In simple terms, the Relator theme pulls you toward people you already know. You do not necessarily shy away from meeting new people — it is just that you derive a great deal of pleasure and strength from being around your close friends.",
    actionItems: [
      "Invest in deepening existing partnerships — your best work emerges from trusted, long-term collaboration.",
      "Share personal stories with teammates; your openness invites the deep connection you crave."
    ]
  },
  ANALYTICAL: {
    id: "ANALYTICAL",
    name: "Analytical",
    domain: "STRATEGIC_THINKING",
    description: "Your Analytical theme challenges other people: 'Prove it. Show me why what you are claiming is true.' In the face of this challenge, some will give up their convictions, but those with facts will strengthen them. You are the person who seeks to understand.",
    actionItems: [
      "Volunteer to audit plans and proposals — your skeptical rigor catches flawed assumptions before they become costly.",
      "Build in data review checkpoints on projects; your evidence-based lens gives teams confidence in their decisions."
    ]
  },
  CONTEXT: {
    id: "CONTEXT",
    name: "Context",
    domain: "STRATEGIC_THINKING",
    description: "You look back. You look back because that is where the answers lie. You look at the history of the current situation. This historical context gives you confidence. Your decisions are sounder. Your predictions of the future seem to be more accurate.",
    actionItems: [
      "Research the background of decisions before acting — your historical perspective prevents reinventing costly mistakes.",
      "Serve as the team's institutional memory; you can explain why current processes exist and what they replaced."
    ]
  },
  FUTURISTIC: {
    id: "FUTURISTIC",
    name: "Futuristic",
    domain: "STRATEGIC_THINKING",
    description: "You are a dreamer who sees visions of what could be and who cherishes those visions. When the present proves too frustrating and the people around you too pragmatic, you conjure up your visions of the future and they energize you.",
    actionItems: [
      "Paint vivid pictures of what the future could look like — your vision inspires and aligns teams around possibility.",
      "Use your forward-thinking talent to identify emerging opportunities before others recognize them."
    ]
  },
  IDEATION: {
    id: "IDEATION",
    name: "Ideation",
    domain: "STRATEGIC_THINKING",
    description: "You are fascinated by ideas. What is an idea? An idea is a connection. You love finding connections — that is, you love finding the link between seemingly unrelated phenomena. An idea is transformative. It can take existing material and combine it in a new and original way.",
    actionItems: [
      "Carve out time for creative brainstorming — constraints bore you, but open-ended ideation energizes you.",
      "Pair with an Activator or Achiever to convert your abundant ideas into concrete, executed outcomes."
    ]
  },
  INPUT: {
    id: "INPUT",
    name: "Input",
    domain: "STRATEGIC_THINKING",
    description: "You are inquisitive. You collect things. You might collect information — words, facts, books, quotations — or you might collect tangible objects such as butterflies, baseball cards, or memorabilia. Whatever you collect, you collect it because it interests you.",
    actionItems: [
      "Build curated knowledge systems — your archives become invaluable organizational resources over time.",
      "Share your research and reading broadly; your input talent is most powerful when it flows to others who can use it."
    ]
  },
  INTELLECTION: {
    id: "INTELLECTION",
    name: "Intellection",
    domain: "STRATEGIC_THINKING",
    description: "You like to think. You like mental activity. You like exercising the 'muscles' of your brain, stretching them in multiple directions. This need for mental activity may push you toward the practical sphere or it may be more philosophical.",
    actionItems: [
      "Schedule uninterrupted thinking time daily — your best insights come from deep, solitary reflection.",
      "Write or journal regularly; converting your private thoughts into shareable form multiplies their impact."
    ]
  },
  LEARNER: {
    id: "LEARNER",
    name: "Learner",
    domain: "STRATEGIC_THINKING",
    description: "You love to learn. The subject matter that interests you most will be determined by your other themes and experiences, but whatever the subject, you will always be drawn to the process of learning. The process, more than the content, is what is particularly exciting to you.",
    actionItems: [
      "Pursue formal and informal learning continuously — conferences, courses, and new challenges all energize you.",
      "Volunteer for assignments that require mastering new skills; your enthusiasm for learning accelerates team capability."
    ]
  },
  STRATEGIC: {
    id: "STRATEGIC",
    name: "Strategic",
    domain: "STRATEGIC_THINKING",
    description: "The Strategic theme enables you to sort through the clutter and find the best route. It is not a skill that can be taught. It is a distinct way of thinking — a special perspective on the world at large. This perspective allows you to see patterns where others simply see complexity.",
    actionItems: [
      "Think out loud before major decisions — your pattern recognition is a gift that others need to hear.",
      "Use your strategic lens to evaluate options and contingencies before teams commit to a direction."
    ]
  }
};

export const THEME_IDS = Object.keys(THEMES);
