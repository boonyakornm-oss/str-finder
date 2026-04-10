// 177 paired-statement questions.
// Each statementA/B maps to 1-2 theme IDs.
// Response scale: 1=Completely A, 2=Somewhat A, 3=Neutral, 4=Somewhat B, 5=Completely B

export const QUESTIONS = [
  // ── ACHIEVER A-side (Q1–Q6) ───────────────────────────────────────────────
  {
    id: 1,
    statementA: { text: "I measure each day by what I accomplish.", themes: ["ACHIEVER"] },
    statementB: { text: "I prefer to let things unfold naturally as they come.", themes: ["ADAPTABILITY"] }
  },
  {
    id: 2,
    statementA: { text: "I am driven to complete more tasks than others expect of me.", themes: ["ACHIEVER"] },
    statementB: { text: "I work to find common ground and bring people into agreement.", themes: ["HARMONY"] }
  },
  {
    id: 3,
    statementA: { text: "I set new personal performance targets for myself constantly.", themes: ["ACHIEVER"] },
    statementB: { text: "I try to understand the historical roots of current situations.", themes: ["CONTEXT"] }
  },
  {
    id: 4,
    statementA: { text: "I feel most alive when I am producing visible results.", themes: ["ACHIEVER"] },
    statementB: { text: "I invest deeply in a small circle of close, trusted relationships.", themes: ["RELATOR"] }
  },
  {
    id: 5,
    statementA: { text: "I push myself hard to meet every goal I set.", themes: ["ACHIEVER"] },
    statementB: { text: "I need extended time alone to think through complex problems.", themes: ["INTELLECTION"] }
  },
  {
    id: 6,
    statementA: { text: "I am at my best when I'm busy producing tangible results.", themes: ["ACHIEVER"] },
    statementB: { text: "I make sure no one in a group is left out or overlooked.", themes: ["INCLUDER"] }
  },

  // ── ARRANGER A-side (Q7–Q11) ──────────────────────────────────────────────
  {
    id: 7,
    statementA: { text: "I love arranging people and resources for maximum efficiency.", themes: ["ARRANGER"] },
    statementB: { text: "I carefully weigh potential downsides before committing to a path.", themes: ["DELIBERATIVE"] }
  },
  {
    id: 8,
    statementA: { text: "I enjoy restructuring how work flows to make it more efficient.", themes: ["ARRANGER"] },
    statementB: { text: "I need solid data and evidence before I draw conclusions.", themes: ["ANALYTICAL"] }
  },
  {
    id: 9,
    statementA: { text: "I reconfigure priorities on the fly to extract the best outcome.", themes: ["ARRANGER"] },
    statementB: { text: "I follow through on every commitment I make, no matter what.", themes: ["RESPONSIBILITY"] }
  },
  {
    id: 10,
    statementA: { text: "I thrive when managing many moving parts simultaneously.", themes: ["ARRANGER"] },
    statementB: { text: "My deepest convictions guide every major decision I make.", themes: ["BELIEF"] }
  },
  {
    id: 11,
    statementA: { text: "I find better ways to juggle multiple overlapping priorities.", themes: ["ARRANGER"] },
    statementB: { text: "I can sense how others are feeling without being told.", themes: ["EMPATHY"] }
  },

  // ── BELIEF A-side (Q12–Q16) ───────────────────────────────────────────────
  {
    id: 12,
    statementA: { text: "My values are the non-negotiable compass of my life.", themes: ["BELIEF"] },
    statementB: { text: "I am energized by measuring my performance against others.", themes: ["COMPETITION"] }
  },
  {
    id: 13,
    statementA: { text: "I have core convictions that define who I am at my foundation.", themes: ["BELIEF"] },
    statementB: { text: "I systematically gather evidence before accepting any idea.", themes: ["ANALYTICAL"] }
  },
  {
    id: 14,
    statementA: { text: "A sense of higher purpose drives my daily work.", themes: ["BELIEF"] },
    statementB: { text: "I need others to recognize and value my contributions.", themes: ["SIGNIFICANCE"] }
  },
  {
    id: 15,
    statementA: { text: "My principles shape every major choice I make.", themes: ["BELIEF"] },
    statementB: { text: "I love learning new things regardless of the topic.", themes: ["LEARNER"] }
  },
  {
    id: 16,
    statementA: { text: "I live and work by a clear set of personal values.", themes: ["BELIEF"] },
    statementB: { text: "I get a rush of energy from starting new initiatives.", themes: ["ACTIVATOR"] }
  },

  // ── CONSISTENCY A-side (Q17–Q21) ─────────────────────────────────────────
  {
    id: 17,
    statementA: { text: "I believe everyone should be treated by the same rules.", themes: ["CONSISTENCY"] },
    statementB: { text: "I am fascinated by what makes each individual truly unique.", themes: ["INDIVIDUALIZATION"] }
  },
  {
    id: 18,
    statementA: { text: "I value standardized processes that apply equally to all people.", themes: ["CONSISTENCY"] },
    statementB: { text: "I am energized by imagining what the future could become.", themes: ["FUTURISTIC"] }
  },
  {
    id: 19,
    statementA: { text: "I feel discomfort when rules are applied differently to different people.", themes: ["CONSISTENCY"] },
    statementB: { text: "I prefer to invest in a handful of deep, trusted relationships.", themes: ["RELATOR"] }
  },
  {
    id: 20,
    statementA: { text: "I want clear, consistent policies that apply to everyone.", themes: ["CONSISTENCY"] },
    statementB: { text: "I quickly see multiple pathways to any goal.", themes: ["STRATEGIC"] }
  },
  {
    id: 21,
    statementA: { text: "I think it is important to treat all people equitably.", themes: ["CONSISTENCY"] },
    statementB: { text: "I prefer to strengthen what is already working well.", themes: ["MAXIMIZER"] }
  },

  // ── DISCIPLINE A-side (Q22–Q26) ──────────────────────────────────────────
  {
    id: 22,
    statementA: { text: "I create systems and routines that bring order to my environment.", themes: ["DISCIPLINE"] },
    statementB: { text: "I respond naturally to whatever the moment demands.", themes: ["ADAPTABILITY"] }
  },
  {
    id: 23,
    statementA: { text: "I work best with a structured schedule and clear plans.", themes: ["DISCIPLINE"] },
    statementB: { text: "I am inspired by possibilities that do not yet exist.", themes: ["FUTURISTIC"] }
  },
  {
    id: 24,
    statementA: { text: "I rely on routines to stay productive and effective.", themes: ["DISCIPLINE"] },
    statementB: { text: "I love crafting stories and explanations that others can follow.", themes: ["COMMUNICATION"] }
  },
  {
    id: 25,
    statementA: { text: "I keep careful records and organized systems for everything.", themes: ["DISCIPLINE"] },
    statementB: { text: "I get excited by new and unusual ideas that cross boundaries.", themes: ["IDEATION"] }
  },
  {
    id: 26,
    statementA: { text: "I need structure in my environment to feel calm and productive.", themes: ["DISCIPLINE"] },
    statementB: { text: "I naturally bring enthusiasm and positive energy to any group.", themes: ["POSITIVITY"] }
  },

  // ── RESPONSIBILITY A-side (Q27–Q31) ──────────────────────────────────────
  {
    id: 27,
    statementA: { text: "I own the outcomes of everything I commit to.", themes: ["RESPONSIBILITY"] },
    statementB: { text: "I focus on elevating what is already performing well.", themes: ["MAXIMIZER"] }
  },
  {
    id: 28,
    statementA: { text: "I take personal accountability even when things go wrong.", themes: ["RESPONSIBILITY"] },
    statementB: { text: "I energize others by sharing a compelling vision of what is possible.", themes: ["COMMUNICATION"] }
  },
  {
    id: 29,
    statementA: { text: "My word is my bond — I always follow through on what I promise.", themes: ["RESPONSIBILITY"] },
    statementB: { text: "I rely on my own conviction rather than needing external validation.", themes: ["SELF_ASSURANCE"] }
  },
  {
    id: 30,
    statementA: { text: "I feel a deep ethical duty to meet every commitment I make.", themes: ["RESPONSIBILITY"] },
    statementB: { text: "I need people to recognize the value and quality of my work.", themes: ["SIGNIFICANCE"] }
  },
  {
    id: 31,
    statementA: { text: "I hold myself to the highest standards of follow-through and integrity.", themes: ["RESPONSIBILITY"] },
    statementB: { text: "I am naturally upbeat and find the bright side of any situation.", themes: ["POSITIVITY"] }
  },

  // ── RESTORATIVE A-side (Q32–Q37) ─────────────────────────────────────────
  {
    id: 32,
    statementA: { text: "I love the challenge of diagnosing what is broken.", themes: ["RESTORATIVE"] },
    statementB: { text: "I take real pleasure in helping others develop their potential.", themes: ["DEVELOPER"] }
  },
  {
    id: 33,
    statementA: { text: "I am energized when I fix a difficult problem others have avoided.", themes: ["RESTORATIVE"] },
    statementB: { text: "I constantly generate creative connections between unrelated ideas.", themes: ["IDEATION"] }
  },
  {
    id: 34,
    statementA: { text: "I seek out problems that others have not been able to solve.", themes: ["RESTORATIVE"] },
    statementB: { text: "I dig into facts and data to understand root causes.", themes: ["ANALYTICAL"] }
  },
  {
    id: 35,
    statementA: { text: "I thrive when reviving something that has declined or stalled.", themes: ["RESTORATIVE"] },
    statementB: { text: "I enjoy sparking conversations with people I have never met before.", themes: ["WOO"] }
  },
  {
    id: 36,
    statementA: { text: "I get deep satisfaction from finding and fixing a flaw.", themes: ["RESTORATIVE"] },
    statementB: { text: "I am compelled by what the future might hold for us all.", themes: ["FUTURISTIC"] }
  },
  {
    id: 37,
    statementA: { text: "I am drawn to situations that need a turnaround.", themes: ["RESTORATIVE"] },
    statementB: { text: "I build long-lasting bonds with a few close and trusted people.", themes: ["RELATOR"] }
  },

  // ── ACTIVATOR A-side (Q38–Q42) ───────────────────────────────────────────
  {
    id: 38,
    statementA: { text: "I am impatient to begin rather than spend more time planning.", themes: ["ACTIVATOR"] },
    statementB: { text: "I take great care to think through decisions thoroughly.", themes: ["DELIBERATIVE"] }
  },
  {
    id: 39,
    statementA: { text: "I turn ideas into action faster than most people around me.", themes: ["ACTIVATOR"] },
    statementB: { text: "I maintain structured routines and predictable systems daily.", themes: ["DISCIPLINE"] }
  },
  {
    id: 40,
    statementA: { text: "I believe the best way to learn is to start doing.", themes: ["ACTIVATOR"] },
    statementB: { text: "I trace the historical roots of current issues before engaging.", themes: ["CONTEXT"] }
  },
  {
    id: 41,
    statementA: { text: "I push for action when groups are still deliberating.", themes: ["ACTIVATOR"] },
    statementB: { text: "I gather and archive information to have it available later.", themes: ["INPUT"] }
  },
  {
    id: 42,
    statementA: { text: "I want to get started now rather than wait for a perfect plan.", themes: ["ACTIVATOR"] },
    statementB: { text: "I like to sit alone and think through complex matters deeply.", themes: ["INTELLECTION"] }
  },

  // ── COMMAND A-side (Q43–Q47) ─────────────────────────────────────────────
  {
    id: 43,
    statementA: { text: "I take charge in ambiguous or difficult situations.", themes: ["COMMAND"] },
    statementB: { text: "I work to smooth tensions and restore peace in a group.", themes: ["HARMONY"] }
  },
  {
    id: 44,
    statementA: { text: "I am comfortable directing others toward a clear goal.", themes: ["COMMAND"] },
    statementB: { text: "I make sure everyone's voice is heard and included in the group.", themes: ["INCLUDER"] }
  },
  {
    id: 45,
    statementA: { text: "I speak my mind directly, even in difficult conversations.", themes: ["COMMAND"] },
    statementB: { text: "I carefully deliberate before committing to any decision.", themes: ["DELIBERATIVE"] }
  },
  {
    id: 46,
    statementA: { text: "I naturally assume leadership when a group needs direction.", themes: ["COMMAND"] },
    statementB: { text: "I nurture close, trust-based relationships over time.", themes: ["RELATOR"] }
  },
  {
    id: 47,
    statementA: { text: "I influence others through confidence and clarity of position.", themes: ["COMMAND"] },
    statementB: { text: "I pick up on the emotions of others before they speak.", themes: ["EMPATHY"] }
  },

  // ── COMPETITION A-side (Q48–Q52) ─────────────────────────────────────────
  {
    id: 48,
    statementA: { text: "I compare my output to others to gauge how well I'm doing.", themes: ["COMPETITION"] },
    statementB: { text: "I find meaning in nurturing others' growth and success.", themes: ["DEVELOPER"] }
  },
  {
    id: 49,
    statementA: { text: "I am most motivated when I'm competing and winning.", themes: ["COMPETITION"] },
    statementB: { text: "I feel a deep sense of interconnectedness with all people.", themes: ["CONNECTEDNESS"] }
  },
  {
    id: 50,
    statementA: { text: "Winning against others drives my best performance.", themes: ["COMPETITION"] },
    statementB: { text: "I believe principled living is more important than gaining an advantage.", themes: ["BELIEF"] }
  },
  {
    id: 51,
    statementA: { text: "I keep score because measuring up to others matters to me.", themes: ["COMPETITION"] },
    statementB: { text: "I seek mutual understanding and common ground with others.", themes: ["HARMONY"] }
  },
  {
    id: 52,
    statementA: { text: "I am energized when I can outperform everyone around me.", themes: ["COMPETITION"] },
    statementB: { text: "I feel others' emotions alongside them, not just observe them.", themes: ["EMPATHY"] }
  },

  // ── MAXIMIZER A-side (Q53–Q57) ───────────────────────────────────────────
  {
    id: 53,
    statementA: { text: "I focus on refining strengths rather than fixing weaknesses.", themes: ["MAXIMIZER"] },
    statementB: { text: "I am energized by turning failing situations around.", themes: ["RESTORATIVE"] }
  },
  {
    id: 54,
    statementA: { text: "I prefer to invest energy in excellence over good-enough.", themes: ["MAXIMIZER"] },
    statementB: { text: "I want fair, consistent treatment for all people.", themes: ["CONSISTENCY"] }
  },
  {
    id: 55,
    statementA: { text: "I look for the highest-potential people and situations to invest in.", themes: ["MAXIMIZER"] },
    statementB: { text: "I take ownership of outcomes, even unpleasant or difficult ones.", themes: ["RESPONSIBILITY"] }
  },
  {
    id: 56,
    statementA: { text: "I am drawn to what is already strong and want to elevate it further.", themes: ["MAXIMIZER"] },
    statementB: { text: "I find deep joy in watching others grow step by step.", themes: ["DEVELOPER"] }
  },
  {
    id: 57,
    statementA: { text: "I channel resources toward achieving exceptional outcomes.", themes: ["MAXIMIZER"] },
    statementB: { text: "I believe every person belongs and should feel included.", themes: ["INCLUDER"] }
  },

  // ── SELF-ASSURANCE A-side (Q58–Q62) ──────────────────────────────────────
  {
    id: 58,
    statementA: { text: "I trust my own judgment even when others disagree.", themes: ["SELF_ASSURANCE"] },
    statementB: { text: "I build consensus and seek peaceful outcomes in conflict.", themes: ["HARMONY"] }
  },
  {
    id: 59,
    statementA: { text: "I am confident in my ability to handle whatever comes my way.", themes: ["SELF_ASSURANCE"] },
    statementB: { text: "I carefully weigh all options before committing to a direction.", themes: ["DELIBERATIVE"] }
  },
  {
    id: 60,
    statementA: { text: "I act on my convictions without needing external validation.", themes: ["SELF_ASSURANCE"] },
    statementB: { text: "My fundamental values guide every decision I make.", themes: ["BELIEF"] }
  },
  {
    id: 61,
    statementA: { text: "I believe in my own capabilities with unwavering certainty.", themes: ["SELF_ASSURANCE"] },
    statementB: { text: "I question assumptions and demand proof before concluding.", themes: ["ANALYTICAL"] }
  },
  {
    id: 62,
    statementA: { text: "I am internally guided and self-directed in all I do.", themes: ["SELF_ASSURANCE"] },
    statementB: { text: "I am deeply attuned to how others around me are feeling.", themes: ["EMPATHY"] }
  },

  // ── SIGNIFICANCE A-side (Q63–Q67) ────────────────────────────────────────
  {
    id: 63,
    statementA: { text: "I want my work to make a visible, lasting impact on the world.", themes: ["SIGNIFICANCE"] },
    statementB: { text: "I feel accountable for all outcomes, whether credited or not.", themes: ["RESPONSIBILITY"] }
  },
  {
    id: 64,
    statementA: { text: "I need my contributions to be seen and recognized by others.", themes: ["SIGNIFICANCE"] },
    statementB: { text: "I enjoy extended quiet reflection and thinking deeply alone.", themes: ["INTELLECTION"] }
  },
  {
    id: 65,
    statementA: { text: "I am driven by the desire to be seen as exceptional.", themes: ["SIGNIFICANCE"] },
    statementB: { text: "I adapt gracefully to whatever the moment requires.", themes: ["ADAPTABILITY"] }
  },
  {
    id: 66,
    statementA: { text: "I am motivated by making a meaningful difference in the world.", themes: ["SIGNIFICANCE"] },
    statementB: { text: "I prefer to invest deeply in a few long-term relationships.", themes: ["RELATOR"] }
  },
  {
    id: 67,
    statementA: { text: "I want to be known for the unique value I bring to every situation.", themes: ["SIGNIFICANCE"] },
    statementB: { text: "I look for common ground and resolve conflict peacefully.", themes: ["HARMONY"] }
  },

  // ── WOO A-side (Q68–Q72) ─────────────────────────────────────────────────
  {
    id: 68,
    statementA: { text: "I love meeting new people and winning them over instantly.", themes: ["WOO"] },
    statementB: { text: "I prefer a small circle of deep, lasting friendships.", themes: ["RELATOR"] }
  },
  {
    id: 69,
    statementA: { text: "I am energized by working a room full of strangers.", themes: ["WOO"] },
    statementB: { text: "I see deeper meaning connecting all people and events.", themes: ["CONNECTEDNESS"] }
  },
  {
    id: 70,
    statementA: { text: "I can break the ice with almost anyone, anywhere.", themes: ["WOO"] },
    statementB: { text: "I lose myself in thought and deep intellectual exploration.", themes: ["INTELLECTION"] }
  },
  {
    id: 71,
    statementA: { text: "I delight in making new social connections wherever I go.", themes: ["WOO"] },
    statementB: { text: "I reflect carefully before committing to any course of action.", themes: ["DELIBERATIVE"] }
  },
  {
    id: 72,
    statementA: { text: "I thrive when building rapport with people I've just met.", themes: ["WOO"] },
    statementB: { text: "I interrogate facts and data before drawing any conclusion.", themes: ["ANALYTICAL"] }
  },

  // ── ADAPTABILITY A-side (Q73–Q77) ────────────────────────────────────────
  {
    id: 73,
    statementA: { text: "I take each day as it comes and respond to events as needed.", themes: ["ADAPTABILITY"] },
    statementB: { text: "I maintain predictable systems and organized routines daily.", themes: ["DISCIPLINE"] }
  },
  {
    id: 74,
    statementA: { text: "I go with the flow and adjust naturally in the moment.", themes: ["ADAPTABILITY"] },
    statementB: { text: "I pursue my goals relentlessly until they are accomplished.", themes: ["FOCUS"] }
  },
  {
    id: 75,
    statementA: { text: "I am comfortable with ambiguity and open-ended situations.", themes: ["ADAPTABILITY"] },
    statementB: { text: "I examine evidence and reason carefully before concluding.", themes: ["ANALYTICAL"] }
  },
  {
    id: 76,
    statementA: { text: "I don't need plans — I find the path as I walk it.", themes: ["ADAPTABILITY"] },
    statementB: { text: "I need people to notice and value what I contribute.", themes: ["SIGNIFICANCE"] }
  },
  {
    id: 77,
    statementA: { text: "I am most comfortable reacting to events as they unfold.", themes: ["ADAPTABILITY"] },
    statementB: { text: "I see the best route to any destination before I start.", themes: ["STRATEGIC"] }
  },

  // ── CONNECTEDNESS A-side (Q78–Q82) ───────────────────────────────────────
  {
    id: 78,
    statementA: { text: "I believe there are no coincidences — everything is linked.", themes: ["CONNECTEDNESS"] },
    statementB: { text: "I concentrate all energy on the single most important goal.", themes: ["FOCUS"] }
  },
  {
    id: 79,
    statementA: { text: "I help others see how they are part of something larger.", themes: ["CONNECTEDNESS"] },
    statementB: { text: "I am motivated by outperforming those around me.", themes: ["COMPETITION"] }
  },
  {
    id: 80,
    statementA: { text: "I sense a spiritual thread running through all human events.", themes: ["CONNECTEDNESS"] },
    statementB: { text: "I analyze systems and data to find objective truth.", themes: ["ANALYTICAL"] }
  },
  {
    id: 81,
    statementA: { text: "I believe all living things are profoundly interdependent.", themes: ["CONNECTEDNESS"] },
    statementB: { text: "I launch into action the moment I sense it is needed.", themes: ["ACTIVATOR"] }
  },
  {
    id: 82,
    statementA: { text: "I look for the larger meaning connecting people and events.", themes: ["CONNECTEDNESS"] },
    statementB: { text: "I enjoy organizing and optimizing how resources are deployed.", themes: ["ARRANGER"] }
  },

  // ── DEVELOPER A-side (Q83–Q87) ───────────────────────────────────────────
  {
    id: 83,
    statementA: { text: "I celebrate small signs of progress in the people around me.", themes: ["DEVELOPER"] },
    statementB: { text: "I prefer to invest in the highest-performing people.", themes: ["MAXIMIZER"] }
  },
  {
    id: 84,
    statementA: { text: "I am drawn to helping people become better than they are today.", themes: ["DEVELOPER"] },
    statementB: { text: "I instinctively chart the most effective course toward a goal.", themes: ["STRATEGIC"] }
  },
  {
    id: 85,
    statementA: { text: "I find deep satisfaction in watching someone I coached succeed.", themes: ["DEVELOPER"] },
    statementB: { text: "I keep pushing myself to accomplish more every day.", themes: ["ACHIEVER"] }
  },
  {
    id: 86,
    statementA: { text: "I invest time and energy in helping others build their skills.", themes: ["DEVELOPER"] },
    statementB: { text: "I need the world to see and value my contributions.", themes: ["SIGNIFICANCE"] }
  },
  {
    id: 87,
    statementA: { text: "I see untapped potential in nearly everyone I meet.", themes: ["DEVELOPER"] },
    statementB: { text: "I am driven by outperforming those around me.", themes: ["COMPETITION"] }
  },

  // ── HARMONY A-side (Q88–Q92) ─────────────────────────────────────────────
  {
    id: 88,
    statementA: { text: "I work toward agreement and avoid unnecessary friction.", themes: ["HARMONY"] },
    statementB: { text: "I take charge and confront challenges directly.", themes: ["COMMAND"] }
  },
  {
    id: 89,
    statementA: { text: "I build cooperation by finding what people already agree on.", themes: ["HARMONY"] },
    statementB: { text: "I am excited by bold new ideas, even half-baked ones.", themes: ["IDEATION"] }
  },
  {
    id: 90,
    statementA: { text: "I prefer to resolve conflict through mutual understanding.", themes: ["HARMONY"] },
    statementB: { text: "I am driven by the need to win against others.", themes: ["COMPETITION"] }
  },
  {
    id: 91,
    statementA: { text: "I create environments where people can collaborate calmly.", themes: ["HARMONY"] },
    statementB: { text: "I push for action before the conversation ends.", themes: ["ACTIVATOR"] }
  },
  {
    id: 92,
    statementA: { text: "I would rather seek common ground than win an argument.", themes: ["HARMONY"] },
    statementB: { text: "I chart a clear, optimal course through complexity.", themes: ["STRATEGIC"] }
  },

  // ── INCLUDER A-side (Q93–Q97) ────────────────────────────────────────────
  {
    id: 93,
    statementA: { text: "I make an effort to include people who are on the margins.", themes: ["INCLUDER"] },
    statementB: { text: "I focus resources on the highest-potential individuals.", themes: ["MAXIMIZER"] }
  },
  {
    id: 94,
    statementA: { text: "I am aware of who is left out and actively draw them in.", themes: ["INCLUDER"] },
    statementB: { text: "I invest deeply in a small circle of trusted relationships.", themes: ["RELATOR"] }
  },
  {
    id: 95,
    statementA: { text: "I believe everyone deserves to feel they belong in the group.", themes: ["INCLUDER"] },
    statementB: { text: "I move quickly to start rather than wait for consensus.", themes: ["ACTIVATOR"] }
  },
  {
    id: 96,
    statementA: { text: "I work hard to make groups welcoming and accessible to all.", themes: ["INCLUDER"] },
    statementB: { text: "My personal convictions are the foundation of my decisions.", themes: ["BELIEF"] }
  },
  {
    id: 97,
    statementA: { text: "I look out for those who are overlooked or excluded.", themes: ["INCLUDER"] },
    statementB: { text: "I have unshakeable confidence in my own judgment.", themes: ["SELF_ASSURANCE"] }
  },

  // ── INDIVIDUALIZATION A-side (Q98–Q102) ──────────────────────────────────
  {
    id: 98,
    statementA: { text: "I see each person as one of a kind and treat them accordingly.", themes: ["INDIVIDUALIZATION"] },
    statementB: { text: "I believe in consistent rules that apply equally to everyone.", themes: ["CONSISTENCY"] }
  },
  {
    id: 99,
    statementA: { text: "I tailor my approach to each individual's specific traits.", themes: ["INDIVIDUALIZATION"] },
    statementB: { text: "I rely on routines and structured systems to stay effective.", themes: ["DISCIPLINE"] }
  },
  {
    id: 100,
    statementA: { text: "I notice the particular strengths that make each person unique.", themes: ["INDIVIDUALIZATION"] },
    statementB: { text: "I map out the most effective path through complexity.", themes: ["STRATEGIC"] }
  },
  {
    id: 101,
    statementA: { text: "I customize how I communicate based on who I'm talking to.", themes: ["INDIVIDUALIZATION"] },
    statementB: { text: "I organize people and resources to get the best collective outcome.", themes: ["ARRANGER"] }
  },
  {
    id: 102,
    statementA: { text: "I am fascinated by what makes people different from one another.", themes: ["INDIVIDUALIZATION"] },
    statementB: { text: "I help others understand ideas through vivid stories and examples.", themes: ["COMMUNICATION"] }
  },

  // ── POSITIVITY A-side (Q103–Q107) ────────────────────────────────────────
  {
    id: 103,
    statementA: { text: "I bring enthusiasm and optimism to every group I'm part of.", themes: ["POSITIVITY"] },
    statementB: { text: "I take great care and caution in every major decision I make.", themes: ["DELIBERATIVE"] }
  },
  {
    id: 104,
    statementA: { text: "I find reasons to celebrate even small wins and progress.", themes: ["POSITIVITY"] },
    statementB: { text: "I zero in on my goal and block out everything else.", themes: ["FOCUS"] }
  },
  {
    id: 105,
    statementA: { text: "I am naturally upbeat and I lift the energy of those around me.", themes: ["POSITIVITY"] },
    statementB: { text: "I research the background and precedents before acting.", themes: ["CONTEXT"] }
  },
  {
    id: 106,
    statementA: { text: "I look for what is going right and build on it.", themes: ["POSITIVITY"] },
    statementB: { text: "I examine evidence systematically before drawing any conclusion.", themes: ["ANALYTICAL"] }
  },
  {
    id: 107,
    statementA: { text: "I spread good cheer and a contagious sense of possibility.", themes: ["POSITIVITY"] },
    statementB: { text: "I keep a structured, organized system in my daily life.", themes: ["DISCIPLINE"] }
  },

  // ── RELATOR A-side (Q108–Q112) ───────────────────────────────────────────
  {
    id: 108,
    statementA: { text: "I am drawn to deep, authentic, long-term relationships.", themes: ["RELATOR"] },
    statementB: { text: "I love quickly winning over people I've just met.", themes: ["WOO"] }
  },
  {
    id: 109,
    statementA: { text: "I build close friendships through honesty and shared vulnerability.", themes: ["RELATOR"] },
    statementB: { text: "I take charge and speak directly in leadership situations.", themes: ["COMMAND"] }
  },
  {
    id: 110,
    statementA: { text: "My best work happens in close collaboration with trusted partners.", themes: ["RELATOR"] },
    statementB: { text: "I am driven by having my work and impact recognized.", themes: ["SIGNIFICANCE"] }
  },
  {
    id: 111,
    statementA: { text: "I grow my closest friendships over many years of shared experience.", themes: ["RELATOR"] },
    statementB: { text: "I thrive on the energy of head-to-head competition.", themes: ["COMPETITION"] }
  },
  {
    id: 112,
    statementA: { text: "I know my inner circle deeply and they know me.", themes: ["RELATOR"] },
    statementB: { text: "I take immediate action rather than waiting for a plan.", themes: ["ACTIVATOR"] }
  },

  // ── CONTEXT A-side (Q113–Q117) ───────────────────────────────────────────
  {
    id: 113,
    statementA: { text: "Understanding how we got here helps me navigate what comes next.", themes: ["CONTEXT"] },
    statementB: { text: "I am energized by imagining what the world could become.", themes: ["FUTURISTIC"] }
  },
  {
    id: 114,
    statementA: { text: "I research the history behind decisions before I make them.", themes: ["CONTEXT"] },
    statementB: { text: "I take action the moment I sense it is time to move.", themes: ["ACTIVATOR"] }
  },
  {
    id: 115,
    statementA: { text: "I anchor my thinking in what has been proven by experience.", themes: ["CONTEXT"] },
    statementB: { text: "I generate fresh ideas by connecting seemingly unrelated concepts.", themes: ["IDEATION"] }
  },
  {
    id: 116,
    statementA: { text: "I look to the past to understand what will work in the future.", themes: ["CONTEXT"] },
    statementB: { text: "I keep learning new things as a natural way of life.", themes: ["LEARNER"] }
  },
  {
    id: 117,
    statementA: { text: "Historical lessons inform every strategy I build.", themes: ["CONTEXT"] },
    statementB: { text: "I create an uplifting, energetic atmosphere wherever I go.", themes: ["POSITIVITY"] }
  },

  // ── FUTURISTIC A-side (Q118–Q122) ────────────────────────────────────────
  {
    id: 118,
    statementA: { text: "I am energized by vivid visions of what the future could hold.", themes: ["FUTURISTIC"] },
    statementB: { text: "I take responsibility for outcomes no matter what happens.", themes: ["RESPONSIBILITY"] }
  },
  {
    id: 119,
    statementA: { text: "I inspire others by describing a compelling future state.", themes: ["FUTURISTIC"] },
    statementB: { text: "I strengthen what is already excellent rather than fix problems.", themes: ["MAXIMIZER"] }
  },
  {
    id: 120,
    statementA: { text: "I think about tomorrow's possibilities more than today's problems.", themes: ["FUTURISTIC"] },
    statementB: { text: "I thrive when managing complex, overlapping responsibilities.", themes: ["ARRANGER"] }
  },
  {
    id: 121,
    statementA: { text: "I am naturally drawn to predicting and shaping the future.", themes: ["FUTURISTIC"] },
    statementB: { text: "I invest in deep, honest relationships over many years.", themes: ["RELATOR"] }
  },
  {
    id: 122,
    statementA: { text: "I get excited imagining how things could be fundamentally different.", themes: ["FUTURISTIC"] },
    statementB: { text: "I believe in acting on principle rather than on immediate advantage.", themes: ["BELIEF"] }
  },

  // ── INPUT A-side (Q123–Q127) ─────────────────────────────────────────────
  {
    id: 123,
    statementA: { text: "I collect information and resources in case they're useful later.", themes: ["INPUT"] },
    statementB: { text: "I channel all energy toward one specific, clear goal.", themes: ["FOCUS"] }
  },
  {
    id: 124,
    statementA: { text: "I love acquiring knowledge across many different domains.", themes: ["INPUT"] },
    statementB: { text: "I prefer to begin before the plan is fully in place.", themes: ["ACTIVATOR"] }
  },
  {
    id: 125,
    statementA: { text: "I keep extensive archives of facts, articles, and references.", themes: ["INPUT"] },
    statementB: { text: "I direct and lead when situations require decisive action.", themes: ["COMMAND"] }
  },
  {
    id: 126,
    statementA: { text: "I gather data from many sources before making a decision.", themes: ["INPUT"] },
    statementB: { text: "I reorganize resources and people to maximize their output.", themes: ["ARRANGER"] }
  },
  {
    id: 127,
    statementA: { text: "I find satisfaction in knowing a little about a lot of things.", themes: ["INPUT"] },
    statementB: { text: "I need the world to acknowledge and value my work.", themes: ["SIGNIFICANCE"] }
  },

  // ── INTELLECTION A-side (Q128–Q132) ──────────────────────────────────────
  {
    id: 128,
    statementA: { text: "I love sitting alone with complex ideas and thinking them through.", themes: ["INTELLECTION"] },
    statementB: { text: "I prefer to talk through ideas with others as I develop them.", themes: ["COMMUNICATION"] }
  },
  {
    id: 129,
    statementA: { text: "I am energized by deep solitary reflection and introspection.", themes: ["INTELLECTION"] },
    statementB: { text: "I prefer starting to thinking — action is my clearest mode.", themes: ["ACTIVATOR"] }
  },
  {
    id: 130,
    statementA: { text: "I find great satisfaction in exploring ideas in my own mind.", themes: ["INTELLECTION"] },
    statementB: { text: "I energize a room and charm people I have just met.", themes: ["WOO"] }
  },
  {
    id: 131,
    statementA: { text: "I am happiest when I have long stretches of uninterrupted thinking time.", themes: ["INTELLECTION"] },
    statementB: { text: "I naturally lift the mood and energy of those around me.", themes: ["POSITIVITY"] }
  },
  {
    id: 132,
    statementA: { text: "I prefer to think deeply and carefully before I speak or act.", themes: ["INTELLECTION"] },
    statementB: { text: "I take charge naturally when a group needs clear direction.", themes: ["COMMAND"] }
  },

  // ── LEARNER A-side (Q133–Q137) ───────────────────────────────────────────
  {
    id: 133,
    statementA: { text: "I love the process of learning — the topic matters less than the growth.", themes: ["LEARNER"] },
    statementB: { text: "I pursue one goal relentlessly until it is fully achieved.", themes: ["FOCUS"] }
  },
  {
    id: 134,
    statementA: { text: "I am energized by mastering new skills and bodies of knowledge.", themes: ["LEARNER"] },
    statementB: { text: "I have rock-solid confidence in my own instincts and capabilities.", themes: ["SELF_ASSURANCE"] }
  },
  {
    id: 135,
    statementA: { text: "I engage fully in both formal and informal learning opportunities.", themes: ["LEARNER"] },
    statementB: { text: "I take a careful, deliberate approach to every major decision.", themes: ["DELIBERATIVE"] }
  },
  {
    id: 136,
    statementA: { text: "Learning something new every day is one of my greatest satisfactions.", themes: ["LEARNER"] },
    statementB: { text: "I am most energized by beating out the competition.", themes: ["COMPETITION"] }
  },
  {
    id: 137,
    statementA: { text: "I am drawn to unfamiliar subjects and new intellectual challenges.", themes: ["LEARNER"] },
    statementB: { text: "I research how things came to be before I engage with them.", themes: ["CONTEXT"] }
  },

  // ── STRATEGIC A-side (Q138–Q142) ─────────────────────────────────────────
  {
    id: 138,
    statementA: { text: "I quickly identify the best of several possible paths forward.", themes: ["STRATEGIC"] },
    statementB: { text: "I adapt fluidly to whatever situation I find myself in.", themes: ["ADAPTABILITY"] }
  },
  {
    id: 139,
    statementA: { text: "I see patterns and possibilities that others tend to overlook.", themes: ["STRATEGIC"] },
    statementB: { text: "I feel the emotional undercurrent of any group I'm part of.", themes: ["EMPATHY"] }
  },
  {
    id: 140,
    statementA: { text: "I sort through complexity to find the clearest path to the goal.", themes: ["STRATEGIC"] },
    statementB: { text: "I build trust through consistent, rule-based treatment of others.", themes: ["CONSISTENCY"] }
  },
  {
    id: 141,
    statementA: { text: "I anticipate obstacles and chart detours before hitting them.", themes: ["STRATEGIC"] },
    statementB: { text: "I take full ownership of the promises I make.", themes: ["RESPONSIBILITY"] }
  },
  {
    id: 142,
    statementA: { text: "I instinctively evaluate options and commit to the strongest one.", themes: ["STRATEGIC"] },
    statementB: { text: "I find deep meaning in serving a cause larger than myself.", themes: ["BELIEF"] }
  },

  // ── FOCUS A-side (Q143–Q148) ─────────────────────────────────────────────
  {
    id: 143,
    statementA: { text: "I zero in on one priority and block out everything else.", themes: ["FOCUS"] },
    statementB: { text: "I collect and archive information on a wide range of topics.", themes: ["INPUT"] }
  },
  {
    id: 144,
    statementA: { text: "I stick to my course even when distractions arise.", themes: ["FOCUS"] },
    statementB: { text: "I build cooperation by finding where people already agree.", themes: ["HARMONY"] }
  },
  {
    id: 145,
    statementA: { text: "I concentrate deeply on the single goal in front of me.", themes: ["FOCUS"] },
    statementB: { text: "I see meaning in the larger web connecting all people.", themes: ["CONNECTEDNESS"] }
  },
  {
    id: 146,
    statementA: { text: "A clear goal drives my daily decisions and actions.", themes: ["FOCUS"] },
    statementB: { text: "I am energized by acquiring new knowledge and skills.", themes: ["LEARNER"] }
  },
  {
    id: 147,
    statementA: { text: "I narrow my attention to what will move me forward most.", themes: ["FOCUS"] },
    statementB: { text: "I pick up on the emotional currents running through any room.", themes: ["EMPATHY"] }
  },
  {
    id: 148,
    statementA: { text: "I am most effective when I have a single, sharp focus.", themes: ["FOCUS"] },
    statementB: { text: "I make sure every person in the group feels they belong.", themes: ["INCLUDER"] }
  },

  // ── DELIBERATIVE A-side (Q149–Q153, Q177) ────────────────────────────────
  {
    id: 149,
    statementA: { text: "I take great care to think through decisions thoroughly.", themes: ["DELIBERATIVE"] },
    statementB: { text: "I prefer to begin rather than continue planning.", themes: ["ACTIVATOR"] }
  },
  {
    id: 150,
    statementA: { text: "I identify risks that others tend to overlook before they arise.", themes: ["DELIBERATIVE"] },
    statementB: { text: "I can win over almost anyone in a social setting.", themes: ["WOO"] }
  },
  {
    id: 151,
    statementA: { text: "I proceed with caution in unfamiliar situations.", themes: ["DELIBERATIVE"] },
    statementB: { text: "I get excited by novel and untested ideas.", themes: ["IDEATION"] }
  },
  {
    id: 152,
    statementA: { text: "I think carefully before committing to any course of action.", themes: ["DELIBERATIVE"] },
    statementB: { text: "I am driven by winning against others.", themes: ["COMPETITION"] }
  },
  {
    id: 153,
    statementA: { text: "I prefer to make decisions slowly and with great care.", themes: ["DELIBERATIVE"] },
    statementB: { text: "I naturally bring enthusiasm and positive energy to groups.", themes: ["POSITIVITY"] }
  },

  // ── COMMUNICATION A-side (Q154–Q158) ─────────────────────────────────────
  {
    id: 154,
    statementA: { text: "I love translating complex ideas into stories others can follow.", themes: ["COMMUNICATION"] },
    statementB: { text: "I prefer to think through ideas deeply and alone.", themes: ["INTELLECTION"] }
  },
  {
    id: 155,
    statementA: { text: "I am at my best when presenting, writing, or explaining.", themes: ["COMMUNICATION"] },
    statementB: { text: "I rely on evidence and logical analysis to form conclusions.", themes: ["ANALYTICAL"] }
  },
  {
    id: 156,
    statementA: { text: "I help others understand by bringing ideas to vivid life.", themes: ["COMMUNICATION"] },
    statementB: { text: "I work to resolve tension through agreement and goodwill.", themes: ["HARMONY"] }
  },
  {
    id: 157,
    statementA: { text: "I communicate differently with each person based on what works for them.", themes: ["COMMUNICATION"] },
    statementB: { text: "I recognize and honor what makes each individual unique.", themes: ["INDIVIDUALIZATION"] }
  },
  {
    id: 158,
    statementA: { text: "I energize groups with well-crafted words and compelling narratives.", themes: ["COMMUNICATION"] },
    statementB: { text: "I gather and curate information across many domains.", themes: ["INPUT"] }
  },

  // ── EMPATHY A-side (Q159–Q164) ───────────────────────────────────────────
  {
    id: 159,
    statementA: { text: "I feel what others are feeling, often without being told.", themes: ["EMPATHY"] },
    statementB: { text: "I reason from data and logical analysis before concluding.", themes: ["ANALYTICAL"] }
  },
  {
    id: 160,
    statementA: { text: "I am tuned in to the emotional lives of those around me.", themes: ["EMPATHY"] },
    statementB: { text: "I dream about what could become possible in the future.", themes: ["FUTURISTIC"] }
  },
  {
    id: 161,
    statementA: { text: "I understand situations through the lens of others' emotions.", themes: ["EMPATHY"] },
    statementB: { text: "I believe in applying the same fair rules to everyone.", themes: ["CONSISTENCY"] }
  },
  {
    id: 162,
    statementA: { text: "I absorb and reflect the feelings of people near me.", themes: ["EMPATHY"] },
    statementB: { text: "I am driven to accomplish as much as possible each day.", themes: ["ACHIEVER"] }
  },
  {
    id: 163,
    statementA: { text: "I sense unspoken emotional needs and respond to them.", themes: ["EMPATHY"] },
    statementB: { text: "I plan the optimal route before beginning any journey.", themes: ["STRATEGIC"] }
  },
  {
    id: 164,
    statementA: { text: "I navigate relationships by reading how others truly feel.", themes: ["EMPATHY"] },
    statementB: { text: "I take charge and direct groups toward a clear outcome.", themes: ["COMMAND"] }
  },

  // ── ANALYTICAL A-side (Q165–Q170) ────────────────────────────────────────
  {
    id: 165,
    statementA: { text: "I look for evidence and proof before accepting any idea.", themes: ["ANALYTICAL"] },
    statementB: { text: "I have complete trust in my own instincts and judgment.", themes: ["SELF_ASSURANCE"] }
  },
  {
    id: 166,
    statementA: { text: "I break complex problems into logical, testable components.", themes: ["ANALYTICAL"] },
    statementB: { text: "I am excited by unexpected connections between different ideas.", themes: ["IDEATION"] }
  },
  {
    id: 167,
    statementA: { text: "I rely on data and objective reasoning in all my decisions.", themes: ["ANALYTICAL"] },
    statementB: { text: "My personal convictions are the bedrock of my life.", themes: ["BELIEF"] }
  },
  {
    id: 168,
    statementA: { text: "I test every claim against facts before I accept it.", themes: ["ANALYTICAL"] },
    statementB: { text: "I attune deeply to the feelings of those around me.", themes: ["EMPATHY"] }
  },
  {
    id: 169,
    statementA: { text: "I find patterns in data that reveal hidden truths.", themes: ["ANALYTICAL"] },
    statementB: { text: "I sense the spiritual thread connecting all people and events.", themes: ["CONNECTEDNESS"] }
  },
  {
    id: 170,
    statementA: { text: "I approach all problems with rigor and objective analysis.", themes: ["ANALYTICAL"] },
    statementB: { text: "I bring infectious enthusiasm and optimism to every situation.", themes: ["POSITIVITY"] }
  },

  // ── IDEATION A-side (Q171–Q176) ──────────────────────────────────────────
  {
    id: 171,
    statementA: { text: "I love the thrill of discovering a surprising new idea.", themes: ["IDEATION"] },
    statementB: { text: "I proceed with deliberate care before committing to a direction.", themes: ["DELIBERATIVE"] }
  },
  {
    id: 172,
    statementA: { text: "I generate more ideas than I can possibly pursue.", themes: ["IDEATION"] },
    statementB: { text: "I rely on predictable structure and routines to function well.", themes: ["DISCIPLINE"] }
  },
  {
    id: 173,
    statementA: { text: "I am fascinated by connecting things that seem completely unrelated.", themes: ["IDEATION"] },
    statementB: { text: "I work toward mutual understanding and peaceful outcomes.", themes: ["HARMONY"] }
  },
  {
    id: 174,
    statementA: { text: "I am most alive when playing with creative possibilities.", themes: ["IDEATION"] },
    statementB: { text: "I maintain a single-minded drive toward my goal.", themes: ["FOCUS"] }
  },
  {
    id: 175,
    statementA: { text: "I see new angles on old problems others have given up on.", themes: ["IDEATION"] },
    statementB: { text: "I believe the same fair standards should apply to all people.", themes: ["CONSISTENCY"] }
  },
  {
    id: 176,
    statementA: { text: "I produce creative solutions by combining ideas in novel ways.", themes: ["IDEATION"] },
    statementB: { text: "I am energized when reviving or rescuing what is broken.", themes: ["RESTORATIVE"] }
  },

  // ── DELIBERATIVE 6th (Q177) ───────────────────────────────────────────────
  {
    id: 177,
    statementA: { text: "I guard against unseen risks by slowing down my decision-making.", themes: ["DELIBERATIVE"] },
    statementB: { text: "I tune in to what others are feeling before I act.", themes: ["EMPATHY"] }
  }
];
