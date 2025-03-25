
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const levelIQuizData: Question[] = [
  {
    id: 1,
    question: "What is the primary purpose of a self-contained breathing apparatus (SCBA)?",
    options: [
      "To provide breathable air in environments that are immediately dangerous to life or health (IDLH)",
      "To filter contaminants from the surrounding air",
      "To increase firefighter visibility in smoke-filled environments",
      "To reduce heat stress during firefighting operations"
    ],
    correctAnswer: 0,
    explanation: "The primary purpose of an SCBA is to provide the firefighter with breathable air in environments that are immediately dangerous to life or health (IDLH), such as smoke-filled buildings or hazmat incidents."
  },
  {
    id: 2,
    question: "What is the recommended method for carrying a victim down a ladder?",
    options: [
      "Fireman's carry across the shoulders",
      "Piggyback carry",
      "Cradle-in-arms carry",
      "Over-the-arm carry"
    ],
    correctAnswer: 2,
    explanation: "The cradle-in-arms carry is the recommended method for carrying a victim down a ladder as it provides better security and balance for both the rescuer and victim."
  },
  {
    id: 3,
    question: "Which knot is most appropriate for hoisting tools to an elevated position?",
    options: [
      "Bowline",
      "Clove hitch",
      "Figure eight on a bight",
      "Half hitch"
    ],
    correctAnswer: 2,
    explanation: "A figure eight on a bight creates a secure loop that doesn't slip under load, making it ideal for hoisting tools safely to elevated positions."
  },
  {
    id: 4,
    question: "What is the minimum safe distance to operate a ground ladder from overhead electrical wires?",
    options: [
      "5 feet",
      "10 feet",
      "15 feet",
      "20 feet"
    ],
    correctAnswer: 1,
    explanation: "Per NFPA standards, ground ladders should be operated at least 10 feet away from overhead electrical wires to prevent accidental contact and electrical hazards."
  },
  {
    id: 5,
    question: "What is the proper ratio of water to Class A foam concentrate for structural firefighting?",
    options: [
      "0.1% to 0.3%",
      "0.3% to 0.6%",
      "1% to 3%",
      "3% to 6%"
    ],
    correctAnswer: 1,
    explanation: "For structural firefighting, the proper ratio of Class A foam concentrate to water is typically 0.3% to 0.6%, which enhances water's effectiveness by reducing surface tension."
  }
];

export const levelIIQuizData: Question[] = [
  {
    id: 1,
    question: "Which fire service organizational model uses a combination of career and volunteer firefighters?",
    options: [
      "Career department",
      "Volunteer department",
      "Combination department",
      "Industrial brigade"
    ],
    correctAnswer: 2,
    explanation: "A combination department utilizes both career (paid) and volunteer firefighters to provide services, often with career staff during weekdays and volunteers during nights and weekends."
  },
  {
    id: 2,
    question: "What is the primary purpose of performing fire origin and cause determination?",
    options: [
      "To determine insurance liability",
      "To identify if arson was involved",
      "To prevent future similar fires",
      "To evaluate firefighter performance"
    ],
    correctAnswer: 2,
    explanation: "The primary purpose of fire origin and cause determination is to identify what caused the fire in order to prevent similar incidents in the future through education, code enforcement, or other preventive measures."
  },
  {
    id: 3,
    question: "Which type of fire protection system operates by detecting heat and automatically discharging water?",
    options: [
      "Fire alarm system",
      "Automatic sprinkler system",
      "Standpipe system",
      "Smoke control system"
    ],
    correctAnswer: 1,
    explanation: "An automatic sprinkler system detects heat from a fire and automatically discharges water to control or extinguish the fire in its early stages."
  },
  {
    id: 4,
    question: "What is the purpose of a pre-incident survey?",
    options: [
      "To identify potential hazards before an emergency occurs",
      "To document fire code violations",
      "To establish evacuation procedures",
      "To test fire protection systems"
    ],
    correctAnswer: 0,
    explanation: "A pre-incident survey is conducted to identify potential hazards, building features, access points, water supply, and other critical information before an emergency occurs, allowing for better planning and response."
  },
  {
    id: 5,
    question: "Which communication model includes a sender, message, receiver, and feedback?",
    options: [
      "One-way communication model",
      "Complete communication model",
      "Radio communication model",
      "Emergency communication model"
    ],
    correctAnswer: 1,
    explanation: "The complete communication model includes a sender, the message being transmitted, a receiver, and feedback to confirm the message was received and understood correctly."
  }
];
