
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
    question: "What creates the most dangerous condition during a vehicle fire?",
    options: [
      "Smoking materials",
      "Electrical short circuits",
      "Leaking lubricants",
      "Pressurized components heated to high temperatures"
    ],
    correctAnswer: 3,
    explanation: "Pressurized components can explode when heated."
  },
  {
    id: 2,
    question: "When handling emergency calls, complete and accurate records should be maintained for:",
    options: [
      "All responses",
      "Only emergency responses",
      "Only criminally related responses",
      "High call volume areas"
    ],
    correctAnswer: 0,
    explanation: "Keeping records of all calls helps improve response and accountability."
  },
  {
    id: 3,
    question: "What information should a firefighter provide during a mayday call?",
    options: [
      "Time of day",
      "GPS coordinates",
      "Help needed",
      "Accountability tag number"
    ],
    correctAnswer: 2,
    explanation: "Stating the type of help needed ensures a proper response."
  },
  {
    id: 4,
    question: "What type of hose roll is the easiest to work with?",
    options: [
      "Double donut",
      "Straight/storage",
      "Single donut",
      "Dutchman"
    ],
    correctAnswer: 1,
    explanation: "A straight roll is simple to store and unroll quickly in an emergency."
  },
  {
    id: 5,
    question: "What is the definition of a dead load?",
    options: [
      "Impact",
      "Fire",
      "Design",
      "Weight of permanent building materials"
    ],
    correctAnswer: 3,
    explanation: "Dead load includes permanent parts of a building's structure."
  },
  {
    id: 6,
    question: "What should you do if you become disoriented while searching a burning building?",
    options: [
      "Lay against a wall",
      "Retrace steps to your original location",
      "Activate your PASS device",
      "Initiate a mayday"
    ],
    correctAnswer: 3,
    explanation: "A mayday signals that a firefighter is in trouble and requires immediate assistance."
  },
  {
    id: 7,
    question: "What is an intentionally set fire called?",
    options: [
      "Intrinsic",
      "Incendiary",
      "External",
      "Legal"
    ],
    correctAnswer: 1,
    explanation: "Incendiary refers to intentional arson."
  },
  {
    id: 8,
    question: "What should a firefighter remember when answering a phone call at the fire department?",
    options: [
      "They are representing the fire department",
      "Keep it brief to avoid tying up the line",
      "Hang up quickly after gathering information",
      "Leave the person on hold as long as needed"
    ],
    correctAnswer: 0,
    explanation: "Professional conduct reflects positively on the fire department."
  },
  {
    id: 9,
    question: "What are the three main methods of interior fire attack?",
    options: [
      "Straight, fog, and solid",
      "Offensive, defensive, and combination",
      "Direct, indirect, and combination",
      "Extinguishment, exposure, and combination"
    ],
    correctAnswer: 2,
    explanation: "Direct attack applies water to the base of the fire, indirect cools the atmosphere, and combination uses both."
  },
  {
    id: 10,
    question: "What type of report do first-arriving companies broadcast to incoming units?",
    options: [
      "Initial",
      "Urgent",
      "Status",
      "Select"
    ],
    correctAnswer: 0,
    explanation: "An initial report provides a quick summary of the scene."
  },
  {
    id: 11,
    question: "What is covered under the NFPA 1500 standard?",
    options: [
      "Salvage operations",
      "Safety programs",
      "Electrical safety requirements",
      "Budgeting requirements"
    ],
    correctAnswer: 1,
    explanation: "NFPA 1500 focuses on health and safety for firefighters."
  },
  {
    id: 12,
    question: "How often should ropes be inspected?",
    options: [
      "After every use",
      "Monthly",
      "Weekly",
      "Before use"
    ],
    correctAnswer: 0,
    explanation: "Inspecting ropes prevents failure in emergencies."
  },
  {
    id: 13,
    question: "What symbol and color identify Class C extinguishers?",
    options: [
      "Yellow star",
      "Green triangle",
      "Red square",
      "Blue circle"
    ],
    correctAnswer: 3,
    explanation: "Class C extinguishers are for electrical fires and use a blue circle."
  },
  {
    id: 14,
    question: "What is the side of a building where the wind is hitting called?",
    options: [
      "Windward, leeward",
      "Leeward, windward",
      "Downwind, upwind",
      "Upwind, windward"
    ],
    correctAnswer: 0,
    explanation: "The windward side faces the wind, while the leeward side is sheltered."
  },
  {
    id: 15,
    question: "What is the process of opening concrete block walls called?",
    options: [
      "Breaching",
      "Barreling",
      "Mauling",
      "Tunneling"
    ],
    correctAnswer: 0,
    explanation: "Breaching is the act of breaking through barriers."
  },
  {
    id: 16,
    question: "What is a major safety concern when raising a ladder?",
    options: [
      "Type of ladder",
      "Teamwork",
      "Contact with electrical wires and overhead obstructions",
      "Ladder durability"
    ],
    correctAnswer: 2,
    explanation: "Contact with overhead wires can cause electrocution."
  },
  {
    id: 17,
    question: "How should the coupling on a high-pressure SCBA hose be secured?",
    options: [
      "Reverse-threaded",
      "Hand-tight",
      "Secured with a wrench",
      "Treated with Teflon tape"
    ],
    correctAnswer: 1,
    explanation: "Hand-tight couplings prevent damage or leaks."
  },
  {
    id: 18,
    question: "What information must be stamped or labeled on a compressed air cylinder?",
    options: [
      "Fire department's initials",
      "Last hydrostatic test date",
      "Date on which the cylinder must be hydrostatically tested",
      "Last fill date"
    ],
    correctAnswer: 1,
    explanation: "The hydrostatic test date ensures the cylinder is safe for use under pressure."
  },
  {
    id: 19,
    question: "What is the safest way to disconnect power to a building?",
    options: [
      "Remove the electrical meter",
      "Cut the entrance wires",
      "Shut off the main breaker at the service panel",
      "Pull the main breaker at the power pole"
    ],
    correctAnswer: 2,
    explanation: "Shutting off at the main breaker prevents electrical shock and fire hazards."
  },
  {
    id: 20,
    question: "What gas does a closed-circuit SCBA use?",
    options: [
      "Compressed air",
      "Carbon dioxide",
      "Oxygen",
      "Carbon monoxide"
    ],
    correctAnswer: 2,
    explanation: "Closed-circuit SCBA units recycle oxygen for breathing."
  },
  {
    id: 21,
    question: "What is true about structural firefighting helmets?",
    options: [
      "Face shields should be tinted to reduce glare",
      "Face shields alone provide enough protection from flying debris",
      "They must have earflaps or neck covers",
      "Chin straps are optional"
    ],
    correctAnswer: 2,
    explanation: "Earflaps and neck covers protect firefighters from heat and falling debris."
  },
  {
    id: 22,
    question: "What should a firefighter do before transmitting on the fire department radio?",
    options: [
      "Press the key two or three times",
      "Key the microphone and clear their throat",
      "Turn up the volume",
      "Ensure the channel is clear"
    ],
    correctAnswer: 3,
    explanation: "Ensuring a clear channel prevents communication interference."
  },
  {
    id: 23,
    question: "What is hypoxia?",
    options: [
      "Low blood sugar",
      "Low blood pressure",
      "A deficiency of oxygen",
      "A lowering of the body's core temperature"
    ],
    correctAnswer: 2,
    explanation: "Hypoxia is a condition caused by a lack of oxygen in the body."
  },
  {
    id: 24,
    question: "How can a trapped firefighter conserve air while awaiting rescue?",
    options: [
      "Partially close the valve",
      "Open the bypass valve",
      "Close the cylinder valve",
      "Control their breathing"
    ],
    correctAnswer: 3,
    explanation: "Controlled breathing conserves oxygen."
  },
  {
    id: 25,
    question: "Why does a fog stream absorb heat better than a solid stream?",
    options: [
      "Greater surface area",
      "Free-moving molecules",
      "Lower viscosity",
      "Coefficient of heat absorption"
    ],
    correctAnswer: 0,
    explanation: "The increased surface area from the fog pattern allows more heat absorption."
  },
  {
    id: 26,
    question: "What is the easiest hose load for preconnected attack lines?",
    options: [
      "Flat load",
      "Stacked load",
      "Straight load",
      "Bundle load"
    ],
    correctAnswer: 0,
    explanation: "A flat load allows for quick and easy deployment of hose lines."
  },
  {
    id: 27,
    question: "What is the typical operating pressure for most smooth-bore nozzles?",
    options: [
      "350 kPa/50 psi",
      "525 kPa/75 psi",
      "630 kPa/90 psi",
      "700 kPa/100 psi"
    ],
    correctAnswer: 0,
    explanation: "Smooth-bore nozzles generally operate at a lower pressure for better control."
  },
  {
    id: 28,
    question: "What is the process of finding hidden fires and making the building safe?",
    options: [
      "Overhaul",
      "Secondary search",
      "Size-up",
      "Salvage"
    ],
    correctAnswer: 0,
    explanation: "Overhaul ensures that all hidden fires are extinguished."
  },
  {
    id: 29,
    question: "When should the firefighter charge the supply line when attaching a hose to a hydrant?",
    options: [
      "As soon as possible",
      "Not until the driver/operator's signal is received",
      "After opening the fire hydrant all the way",
      "After 10 minutes from the time of drop-off"
    ],
    correctAnswer: 1,
    explanation: "Charging before the operator's signal can cause unsafe pressure surges."
  },
  {
    id: 30,
    question: "What is the main difference between Type I and Type II construction?",
    options: [
      "Type I occupants are the main hazard.",
      "Type I is more prone to collapse.",
      "Type II roofs are more stable.",
      "Type II lacks insulation and protection."
    ],
    correctAnswer: 3,
    explanation: "Type II construction uses less fire-resistant materials."
  },
  {
    id: 31,
    question: "What are the two primary types of self-contained breathing apparatus (SCBA)?",
    options: [
      "Demand and pressure-demand",
      "Open-circuit and closed-circuit",
      "National Institute for Occupational Safety and Health approved",
      "Compressed air and liquid oxygen"
    ],
    correctAnswer: 1,
    explanation: "Open-circuit SCBAs release exhaled air, while closed-circuit SCBAs recycle exhaled air."
  },
  {
    id: 32,
    question: "What is the name of the facility where emergency calls are routed?",
    options: [
      "Public Safety Answering Point (PSAP)/Public Safety Communications Centre",
      "Unified Command (UC)",
      "Emergency Collection Point (ECP)",
      "Emergency Operations Centre (EOC)"
    ],
    correctAnswer: 0,
    explanation: "A PSAP handles emergency calls and dispatches responders."
  },
  {
    id: 33,
    question: "What should a firefighter do if lost, trapped, or disoriented during a fire?",
    options: [
      "Try to call their partner and activate their PASS device.",
      "Immediately transmit a mayday.",
      "Inform command that help might be needed soon.",
      "Follow the female coupling to the exterior."
    ],
    correctAnswer: 1,
    explanation: "Transmitting a mayday ensures that immediate help is sent."
  },
  {
    id: 34,
    question: "What is the measure of how long a structure will maintain its load-bearing capacity during a fire?",
    options: [
      "Fire code approval",
      "Noncombustible construction",
      "Fire resistance rating",
      "NFPA rating"
    ],
    correctAnswer: 2,
    explanation: "Fire resistance rating measures how long structural integrity is maintained under fire conditions."
  },
  {
    id: 35,
    question: "What is a recommended safety practice when cutting a roof?",
    options: [
      "Use antennas for support",
      "Cut a few small holes",
      "Ensure structural supports are not cut",
      "Work from the leeward side"
    ],
    correctAnswer: 2,
    explanation: "Cutting supports can lead to structural collapse."
  },
  {
    id: 36,
    question: "How often should fire department ladders be inspected?",
    options: [
      "Tested",
      "Lubricated",
      "Inspected",
      "Varnished"
    ],
    correctAnswer: 2,
    explanation: "Regular inspections ensure readiness."
  },
  {
    id: 37,
    question: "What term signals the immediate need to clear the radio for critical information?",
    options: [
      "Emergency Traffic",
      "10-99",
      "Signal 2",
      "Critical Alert"
    ],
    correctAnswer: 0,
    explanation: "\"Emergency Traffic\" gives priority to urgent messages."
  },
  {
    id: 38,
    question: "What should a firefighter do when encountering downed power lines?",
    options: [
      "Obtain lineman gloves",
      "Wait until the power company arrives",
      "Use a dry rope to pull the victim away",
      "Wear rubber boots"
    ],
    correctAnswer: 1,
    explanation: "Only the utility company should handle downed power lines."
  },
  {
    id: 39,
    question: "What type of lighting equipment is typically used for emergency services?",
    options: [
      "Portable and fixed",
      "110 or 220 DC current",
      "12 or 24-volt AC current",
      "Portable or wheeled"
    ],
    correctAnswer: 0,
    explanation: "Both portable and fixed lighting are essential for scene visibility."
  },
  {
    id: 40,
    question: "Why do stacked or piled materials create a hazard when burning?",
    options: [
      "If fog streams are not used, the fire will keep burning and increase stress for firefighters.",
      "These fires are best fought with piercing nozzles that can accidentally injure firefighters.",
      "Halligans used to prop up stacked materials can cause trip hazards.",
      "Stacked materials can fall, causing injury to firefighters."
    ],
    correctAnswer: 3,
    explanation: "Stacked materials are unstable when burning and can collapse, causing injury."
  },
  {
    id: 41,
    question: "How far should a 40-foot ladder be placed from a building?",
    options: [
      "8 feet",
      "10 feet",
      "12 feet",
      "15 feet"
    ],
    correctAnswer: 1,
    explanation: "A ladder should be placed at a 75-degree angle, which equals 1/4th of its height."
  },
  {
    id: 42,
    question: "What is true about crawling in limited visibility?",
    options: [
      "It is the fastest method to search",
      "Send one person ahead to recon",
      "Duck walk to increase search time",
      "Feel the floor in front with a tool"
    ],
    correctAnswer: 3,
    explanation: "Feeling the floor helps detect hazards and obstructions."
  },
  {
    id: 43,
    question: "What is the typical length of a single section of a 45 mm (1 ¾ inch) attack line?",
    options: [
      "3 m (10 feet)",
      "7.6 m (25 feet)",
      "15 m (50 feet)",
      "23 m (75 feet)"
    ],
    correctAnswer: 2,
    explanation: "A standard attack line section is typically 15 m (50 feet) for easy handling and deployment."
  },
  {
    id: 44,
    question: "What are signs of oxygen deficiency?",
    options: [
      "Sweating and ringing in ears",
      "Dizziness and impaired vision",
      "Increased breathing and muscle weakness",
      "Headache and fatigue"
    ],
    correctAnswer: 2,
    explanation: "Increased breathing rate and muscle weakness signal low oxygen levels."
  },
  {
    id: 45,
    question: "What type of heat transfer happens through electromagnetic waves?",
    options: [
      "Convection",
      "Radiation",
      "Conduction",
      "Flame contact"
    ],
    correctAnswer: 1,
    explanation: "Radiation transfers heat without direct contact."
  },
  {
    id: 46,
    question: "How should an axe be hoisted?",
    options: [
      "Using a rope at both ends",
      "Vertically with the head of the axe up",
      "Vertically with the head of the axe down",
      "With a tag line attached"
    ],
    correctAnswer: 2,
    explanation: "Hoisting with the head down prevents injury."
  },
  {
    id: 47,
    question: "What is the main purpose of a public fire service communication system?",
    options: [
      "Accept reports of emergencies and dispatch emergency units.",
      "Accept reports of emergencies and generate data.",
      "Dispatch and communicate with emergency units.",
      "Communicate with emergency units and generate supportive data."
    ],
    correctAnswer: 0,
    explanation: "A communication system ensures quick and coordinated responses."
  },
  {
    id: 48,
    question: "What is a pry bar or rambar acts as a _______ to multiply the force applied during forcible entry?",
    options: [
      "Spacer",
      "Gear",
      "Spring",
      "Lever"
    ],
    correctAnswer: 3,
    explanation: "A lever multiplies the applied force, making forcible entry easier."
  },
  {
    id: 49,
    question: "What is the main purpose of salvage operations?",
    options: [
      "To prevent fire extension.",
      "To protect fire department property from damage.",
      "To separate or protect interior and exterior materials from the harmful environment.",
      "To provide better information to the fire inspector."
    ],
    correctAnswer: 2,
    explanation: "Salvage operations focus on protecting property from further damage."
  },
  {
    id: 50,
    question: "What should you do if you become disoriented while searching a burning building?",
    options: [
      "Lay against a wall",
      "Retrace steps to your original location",
      "Activate your PASS device",
      "Initiate a mayday"
    ],
    correctAnswer: 3,
    explanation: "A mayday signals that a firefighter is in trouble and requires immediate assistance."
  },
  {
    id: 51,
    question: "What area should firefighters prioritize when conducting a search during a fire?",
    options: [
      "Area immediately around the fire",
      "Exterior of the structure",
      "Top floor",
      "Area directly inside the main egress"
    ],
    correctAnswer: 0,
    explanation: "Searching near the fire increases the chance of finding victims quickly."
  },
  {
    id: 52,
    question: "What is an exception to the two-in/two-out rule when entering burning buildings?",
    options: [
      "None. There are no exceptions allowed.",
      "It can be waived if not enough people are available.",
      "During life-threatening situations where immediate action can save a life.",
      "It can be waived at the discretion of the firefighter."
    ],
    correctAnswer: 2,
    explanation: "Firefighters can enter alone if there's a reasonable chance to save a life."
  },
  {
    id: 53,
    question: "When a firefighter finds a victim during search and rescue, what should they do first?",
    options: [
      "Contact EMS and have them meet you at the front door.",
      "Inform Operations that a victim was found.",
      "Notify Command immediately.",
      "Pass the victim off to the rapid intervention team."
    ],
    correctAnswer: 2,
    explanation: "Immediate communication with Command ensures that resources are directed appropriately."
  },
  {
    id: 54,
    question: "What can happen when wearing wet or damp clothing during firefighting?",
    options: [
      "Provides better thermal protection",
      "Can lead to reduced thermal resistance and burns",
      "Makes the wearer less susceptible to fatigue",
      "Does not affect thermal protection"
    ],
    correctAnswer: 1,
    explanation: "Wet clothing allows heat to transfer more easily, increasing the risk of burns."
  },
  {
    id: 55,
    question: "What are the two main types of fire hydrants?",
    options: [
      "Wet barrel and dry barrel",
      "High-pressure and low-pressure",
      "Groundwater and surface water",
      "Treated and untreated water"
    ],
    correctAnswer: 0,
    explanation: "Wet barrel hydrants are used in warm climates, while dry barrel hydrants prevent freezing."
  },
  {
    id: 56,
    question: "What should a firefighter do if a compressed air cylinder is found to be defective?",
    options: [
      "Repaired by the person who discovered it",
      "Removed from service",
      "Put on reserve",
      "Filled to 80%"
    ],
    correctAnswer: 1,
    explanation: "Faulty SCBAs can endanger lives."
  },
  {
    id: 57,
    question: "What type of gas creates a backdraft situation?",
    options: [
      "Natural gas",
      "Carbon monoxide",
      "Propane",
      "Oxygen"
    ],
    correctAnswer: 1,
    explanation: "Backdraft occurs when trapped gases ignite upon oxygen introduction."
  },
  {
    id: 58,
    question: "What should a firefighter do before transmitting on the fire department radio?",
    options: [
      "Press the key two or three times",
      "Key the microphone and clear their throat",
      "Turn up the volume",
      "Ensure the channel is clear"
    ],
    correctAnswer: 3,
    explanation: "Ensuring a clear channel prevents communication interference."
  },
  {
    id: 59,
    question: "What symbol and color are used for Class A extinguishers?",
    options: [
      "Circle, blue",
      "Star, yellow",
      "Triangle, green",
      "Square, red"
    ],
    correctAnswer: 2,
    explanation: "Class A extinguishers are for ordinary combustibles and use the triangle/green symbol."
  },
  {
    id: 60,
    question: "What problem can occur due to a water hammer?",
    options: [
      "Pressure decrease on the attack line",
      "Severe injury to a firefighter",
      "Damage to the hoseline or pumper",
      "Cavitation of the pumper pump"
    ],
    correctAnswer: 2,
    explanation: "A water hammer creates a pressure surge that can damage equipment."
  },
  {
    id: 61,
    question: "What type of heat transfer occurs through electromagnetic waves?",
    options: [
      "Convection",
      "Radiation",
      "Conduction",
      "Flame contact"
    ],
    correctAnswer: 1,
    explanation: "Radiation transfers heat without direct contact."
  },
  {
    id: 62,
    question: "What is the main purpose of a public fire service communication system?",
    options: [
      "Accept reports of emergencies and dispatch emergency units.",
      "Accept reports of emergencies and generate data.",
      "Dispatch and communicate with emergency units.",
      "Communicate with emergency units and generate supportive data."
    ],
    correctAnswer: 0,
    explanation: "A communication system ensures quick and coordinated responses."
  },
  {
    id: 63,
    question: "What is the safest way to disconnect power to a building?",
    options: [
      "Remove the electrical meter",
      "Cut the entrance wires",
      "Shut off the main breaker at the service panel",
      "Pull the main breaker at the power pole"
    ],
    correctAnswer: 2,
    explanation: "Shutting off at the main breaker prevents electrical shock and fire hazards."
  },
  {
    id: 64,
    question: "What is a telecommunication device or teletype used for?",
    options: [
      "Location finders for enhanced 9-1-1 systems",
      "Routers for calling 9-1-1 from another city",
      "Devices to help hearing-impaired people use telephones",
      "Chips that enable computers to call 9-1-1"
    ],
    correctAnswer: 2,
    explanation: "TTY devices allow individuals with hearing impairments to communicate through emergency systems."
  },
  {
    id: 65,
    question: "How should PPE be cleaned after firefighting?",
    options: [
      "Clean once a year",
      "Hang in direct sunlight",
      "Wash in station washers",
      "Decontaminate after interior firefighting"
    ],
    correctAnswer: 3,
    explanation: "Contaminants can be harmful if not removed."
  },
  {
    id: 66,
    question: "How should a firefighter communicate when receiving an emergency call?",
    options: [
      "Be direct but calm",
      "Ask for details slowly",
      "Talk as fast as possible",
      "Transfer the call immediately"
    ],
    correctAnswer: 0,
    explanation: "Calm and clear communication ensures accurate information exchange."
  },
  {
    id: 67,
    question: "How can a firefighter reduce stress while awaiting rescue during a mayday call?",
    options: [
      "Hyperventilate",
      "Focus on breathing control",
      "Yell loudly",
      "Remove their mask"
    ],
    correctAnswer: 1,
    explanation: "Controlled breathing conserves oxygen and reduces panic."
  },
  {
    id: 68,
    question: "What should a firefighter do when exiting a fire apparatus at an emergency scene?",
    options: [
      "Jump down onto the ground",
      "Maintain two-hand and two-foot placement",
      "Wait until the vehicle comes to a complete stop",
      "Always dismount while backing down"
    ],
    correctAnswer: 2,
    explanation: "Waiting for a complete stop prevents injury from sudden movement."
  },
  {
    id: 69,
    question: "What type of report do first-arriving companies broadcast to incoming units?",
    options: [
      "Initial",
      "Urgent",
      "Status",
      "Select"
    ],
    correctAnswer: 0,
    explanation: "An initial report provides a quick summary of the scene."
  },
  {
    id: 70,
    question: "What is a warning sign of possible backdraft?",
    options: [
      "Smoke-stained windows",
      "Smoke pouring from the roof",
      "Front door left open",
      "Broken upper windows"
    ],
    correctAnswer: 0,
    explanation: "Smoke-stained windows indicate trapped gases."
  },
  {
    id: 71,
    question: "What type of report should be filed after any incident involving firefighter injury?",
    options: [
      "Command report",
      "After-action review",
      "Incident action plan",
      "Hazard report"
    ],
    correctAnswer: 1,
    explanation: "An after-action review helps improve future response and safety."
  },
  {
    id: 72,
    question: "What is a rapid intervention team (RIT) responsible for?",
    options: [
      "Finding trapped victims",
      "Monitoring weather conditions",
      "Ensuring command structure compliance",
      "Rescuing downed firefighters"
    ],
    correctAnswer: 3,
    explanation: "RIT teams are on standby to assist firefighters in distress."
  },
  {
    id: 73,
    question: "How should rope be dried after washing?",
    options: [
      "In direct sunlight",
      "In a warm, humid room",
      "In a well-ventilated, shaded area",
      "Coiled while wet"
    ],
    correctAnswer: 2,
    explanation: "Direct sunlight can weaken rope fibers over time."
  },
  {
    id: 74,
    question: "What is the minimum capacity for an SCBA cylinder?",
    options: [
      "90%",
      "75%",
      "50%",
      "10%"
    ],
    correctAnswer: 0,
    explanation: "Maintaining at least 90% ensures enough air supply during emergencies."
  },
  {
    id: 75,
    question: "What should firefighters remember when performing a rescue in a hazardous environment?",
    options: [
      "Quick movements",
      "Slow, deliberate movements",
      "Yell for help",
      "Abandon tools if possible"
    ],
    correctAnswer: 1,
    explanation: "Slow and deliberate movements reduce the risk of injury."
  },
  {
    id: 76,
    question: "What is the NFPA 1001 standard used for?",
    options: [
      "Fire Fighter Professional Qualifications",
      "Fire Apparatus Driver/Operator Professional Qualifications",
      "Fire Officer Professional Qualifications",
      "Fire Service Instructor Professional Qualifications"
    ],
    correctAnswer: 0,
    explanation: "NFPA 1001 sets the minimum professional standards for firefighters."
  },
  {
    id: 77,
    question: "What is a key hazard in newer vehicle fires?",
    options: [
      "Explosive fuels",
      "Larger vehicle size",
      "Supplemental restraint systems/airbags",
      "Toxic smoke"
    ],
    correctAnswer: 2,
    explanation: "Airbags can deploy unexpectedly and cause injury."
  },
  {
    id: 78,
    question: "What is true about searching burning buildings?",
    options: [
      "Primary searches should be slow and careful to make sure no one is missed.",
      "The secondary search is the most dangerous.",
      "Two types of searches are performed: primary and secondary.",
      "Secondary searches are performed quickly in areas most likely to have victims."
    ],
    correctAnswer: 2,
    explanation: "Primary searches focus on quick rescue, while secondary searches are thorough checks."
  },
  {
    id: 79,
    question: "What is a key safety practice in a hazardous environment?",
    options: [
      "Situational awareness",
      "Zone control",
      "A crew of four",
      "A rapid intervention team on standby"
    ],
    correctAnswer: 0,
    explanation: "Situational awareness helps firefighters detect changes and avoid hazards."
  },
  {
    id: 80,
    question: "How often should PPE be inspected?",
    options: [
      "Once a year",
      "After every use",
      "Monthly",
      "Annually"
    ],
    correctAnswer: 1,
    explanation: "Regular inspection ensures PPE is in proper working condition."
  },
  {
    id: 81,
    question: "What type of fire extinguisher is best for flammable liquid fires?",
    options: [
      "Water",
      "Dry chemical",
      "Foam",
      "Carbon dioxide"
    ],
    correctAnswer: 2,
    explanation: "Foam extinguishers are effective for flammable liquid fires."
  },
  {
    id: 82,
    question: "What should a firefighter remember when hoisting a charged hoseline?",
    options: [
      "Use a clove hitch",
      "Attach it to the top coupling",
      "Hold the nozzle down",
      "Use a figure-eight knot"
    ],
    correctAnswer: 0,
    explanation: "A clove hitch is secure and prevents slippage."
  },
  {
    id: 83,
    question: "What is the term for the process of setting up a secure water supply from a hydrant?",
    options: [
      "Laying in",
      "Laying out",
      "Catching the hydrant",
      "Stretching the line"
    ],
    correctAnswer: 2,
    explanation: "Catching the hydrant ensures a consistent water supply."
  },
  {
    id: 84,
    question: "What is a primary sign that a fire is ventilation-limited?",
    options: [
      "Rapid flame spread",
      "Thick, black smoke",
      "Slow flame growth",
      "High-pressure gas release"
    ],
    correctAnswer: 1,
    explanation: "Thick, black smoke indicates a lack of ventilation."
  },
  {
    id: 85,
    question: "What should firefighters wear when working around moving traffic at an incident scene?",
    options: [
      "Turnout gear only",
      "High-visibility vest over turnout gear",
      "Plain clothes",
      "Fire-resistant hoodie"
    ],
    correctAnswer: 1,
    explanation: "High-visibility vests increase visibility and reduce risk of accidents."
  },
  {
    id: 86,
    question: "What type of stream should be used for cooling during an interior attack?",
    options: [
      "Fog stream",
      "Straight stream",
      "Broken stream",
      "Direct stream"
    ],
    correctAnswer: 0,
    explanation: "A fog stream absorbs more heat and cools the atmosphere."
  },
  {
    id: 87,
    question: "What symbol and color are used for Class B extinguishers?",
    options: [
      "Green triangle",
      "Blue circle",
      "Red square",
      "Yellow star"
    ],
    correctAnswer: 2,
    explanation: "Class B extinguishers are for flammable liquids and are marked with a red square."
  },
  {
    id: 88,
    question: "When using a ground ladder, what is the proper climbing angle?",
    options: [
      "45 degrees",
      "60 degrees",
      "75 degrees",
      "90 degrees"
    ],
    correctAnswer: 2,
    explanation: "A 75-degree angle provides stability and ease of climbing."
  },
  {
    id: 89,
    question: "What is the primary purpose of a firefighter's PASS device?",
    options: [
      "To identify personnel",
      "To provide breathing assistance",
      "To alert others if the firefighter is motionless",
      "To control the air supply"
    ],
    correctAnswer: 2,
    explanation: "A PASS device emits an alarm if the firefighter stops moving."
  },
  {
    id: 90,
    question: "What type of hose roll allows for quick deployment of a charged line?",
    options: [
      "Flat roll",
      "Donut roll",
      "Dutchman roll",
      "Storage roll"
    ],
    correctAnswer: 1,
    explanation: "The donut roll allows for quick deployment and easy attachment to a water source."
  },
  {
    id: 91,
    question: "What type of roof cut is most effective for vertical ventilation?",
    options: [
      "Triangle cut",
      "X cut",
      "Trench cut",
      "Louver cut"
    ],
    correctAnswer: 3,
    explanation: "A louver cut allows for efficient removal of heat and smoke."
  },
  {
    id: 92,
    question: "What is the most dangerous stage of fire development?",
    options: [
      "Incipient stage",
      "Growth stage",
      "Fully developed stage",
      "Decay stage"
    ],
    correctAnswer: 2,
    explanation: "The fully developed stage produces the highest heat and greatest danger."
  },
  {
    id: 93,
    question: "What is the purpose of a secondary search?",
    options: [
      "Confirm that no victims are present",
      "Locate additional fire sources",
      "Establish the fire's origin",
      "Check for structural integrity"
    ],
    correctAnswer: 0,
    explanation: "A secondary search ensures that no victims were missed during the primary search."
  },
  {
    id: 94,
    question: "What is the minimum staffing required for an interior fire attack according to NFPA standards?",
    options: [
      "Two firefighters",
      "Three firefighters",
      "Four firefighters",
      "Five firefighters"
    ],
    correctAnswer: 2,
    explanation: "NFPA standards require a minimum of four personnel for safe interior attacks."
  },
  {
    id: 95,
    question: "What is a major disadvantage of using a fog stream in an interior attack?",
    options: [
      "Reduces visibility",
      "Increases water consumption",
      "Slower knockdown",
      "Higher pressure requirements"
    ],
    correctAnswer: 0,
    explanation: "Fog streams can generate steam, reducing visibility and creating a dangerous environment."
  },
  {
    id: 96,
    question: "What type of ladder is best for accessing roofs or windows from the ground?",
    options: [
      "Folding ladder",
      "Extension ladder",
      "Attic ladder",
      "Step ladder"
    ],
    correctAnswer: 1,
    explanation: "Extension ladders provide adjustable reach for various heights."
  },
  {
    id: 97,
    question: "What is the purpose of a personnel accountability system?",
    options: [
      "Track firefighter location and status",
      "Record fire investigation data",
      "Assign fireground responsibilities",
      "Provide evacuation instructions"
    ],
    correctAnswer: 0,
    explanation: "Accountability systems help track firefighter location and ensure safety."
  },
  {
    id: 98,
    question: "What are the three components of the fire triangle?",
    options: [
      "Heat, smoke, and oxygen",
      "Fuel, heat, and oxygen",
      "Fuel, smoke, and carbon dioxide",
      "Heat, fuel, and water"
    ],
    correctAnswer: 1,
    explanation: "Removing any side of the fire triangle will extinguish the fire."
  },
  {
    id: 99,
    question: "What is the primary advantage of a fog nozzle over a smooth-bore nozzle?",
    options: [
      "Higher flow rate",
      "Greater reach",
      "Better heat absorption",
      "Lower pressure"
    ],
    correctAnswer: 2,
    explanation: "Fog nozzles create a fine mist that absorbs more heat and cools the fire faster."
  },
  {
    id: 100,
    question: "What is the term for water that remains in the pump after it is shut off?",
    options: [
      "Draft",
      "Static pressure",
      "Residual pressure",
      "Backflow"
    ],
    correctAnswer: 2,
    explanation: "Residual pressure refers to the water left in the pump and hose system after use."
  }
];

export const levelIIQuizData: Question[] = [
  {
    id: 1,
    question: "What should be done with flames from an LPG relief valve?",
    options: [
      "Extinguish with water",
      "Extinguish with foam",
      "Extinguish with fog streams",
      "Do not extinguish"
    ],
    correctAnswer: 3,
    explanation: "Extinguishing vent flames can lead to overpressure and explosions."
  },
  {
    id: 2,
    question: "What should rescuers do first when gaining access to a vehicle to assist a victim?",
    options: [
      "Begin extraction.",
      "Place a backboard between the victim and the steering wheel.",
      "Assess/protect the victim(s).",
      "Remove broken glass."
    ],
    correctAnswer: 2,
    explanation: "Before starting extraction, rescuers must assess the victim's condition and protect them from further harm."
  },
  {
    id: 3,
    question: "What is the primary function of the incident command post?",
    options: [
      "Identify the rehab area",
      "Direct the incident operation",
      "Meet with media personnel",
      "Track units in staging"
    ],
    correctAnswer: 1,
    explanation: "The command post is the central location for managing and directing operations."
  },
  {
    id: 4,
    question: "What should firefighters do with evidence at a fire scene before the investigator arrives?",
    options: [
      "Tag and photograph it",
      "Protect and preserve it",
      "Collect and package it",
      "Isolate and remove it"
    ],
    correctAnswer: 1,
    explanation: "Preserving evidence ensures the fire investigator can properly analyze it."
  },
  {
    id: 5,
    question: "What system ensures accountability of personnel at an incident?",
    options: [
      "Accountability",
      "Chain of command",
      "Unity of command",
      "Span of control"
    ],
    correctAnswer: 0,
    explanation: "Accountability ensures that all personnel are tracked during incidents."
  },
  {
    id: 6,
    question: "What is essential for the Incident Management System to work effectively?",
    options: [
      "Unique terminology",
      "Mutual aid agreements",
      "Involvement of a single agency",
      "Incident Action Plans"
    ],
    correctAnswer: 3,
    explanation: "Incident Action Plans outline the strategy and objectives for managing incidents."
  },
  {
    id: 7,
    question: "What is true about power equipment maintenance?",
    options: [
      "Firefighters should quickly repair broken equipment.",
      "Routine inspection is unnecessary.",
      "Inspect and document all preventive maintenance on equipment.",
      "Fuels should not be stored with stabilizing solutions."
    ],
    correctAnswer: 2,
    explanation: "Regular maintenance and documentation ensure equipment remains functional and safe."
  },
  {
    id: 8,
    question: "Which type of rescue operation typically requires shoring?",
    options: [
      "Cave rescue",
      "High-angle rescue",
      "Trench rescue",
      "Wilderness search and rescue"
    ],
    correctAnswer: 2,
    explanation: "Shoring supports trench walls to prevent collapse during rescue."
  },
  {
    id: 9,
    question: "How is the Incident Command System (ICS) defined?",
    options: [
      "A general plan for managing emergencies",
      "A structured system for managing emergency incidents",
      "A flexible and expanding incident structure",
      "A single person handling the incident"
    ],
    correctAnswer: 1,
    explanation: "ICS provides a standardized and organized approach to incident management."
  },
  {
    id: 10,
    question: "What is the most effective method to control a flammable liquid fire?",
    options: [
      "Foam",
      "Large amounts of water",
      "Letting the fire burn out",
      "Unmanned nozzles"
    ],
    correctAnswer: 0,
    explanation: "Foam creates a barrier that cuts off the fire's oxygen supply."
  },
  {
    id: 11,
    question: "How should the transfer of command be conducted?",
    options: [
      "Over the radio",
      "Face-to-face",
      "By cell phone",
      "Early in the incident"
    ],
    correctAnswer: 1,
    explanation: "Direct communication reduces the chance of miscommunication."
  },
  {
    id: 12,
    question: "What type of construction uses noncombustible materials but lacks fire resistance?",
    options: [
      "Type I",
      "Type II",
      "Type III",
      "Type IV"
    ],
    correctAnswer: 1,
    explanation: "Type II construction uses materials that won't burn but may not provide insulation from heat."
  },
  {
    id: 13,
    question: "What is the safest approach to a liquid petroleum gas (LPG) vehicle fire?",
    options: [
      "From the ends",
      "From 15 meters away",
      "At a 45-degree angle",
      "At right angles"
    ],
    correctAnswer: 2,
    explanation: "Angled approaches reduce risk from pressure-release explosions."
  },
  {
    id: 14,
    question: "What is a basic hydraulic tool used for vehicle rescue?",
    options: [
      "Come-along",
      "Shears/cutters",
      "Air impact wrench",
      "Struts"
    ],
    correctAnswer: 1,
    explanation: "Shears and cutters are used to cut through metal during vehicle rescues."
  },
  {
    id: 15,
    question: "After the fire investigator finishes collecting evidence, what is the next step?",
    options: [
      "Ventilation",
      "Demobilization",
      "Inventory",
      "Overhaul"
    ],
    correctAnswer: 3,
    explanation: "Overhaul ensures that any hidden fires are extinguished and the area is safe."
  },
  {
    id: 16,
    question: "What percentage of firefighting foam solutions is water?",
    options: [
      "80% to 84.9%",
      "74% to 79.9%",
      "94% to 99.9%",
      "60% to 64.9%"
    ],
    correctAnswer: 2,
    explanation: "High water content improves cooling and smothering capability."
  },
  {
    id: 17,
    question: "What is the last step after maintaining gas-powered equipment?",
    options: [
      "Document the work completed in a logbook.",
      "Clean the work area.",
      "Notify your officer that the work is done.",
      "Contact the manufacturer if there's a problem."
    ],
    correctAnswer: 0,
    explanation: "Keeping a record of maintenance ensures accountability and tracking."
  },
  {
    id: 18,
    question: "How should evidence be handled when removed from a fire scene?",
    options: [
      "Picked up with bare hands for better grip",
      "Placed in large containers to off-gas",
      "Soaked in water and sealed in buckets",
      "Properly sealed, labeled, and preserved"
    ],
    correctAnswer: 3,
    explanation: "Correct handling preserves the integrity of the evidence for investigation."
  },
  {
    id: 19,
    question: "What is the meaning of 'Unified Command' in the Incident Command System (ICS)?",
    options: [
      "Adapting to increasing complexity of incidents",
      "Used when multiple agencies are involved in managing an incident",
      "Dividing an incident into smaller sections",
      "Each person having a single supervisor"
    ],
    correctAnswer: 1,
    explanation: "Unified Command allows agencies to work together under a single coordinated plan."
  },
  {
    id: 20,
    question: "Who holds overall responsibility for managing an incident under the Incident Management System?",
    options: [
      "Fire Chief",
      "Planning Chief",
      "Incident Commander",
      "Operations Chief"
    ],
    correctAnswer: 2,
    explanation: "The Incident Commander is responsible for overall strategy and decision-making."
  },
  {
    id: 21,
    question: "What is the process of creating foam bubbles in firefighting foam called?",
    options: [
      "Proportioning",
      "Aeration",
      "Mixing",
      "Blending"
    ],
    correctAnswer: 1,
    explanation: "Aeration forms the foam structure that helps smother fires."
  },
  {
    id: 22,
    question: "How should a firefighter position themselves when advancing a hose into a fire?",
    options: [
      "Standing directly in front",
      "Kneeling directly in front",
      "Crouching or kneeling to the side",
      "Lying flat"
    ],
    correctAnswer: 2,
    explanation: "Kneeling to the side helps avoid direct heat and falling debris."
  },
  {
    id: 23,
    question: "What is the preferred entry point into a vehicle during rescue?",
    options: [
      "Windshield",
      "Doors",
      "Roof",
      "Trunk"
    ],
    correctAnswer: 1,
    explanation: "Doors are the safest and most stable entry point for rescue operations."
  },
  {
    id: 24,
    question: "When laying out a fire hose for testing, what is the maximum recommended test length?",
    options: [
      "120 m (400 ft)",
      "90 m (300 ft)",
      "150 m (500 ft)",
      "300 m (1,000 ft)"
    ],
    correctAnswer: 1,
    explanation: "Keeping test lengths under 300 feet ensures consistency and safety during testing."
  },
  {
    id: 25,
    question: "What type of electrical device is used when multiple connections are needed?",
    options: [
      "Cords",
      "Junction boxes",
      "Inverters",
      "Power take-offs"
    ],
    correctAnswer: 1,
    explanation: "Junction boxes safely handle multiple electrical connections."
  },
  {
    id: 26,
    question: "How many pneumatic airbags can be safely stacked during a lift?",
    options: [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    correctAnswer: 0,
    explanation: "Stacking more than two airbags can cause instability and increase the risk of failure."
  },
  {
    id: 27,
    question: "What should firefighters assess before entering a burning building?",
    options: [
      "Location of the safety officer",
      "Smoke conditions and fire behavior",
      "Staging location",
      "Establishing rehab"
    ],
    correctAnswer: 1,
    explanation: "Understanding smoke and fire behavior helps anticipate dangers."
  },
  {
    id: 28,
    question: "What observation can help identify the cause of a fire?",
    options: [
      "Closed windows on a cold day",
      "Evidence of forced entry before the fire",
      "People observing the fire",
      "Number of bystanders present"
    ],
    correctAnswer: 1,
    explanation: "Unusual signs of entry may suggest arson or other suspicious activity."
  },
  {
    id: 29,
    question: "What type of alarm-initiating device contains radioactive material in its sensing chamber?",
    options: [
      "Water detector",
      "Photoelectric detector",
      "Flame detector",
      "Ionization detector"
    ],
    correctAnswer: 3,
    explanation: "Ionization detectors use a small amount of radioactive material to detect smoke particles."
  },
  {
    id: 30,
    question: "What is the most effective way to protect life and property from fire?",
    options: [
      "Prevention",
      "Improved technology",
      "Increasing inspections",
      "Shorter response times"
    ],
    correctAnswer: 0,
    explanation: "Fire prevention reduces the likelihood of fires and the potential damage they can cause."
  },
  {
    id: 31,
    question: "What should be explained first during a fire station tour?",
    options: [
      "Costs associated with emergency services.",
      "Number of firefighters on duty.",
      "Number of daily calls received.",
      "What happens if an emergency occurs during the tour."
    ],
    correctAnswer: 3,
    explanation: "Visitors should know what to do if an emergency happens during the tour."
  },
  {
    id: 32,
    question: "What is the meaning of 'Unity of Command' within the Incident Management System (IMS)?",
    options: [
      "Ability to grow and adapt to complex incidents",
      "Number of subordinates assigned to a supervisor",
      "Each person reporting to one direct supervisor",
      "Used when multiple agencies have jurisdiction over an incident"
    ],
    correctAnswer: 2,
    explanation: "Unity of Command ensures clear leadership by assigning each person to one supervisor."
  },
  {
    id: 33,
    question: "What is the correct action after closing a valve on a flammable gas container?",
    options: [
      "Shut off nozzles and leave",
      "Continue applying water while exiting",
      "Shut off water and leave",
      "Monitor the area for reignition"
    ],
    correctAnswer: 1,
    explanation: "Cooling prevents the container from reheating and reigniting."
  },
  {
    id: 34,
    question: "What should be the first consideration when coordinating an interior attack?",
    options: [
      "Water damage",
      "Controlling utilities",
      "Salvage operations",
      "Risk of flare-ups"
    ],
    correctAnswer: 1,
    explanation: "Shutting off utilities reduces the risk of gas leaks and electrical hazards."
  },
  {
    id: 35,
    question: "What is true about using fog streams in an interior attack?",
    options: [
      "Can be adjusted to a solid stream",
      "Moves large volumes of air",
      "Not affected by wind",
      "Effective at absorbing heat"
    ],
    correctAnswer: 3,
    explanation: "Fog streams increase surface area, improving cooling and heat absorption."
  },
  {
    id: 36,
    question: "What is the proper order of entry to gain access to a vehicle's interior during a rescue?",
    options: [
      "Doors, roof, windows",
      "Doors, windows, body",
      "Windows, trunk, floor",
      "Roof, doors, trunk"
    ],
    correctAnswer: 1,
    explanation: "Doors and windows are typically the easiest and quickest points of access, followed by the body if needed."
  },
  {
    id: 37,
    question: "How should fuel tanks on power tools be left when not in use?",
    options: [
      "Full",
      "Approximately half full",
      "Almost empty",
      "Absolutely empty and dry"
    ],
    correctAnswer: 0,
    explanation: "Keeping fuel tanks full prevents moisture buildup and internal corrosion."
  },
  {
    id: 38,
    question: "What is the first step when cutting a laminated windshield during a rescue?",
    options: [
      "Cut across the bottom",
      "Cut across the top",
      "Protect the victim from glass fragments",
      "Cut a starter hole"
    ],
    correctAnswer: 2,
    explanation: "Protecting the victim ensures safety from flying glass."
  },
  {
    id: 39,
    question: "What type of detector is most effective for sensing visible smoke?",
    options: [
      "Photoelectric",
      "Ionization",
      "Ultraviolet",
      "Infrared"
    ],
    correctAnswer: 0,
    explanation: "Photoelectric detectors are better at detecting larger, visible smoke particles from smoldering fires."
  },
  {
    id: 40,
    question: "What hazard is associated with Type V construction fires?",
    options: [
      "Steel components shortening",
      "Concrete breakdown from heat",
      "Extensive spalling",
      "High potential for fire spread within the structure"
    ],
    correctAnswer: 3,
    explanation: "Type V construction uses lightweight materials that burn quickly, allowing for rapid fire spread."
  },
  {
    id: 41,
    question: "What term describes situations where the victim has been submerged underwater for an extended period with death likely?",
    options: [
      "Saves",
      "Extrications",
      "Rescues",
      "Recoveries"
    ],
    correctAnswer: 3,
    explanation: "A recovery is performed when there is little or no chance of survival."
  },
  {
    id: 42,
    question: "What is the final step in conducting a home safety survey?",
    options: [
      "Issue code violations",
      "Review the results of the survey with the homeowner",
      "Notify your fire chief of code issues",
      "Stress the importance of supporting the local fire department"
    ],
    correctAnswer: 1,
    explanation: "Reviewing the results helps the homeowner understand safety improvements."
  },
  {
    id: 43,
    question: "What should rescuers do with an undeployed airbag during vehicle rescue?",
    options: [
      "Leave it untouched",
      "Place a protective barrier over it",
      "Cut the wiring",
      "Inflate it manually"
    ],
    correctAnswer: 1,
    explanation: "An undeployed airbag can activate suddenly, causing injury."
  },
  {
    id: 44,
    question: "What is the purpose of a standpipe system?",
    options: [
      "To automatically boost sprinkler pressure",
      "To reduce pressure at non-operating sprinkler heads",
      "To deliver water to each floor of a building",
      "To be used only with Class II standpipe operations"
    ],
    correctAnswer: 2,
    explanation: "Standpipe systems provide firefighters with a reliable water source on upper floors."
  },
  {
    id: 45,
    question: "What building feature creates a major hazard during a fire?",
    options: [
      "Noncombustible materials",
      "Trusses",
      "Curtain walls",
      "Nonbearing walls"
    ],
    correctAnswer: 1,
    explanation: "Trusses are prone to collapse under heat and stress."
  },
  {
    id: 46,
    question: "What should be used along with rescue lift airbags during a vehicle rescue?",
    options: [
      "Cribbing",
      "Hose tape",
      "Block and tackle",
      "Come-along"
    ],
    correctAnswer: 0,
    explanation: "Cribbing stabilizes the vehicle and prevents shifting when airbags are used."
  },
  {
    id: 47,
    question: "What is an example of a powered hydraulic tool commonly used in rescue operations?",
    options: [
      "Strut",
      "Hux bar",
      "Extension adze",
      "Spreader"
    ],
    correctAnswer: 3,
    explanation: "Spreaders are widely used in vehicle extrication to create openings or remove obstacles."
  },
  {
    id: 48,
    question: "Which phase of vehicle rescue determines the overall plan?",
    options: [
      "Preparation",
      "Disentanglement",
      "Hazard control",
      "Size-up"
    ],
    correctAnswer: 3,
    explanation: "Size-up allows firefighters to assess the situation and plan accordingly."
  },
  {
    id: 49,
    question: "What is the primary goal of public fire safety education?",
    options: [
      "Wake people up to the legal consequences of having a fire.",
      "Increase public support for the fire department.",
      "Teach people how to react if a fire occurs.",
      "Lower insurance rates."
    ],
    correctAnswer: 2,
    explanation: "Fire safety education helps people understand how to respond quickly and effectively in case of a fire."
  },
  {
    id: 50,
    question: "What happens when a single truss member fails during a fire?",
    options: [
      "Only the failed truss collapses",
      "The neighboring truss supports the load",
      "The entire truss system is likely to collapse",
      "Partial collapse is unlikely"
    ],
    correctAnswer: 2,
    explanation: "Trusses are interconnected, so when one fails, the entire system is at risk of collapse."
  },
  {
    id: 51,
    question: "In mechanical ventilation, how should airflow be directed?",
    options: [
      "On the upward side",
      "On the windward side",
      "In the same direction as the wind",
      "Toward master stream operations"
    ],
    correctAnswer: 2,
    explanation: "Aligning ventilation with natural airflow increases efficiency and smoke removal."
  },
  {
    id: 52,
    question: "When should pressurized flammable liquid fires be extinguished?",
    options: [
      "Always",
      "Only if the fuel source can be shut off",
      "Only by trained specialists",
      "Only if vapor density is above one"
    ],
    correctAnswer: 1,
    explanation: "Extinguishing the fire before cutting off the fuel source can lead to reignition."
  },
  {
    id: 53,
    question: "What foam application technique is used to cover the surface of a burning liquid?",
    options: [
      "Roll-on technique",
      "Sub-surface injection technique",
      "Drizzle-on technique",
      "Blitz technique"
    ],
    correctAnswer: 0,
    explanation: "The roll-on method creates a protective layer that cuts off oxygen from the fire."
  },
  {
    id: 54,
    question: "What is the correct response if fire conditions suddenly worsen during an interior attack?",
    options: [
      "Contact the safety officer",
      "Order the crew to withdraw",
      "Notify the incident commander",
      "Call for an accountability report"
    ],
    correctAnswer: 1,
    explanation: "Rapidly worsening conditions require an immediate withdrawal to avoid injury."
  },
  {
    id: 55,
    question: "How should a firefighter handle a fire hose during a high-rise fire?",
    options: [
      "Extend directly from the street connection",
      "Use the building's standpipe system",
      "Stretch from the nearest hydrant",
      "Use an aerial ladder"
    ],
    correctAnswer: 1,
    explanation: "High-rise fires require the use of a standpipe system for quick access to water."
  },
  {
    id: 56,
    question: "What is the last step after testing a fire hose?",
    options: [
      "Clean the hose",
      "Record the test in the logbook",
      "Dry the hose",
      "Remove the couplings"
    ],
    correctAnswer: 1,
    explanation: "Documenting the test ensures accountability and maintenance records."
  },
  {
    id: 57,
    question: "What type of foam nozzle is recommended for protein and fluoroprotein foams?",
    options: [
      "Air aspirating foam nozzles",
      "Fog nozzle",
      "High expansion nozzle",
      "Cannot be used with Class A foam"
    ],
    correctAnswer: 0,
    explanation: "Air aspirating nozzles produce the proper foam consistency."
  },
  {
    id: 58,
    question: "What is the purpose of the hot zone at an incident scene?",
    options: [
      "Incident command post",
      "Apparatus staging area",
      "Most dangerous area of the scene",
      "Decontamination area"
    ],
    correctAnswer: 2,
    explanation: "The hot zone is the most hazardous area and requires full protective equipment."
  },
  {
    id: 59,
    question: "What should be the first step when rescuing a trapped person from a vehicle?",
    options: [
      "Stabilize the vehicle",
      "Tip it downward",
      "Extract the person immediately",
      "Leave it untouched"
    ],
    correctAnswer: 0,
    explanation: "Stabilizing the vehicle prevents movement and additional injury."
  },
  {
    id: 60,
    question: "How should evidence be managed during overhaul?",
    options: [
      "Most evidence is found before overhaul",
      "Firefighters and investigators work separately",
      "Evidence is rarely damaged during overhaul",
      "The investigator should inspect areas before overhaul"
    ],
    correctAnswer: 3,
    explanation: "Allowing the investigator to inspect before overhaul prevents loss of valuable clues."
  },
  {
    id: 61,
    question: "What should firefighters do after reaching the proper test pressure for a fire hose?",
    options: [
      "Release pressure immediately",
      "Hold the pressure for three to five minutes",
      "Disconnect the hose",
      "Check the couplings for leaks"
    ],
    correctAnswer: 1,
    explanation: "Holding the pressure ensures the hose can withstand operating pressure."
  },
  {
    id: 62,
    question: "What is the recommended inspection interval for fire hoses?",
    options: [
      "Six months",
      "Twelve months",
      "Eighteen months",
      "Twenty-four months"
    ],
    correctAnswer: 1,
    explanation: "Fire hoses should be tested at least once a year to ensure safety and reliability."
  },
  {
    id: 63,
    question: "What should firefighters assess when using foam for a polar solvent fire?",
    options: [
      "Use only protein foam",
      "Use foam compatible with water-based fires",
      "Ensure proper mixing ratio",
      "Use regular Class A foam"
    ],
    correctAnswer: 2,
    explanation: "Proper mixing ensures foam effectiveness on polar solvents."
  },
  {
    id: 64,
    question: "What type of clothing is required for propane gas fires?",
    options: [
      "Full personal protective equipment (PPE)",
      "Level A clothing",
      "Level B clothing",
      "Proximity protective clothing"
    ],
    correctAnswer: 0,
    explanation: "Full PPE protects firefighters from heat and toxic fumes."
  },
  {
    id: 65,
    question: "What is the correct action after a BLEVE (Boiling Liquid Expanding Vapor Explosion)?",
    options: [
      "Continue firefighting operations",
      "Evacuate the area immediately",
      "Investigate the cause",
      "Resume foam application"
    ],
    correctAnswer: 1,
    explanation: "A BLEVE creates extreme hazards, requiring immediate evacuation."
  },
  {
    id: 66,
    question: "What is the most effective method for extinguishing a fire involving an LPG tanker vent?",
    options: [
      "Direct streams at the relief valve",
      "Aim at the ends",
      "Approach at a 30-degree angle",
      "Avoid extinguishing vent flames"
    ],
    correctAnswer: 3,
    explanation: "Venting relieves pressure and prevents explosions."
  },
  {
    id: 67,
    question: "What is the least effective method to detect hidden fires?",
    options: [
      "Looking for discoloration",
      "Feeling the area",
      "Listening for popping sounds",
      "Smelling for smoke"
    ],
    correctAnswer: 3,
    explanation: "Smoke can travel far from the fire source, making smell unreliable for pinpointing hidden fires."
  },
  {
    id: 68,
    question: "What is the proper response to a suspected gas leak in a building?",
    options: [
      "Open all windows",
      "Shut off electrical power",
      "Turn off gas appliances",
      "Evacuate immediately"
    ],
    correctAnswer: 3,
    explanation: "Evacuating removes people from danger and prevents ignition."
  },
  {
    id: 69,
    question: "What system provides firefighters with a reliable water source on upper floors?",
    options: [
      "Hydrant system",
      "Automatic sprinkler system",
      "Standpipe system",
      "Water shuttle"
    ],
    correctAnswer: 2,
    explanation: "Standpipe systems provide water directly to each floor."
  },
  {
    id: 70,
    question: "What gas detector is commonly used in homes?",
    options: [
      "Oxygen",
      "Carbon monoxide",
      "Methane",
      "Radon"
    ],
    correctAnswer: 1,
    explanation: "Carbon monoxide detectors help protect against this colorless, odorless gas."
  },
  {
    id: 71,
    question: "What is the first step to follow when conducting a fire station tour?",
    options: [
      "Follow department policy for conducting the tour.",
      "Base the tour on the visitor's interests.",
      "Let visitors decide what they want to see.",
      "Limit the time based on crew availability."
    ],
    correctAnswer: 0,
    explanation: "Following department guidelines ensures that all key points are covered during the tour."
  },
  {
    id: 72,
    question: "Which fire safety program is intended for young children?",
    options: [
      "Stay Away From Hot Things",
      "Change Your Clock – Change Your Battery",
      "Fire Safety for Babysitters",
      "Home Inspections"
    ],
    correctAnswer: 0,
    explanation: "This program teaches young children about the dangers of fire and how to stay safe."
  },
  {
    id: 73,
    question: "Who should fire departments educate to recognize potential hazards?",
    options: [
      "Preschoolers",
      "The elderly",
      "Adults",
      "Citizens of all ages"
    ],
    correctAnswer: 3,
    explanation: "Fire safety education should target people of all ages to increase overall safety awareness."
  },
  {
    id: 74,
    question: "What is the simplest and most effective way to protect life and property from fire?",
    options: [
      "Prevention",
      "Improved technology",
      "Increasing inspections",
      "Shorter response times"
    ],
    correctAnswer: 0,
    explanation: "Fire prevention reduces the likelihood of fires and the potential damage they can cause."
  },
  {
    id: 75,
    question: "What should firefighters do with smoke alarms during a residential fire safety survey?",
    options: [
      "Nothing should be done.",
      "If smoke detectors are observed, firefighters should comment favorably.",
      "One detector at random should be checked.",
      "Each one should be tested."
    ],
    correctAnswer: 3,
    explanation: "Testing each smoke alarm ensures they are functional and ready to provide early warnings."
  },
  {
    id: 76,
    question: "What type of detector is most effective for sensing visible smoke?",
    options: [
      "Photoelectric",
      "Ionization",
      "Ultraviolet",
      "Infrared"
    ],
    correctAnswer: 0,
    explanation: "Photoelectric detectors are better at detecting larger, visible smoke particles from smoldering fires."
  },
  {
    id: 77,
    question: "What type of alarm component is manually activated?",
    options: [
      "Thermally sensitive device",
      "Flame detector",
      "Water flow detector",
      "Pull station"
    ],
    correctAnswer: 3,
    explanation: "Pull stations allow building occupants to manually trigger the fire alarm in case of an emergency."
  },
  {
    id: 78,
    question: "What observation can help determine the cause of a fire?",
    options: [
      "How the fire reacts to water",
      "People leaving the scene",
      "Hindrances to firefighting",
      "Number of observers"
    ],
    correctAnswer: 0,
    explanation: "Water reaction can reveal the type of material burning."
  },
  {
    id: 79,
    question: "What is the first step when deactivating a vehicle airbag?",
    options: [
      "Ground the solenoid.",
      "Remove the cartridge.",
      "Unscrew the primer.",
      "Disconnect the battery."
    ],
    correctAnswer: 3,
    explanation: "Disconnecting the battery prevents accidental airbag deployment during rescue."
  },
  {
    id: 80,
    question: "What term describes situations where the victim has been submerged underwater for an extended period with death likely?",
    options: [
      "Saves",
      "Extrications",
      "Rescues",
      "Recoveries"
    ],
    correctAnswer: 3,
    explanation: "A recovery is performed when there is little or no chance of survival."
  },
  {
    id: 81,
    question: "What should firefighters do if water is unavailable for an LPG tanker fire?",
    options: [
      "Use handlines",
      "Use aerial nozzles",
      "Withdraw immediately",
      "Use fog streams"
    ],
    correctAnswer: 2,
    explanation: "Without sufficient cooling, an LPG fire becomes too dangerous to manage."
  },
  {
    id: 82,
    question: "What building feature creates a major hazard during a fire?",
    options: [
      "Noncombustible materials",
      "Trusses",
      "Curtain walls",
      "Nonbearing walls"
    ],
    correctAnswer: 1,
    explanation: "Trusses are prone to collapse under heat and stress."
  },
  {
    id: 83,
    question: "What happens when a single truss member fails during a fire?",
    options: [
      "Only the failed truss collapses",
      "The neighboring truss supports the load",
      "The entire truss system is likely to collapse",
      "Partial collapse is unlikely"
    ],
    correctAnswer: 2,
    explanation: "Trusses are interconnected, so when one fails, the entire system is at risk of collapse."
  },
  {
    id: 84,
    question: "What is the correct order for gaining access to a vehicle's interior during a rescue?",
    options: [
      "Doors, roof, windows",
      "Doors, windows, body",
      "Windows, trunk, floor",
      "Roof, doors, trunk"
    ],
    correctAnswer: 1,
    explanation: "Doors and windows are typically the easiest and quickest points of access, followed by the body if needed."
  },
  {
    id: 85,
    question: "What is the last step after maintaining gas-powered equipment?",
    options: [
      "Document the work completed in a logbook.",
      "Clean the work area.",
      "Notify your officer that the work is done.",
      "Contact the manufacturer if there's a problem."
    ],
    correctAnswer: 0,
    explanation: "Keeping a record of maintenance ensures accountability and tracking."
  },
  {
    id: 86,
    question: "What type of construction uses noncombustible materials but lacks fire resistance?",
    options: [
      "Type I",
      "Type II",
      "Type III",
      "Type IV"
    ],
    correctAnswer: 1,
    explanation: "Type II construction uses materials that won't burn but may not provide insulation from heat."
  },
  {
    id: 87,
    question: "What should be the first consideration when coordinating an interior attack?",
    options: [
      "Water damage",
      "Controlling utilities",
      "Salvage operations",
      "Risk of flare-ups"
    ],
    correctAnswer: 1,
    explanation: "Shutting off utilities reduces the risk of gas leaks and electrical hazards."
  },
  {
    id: 88,
    question: "What type of protective clothing is required for propane gas fires?",
    options: [
      "Full personal protective equipment (PPE)",
      "Level A clothing",
      "Level B clothing",
      "Proximity protective clothing"
    ],
    correctAnswer: 0,
    explanation: "Full PPE protects firefighters from heat and toxic fumes."
  },
  {
    id: 89,
    question: "What type of electrical device is used when multiple connections are needed?",
    options: [
      "Cords",
      "Junction boxes",
      "Inverters",
      "Power take-offs"
    ],
    correctAnswer: 1,
    explanation: "Junction boxes safely handle multiple electrical connections."
  },
  {
    id: 90,
    question: "What is the proper response to a suspected gas leak in a building?",
    options: [
      "Open all windows",
      "Shut off electrical power",
      "Turn off gas appliances",
      "Evacuate immediately"
    ],
    correctAnswer: 3,
    explanation: "Evacuating removes people from danger and prevents ignition."
  },
  {
    id: 91,
    question: "What is the safest approach to a liquid petroleum gas (LPG) vehicle fire?",
    options: [
      "From the ends",
      "From 15 meters away",
      "At a 45-degree angle",
      "At right angles"
    ],
    correctAnswer: 2,
    explanation: "Angled approaches reduce risk from pressure-release explosions."
  },
  {
    id: 92,
    question: "What should be done with flames from an LPG tanker vent?",
    options: [
      "Direct streams at the relief valve",
      "Aim at the ends",
      "Approach at a 30-degree angle",
      "Avoid extinguishing vent flames"
    ],
    correctAnswer: 3,
    explanation: "Venting relieves pressure and prevents explosions."
  },
  {
    id: 93,
    question: "What should be done after a BLEVE (Boiling Liquid Expanding Vapor Explosion)?",
    options: [
      "Continue firefighting operations",
      "Evacuate the area immediately",
      "Investigate the cause",
      "Resume foam application"
    ],
    correctAnswer: 1,
    explanation: "A BLEVE creates extreme hazards, requiring immediate evacuation."
  },
  {
    id: 94,
    question: "What should be done with evidence at a fire scene before the investigator arrives?",
    options: [
      "Tag and photograph it",
      "Protect and preserve it",
      "Collect and package it",
      "Isolate and remove it"
    ],
    correctAnswer: 1,
    explanation: "Preserving evidence ensures the fire investigator can properly analyze it."
  },
  {
    id: 95,
    question: "What is the proper action when fire conditions suddenly worsen during an interior attack?",
    options: [
      "Contact the safety officer",
      "Order the crew to withdraw",
      "Notify the incident commander",
      "Call for an accountability report"
    ],
    correctAnswer: 1,
    explanation: "Rapidly worsening conditions require an immediate withdrawal to avoid injury."
  },
  {
    id: 96,
    question: "What should firefighters do after reaching the proper test pressure for a fire hose?",
    options: [
      "Release pressure immediately",
      "Hold the pressure for three to five minutes",
      "Disconnect the hose",
      "Check the couplings for leaks"
    ],
    correctAnswer: 1,
    explanation: "Holding the pressure ensures the hose can withstand operating pressure."
  },
  {
    id: 97,
    question: "What should firefighters do with smoke alarms during a residential fire safety survey?",
    options: [
      "Nothing should be done.",
      "If smoke detectors are observed, firefighters should comment favorably.",
      "One detector at random should be checked.",
      "Each one should be tested."
    ],
    correctAnswer: 3,
    explanation: "Testing each smoke alarm ensures they are functional and ready to provide early warnings."
  },
  {
    id: 98,
    question: "What is the correct order for gaining access to a vehicle's interior during a rescue?",
    options: [
      "Doors, roof, windows",
      "Doors, windows, body",
      "Windows, trunk, floor",
      "Roof, doors, trunk"
    ],
    correctAnswer: 1,
    explanation: "Doors and windows are typically the easiest and quickest points of access, followed by the body if needed."
  },
  {
    id: 99,
    question: "What is the safest approach to a liquid petroleum gas (LPG) vehicle fire?",
    options: [
      "From the ends",
      "From 15 meters away",
      "At a 45-degree angle",
      "At right angles"
    ],
    correctAnswer: 2,
    explanation: "Angled approaches reduce risk from pressure-release explosions."
  },
  {
    id: 100,
    question: "What is the purpose of a standpipe system?",
    options: [
      "To automatically boost sprinkler pressure",
      "To reduce pressure at non-operating sprinkler heads",
      "To deliver water to each floor of a building",
      "To be used only with Class II standpipe operations"
    ],
    correctAnswer: 2,
    explanation: "Standpipe systems provide firefighters with a reliable water source on upper floors."
  }
];
