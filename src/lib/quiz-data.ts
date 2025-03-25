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
    id:
