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
  },
  // Additional 145 questions for Level I
  {
    id: 6,
    question: "Which protective ensemble component is specifically designed to protect the firefighter's head from impact?",
    options: [
      "Nomex hood",
      "SCBA facepiece",
      "Helmet",
      "Flash hood"
    ],
    correctAnswer: 2,
    explanation: "The helmet is specifically designed to protect the firefighter's head from impact, falling objects, and heat."
  },
  {
    id: 7,
    question: "What is the purpose of a personal alert safety system (PASS) device?",
    options: [
      "To monitor air supply in an SCBA",
      "To alert others when a firefighter becomes motionless",
      "To communicate with other firefighters",
      "To detect hazardous gases"
    ],
    correctAnswer: 1,
    explanation: "A PASS device sounds an alarm when a firefighter becomes motionless for a specified period, alerting others that the firefighter may be in distress."
  },
  {
    id: 8,
    question: "Which type of fire extinguisher is appropriate for Class B fires?",
    options: [
      "Water extinguisher",
      "Dry chemical extinguisher",
      "Class D extinguisher",
      "Class K extinguisher"
    ],
    correctAnswer: 1,
    explanation: "Dry chemical extinguishers are appropriate for Class B fires, which involve flammable liquids and gases."
  },
  {
    id: 9,
    question: "What is the term for the process of removing contaminated protective clothing and equipment after a fire?",
    options: [
      "Donning",
      "Doffing",
      "Decontamination",
      "Sterilization"
    ],
    correctAnswer: 2,
    explanation: "Decontamination is the process of removing contaminants from protective clothing and equipment to reduce the risk of exposure to hazardous substances."
  },
  {
    id: 10,
    question: "What is the function of a sprinkler system in a building?",
    options: [
      "To detect smoke and alert occupants",
      "To automatically suppress or extinguish a fire",
      "To provide a water supply for firefighters",
      "To ventilate smoke from the building"
    ],
    correctAnswer: 2,
    explanation: "Sprinkler systems are designed to automatically suppress or extinguish a fire by discharging water when heat is detected, helping to control the fire in its early stages."
  },
  {
    id: 11,
    question: "What is the purpose of a fire hose?",
    options: [
      "To supply water from a water source to a fire",
      "To provide ventilation during a fire",
      "To create a barrier to prevent fire spread",
      "To rescue victims from a fire"
    ],
    correctAnswer: 0,
    explanation: "A fire hose is used to supply water from a water source, such as a fire hydrant or fire apparatus, to extinguish a fire."
  },
  {
    id: 12,
    question: "What is the role of a firefighter during search and rescue operations?",
    options: [
      "To locate and remove victims from a fire or hazardous environment",
      "To operate fire apparatus and equipment",
      "To provide medical assistance to injured victims",
      "To coordinate fire suppression efforts"
    ],
    correctAnswer: 0,
    explanation: "During search and rescue operations, firefighters locate and remove victims from a fire or hazardous environment, ensuring their safety and well-being."
  },
  {
    id: 13,
    question: "What is the importance of maintaining situational awareness during firefighting operations?",
    options: [
      "To ensure the safety of firefighters and victims",
      "To coordinate fire suppression efforts effectively",
      "To anticipate potential hazards and risks",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Maintaining situational awareness is crucial for ensuring the safety of firefighters and victims, coordinating fire suppression efforts effectively, and anticipating potential hazards and risks."
  },
  {
    id: 14,
    question: "What is the purpose of a fire hydrant?",
    options: [
      "To provide a water supply for firefighting operations",
      "To regulate water pressure in a water distribution system",
      "To monitor water consumption in a community",
      "To test water quality in a water supply"
    ],
    correctAnswer: 0,
    explanation: "A fire hydrant provides a readily available water supply for firefighting operations, allowing firefighters to quickly access water to extinguish fires."
  },
    {
    id: 15,
    question: "What is the function of a fire alarm system?",
    options: [
      "To detect smoke and alert occupants",
      "To automatically suppress or extinguish a fire",
      "To provide a water supply for firefighters",
      "To ventilate smoke from the building"
    ],
    correctAnswer: 0,
    explanation: "A fire alarm system is designed to detect smoke or heat and alert occupants of a fire, allowing them to evacuate the building safely."
  },
  {
    id: 16,
    question: "What is the purpose of a fire department's standard operating procedures (SOPs)?",
    options: [
      "To provide guidelines for safe and effective firefighting operations",
      "To establish a chain of command within the fire department",
      "To outline the responsibilities of each firefighter",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Standard operating procedures (SOPs) provide guidelines for safe and effective firefighting operations, establish a chain of command, and outline the responsibilities of each firefighter."
  },
  {
    id: 17,
    question: "What is the role of a fire investigator?",
    options: [
      "To determine the origin and cause of a fire",
      "To provide medical assistance to injured victims",
      "To coordinate fire suppression efforts",
      "To enforce fire codes and regulations"
    ],
    correctAnswer: 0,
    explanation: "A fire investigator is responsible for determining the origin and cause of a fire, gathering evidence, and conducting interviews to understand the circumstances surrounding the fire."
  },
  {
    id: 18,
    question: "What is the importance of conducting regular fire drills in a building?",
    options: [
      "To familiarize occupants with evacuation procedures",
      "To test the effectiveness of fire alarm systems",
      "To identify potential hazards and risks",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Regular fire drills familiarize occupants with evacuation procedures, test the effectiveness of fire alarm systems, and identify potential hazards and risks, ensuring a safe and orderly evacuation in the event of a fire."
  },
  {
    id: 19,
    question: "What is the purpose of a fire department's public education program?",
    options: [
      "To educate the public about fire safety and prevention",
      "To recruit new firefighters",
      "To raise funds for the fire department",
      "To promote community relations"
    ],
    correctAnswer: 0,
    explanation: "A fire department's public education program aims to educate the public about fire safety and prevention, reducing the risk of fires and injuries in the community."
  },
  {
    id: 20,
    question: "What is the function of a fire suppression system in a commercial kitchen?",
    options: [
      "To automatically extinguish grease fires",
      "To provide ventilation during cooking operations",
      "To regulate temperature in the kitchen",
      "To monitor air quality in the kitchen"
    ],
    correctAnswer: 0,
    explanation: "A fire suppression system in a commercial kitchen is designed to automatically extinguish grease fires, preventing them from spreading and causing extensive damage."
  },
  {
    id: 21,
    question: "What is the purpose of a fire department's hazardous materials (HazMat) team?",
    options: [
      "To respond to incidents involving hazardous materials",
      "To provide medical assistance to injured victims",
      "To coordinate fire suppression efforts",
      "To enforce fire codes and regulations"
    ],
    correctAnswer: 0,
    explanation: "A fire department's hazardous materials (HazMat) team is trained and equipped to respond to incidents involving hazardous materials, mitigating the risks and protecting the environment and public health."
  },
  {
    id: 22,
    question: "What is the importance of conducting regular inspections of fire extinguishers?",
    options: [
      "To ensure they are properly charged and in good working condition",
      "To familiarize occupants with their location and operation",
      "To identify potential hazards and risks",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Regular inspections of fire extinguishers ensure they are properly charged and in good working condition, familiarize occupants with their location and operation, and identify potential hazards and risks."
  },
  {
    id: 23,
    question: "What is the role of a fire marshal?",
    options: [
      "To enforce fire codes and regulations",
      "To provide medical assistance to injured victims",
      "To coordinate fire suppression efforts",
      "To investigate the origin and cause of fires"
    ],
    correctAnswer: 0,
    explanation: "A fire marshal is responsible for enforcing fire codes and regulations, conducting inspections, and ensuring compliance with fire safety standards."
  },
  {
    id: 24,
    question: "What is the purpose of a fire department's community risk reduction program?",
    options: [
      "To identify and address the specific fire risks in a community",
      "To recruit new firefighters",
      "To raise funds for the fire department",
      "To promote community relations"
    ],
    correctAnswer: 0,
    explanation: "A fire department's community risk reduction program aims to identify and address the specific fire risks in a community, implementing strategies to reduce the likelihood and impact of fires."
  },
  {
    id: 25,
    question: "What is the function of a fire-resistant door?",
    options: [
      "To prevent the spread of fire and smoke",
      "To provide ventilation during a fire",
      "To regulate temperature in a building",
      "To monitor air quality in a building"
    ],
    correctAnswer: 0,
    explanation: "A fire-resistant door is designed to prevent the spread of fire and smoke, providing a barrier that can contain a fire and allow occupants to evacuate safely."
  },
  {
    id: 26,
    question: "What is the purpose of a fire department's emergency medical services (EMS) program?",
    options: [
      "To provide medical assistance to injured victims",
      "To coordinate fire suppression efforts",
      "To enforce fire codes and regulations",
      "To investigate the origin and cause of fires"
    ],
    correctAnswer: 0,
    explanation: "A fire department's emergency medical services (EMS) program provides medical assistance to injured victims, offering pre-hospital care and transportation to medical facilities."
  },
  {
    id: 27,
    question: "What is the importance of conducting regular maintenance on fire hydrants?",
    options: [
      "To ensure they are in good working condition and readily available for firefighting operations",
      "To regulate water pressure in a water distribution system",
      "To monitor water consumption in a community",
      "To test water quality in a water supply"
    ],
    correctAnswer: 0,
    explanation: "Regular maintenance on fire hydrants ensures they are in good working condition and readily available for firefighting operations, allowing firefighters to quickly access water to extinguish fires."
  },
  {
    id: 28,
    question: "What is the role of a fire safety inspector?",
    options: [
      "To conduct inspections of buildings and facilities to ensure compliance with fire codes",
      "To provide medical assistance to injured victims",
      "To coordinate fire suppression efforts",
      "To investigate the origin and cause of fires"
    ],
    correctAnswer: 0,
    explanation: "A fire safety inspector conducts inspections of buildings and facilities to ensure compliance with fire codes, identifying potential hazards and risks and enforcing fire safety standards."
  },
  {
    id: 29,
    question: "What is the purpose of a fire department's arson investigation unit?",
    options: [
      "To investigate the origin and cause of suspicious fires",
      "To provide medical assistance to injured victims",
      "To coordinate fire suppression efforts",
      "To enforce fire codes and regulations"
    ],
    correctAnswer: 0,
    explanation: "A fire department's arson investigation unit investigates the origin and cause of suspicious fires, gathering evidence and conducting interviews to determine if arson was involved."
  },
  {
    id: 30,
    question: "What is the function of a fire-rated wall?",
    options: [
      "To prevent the spread of fire and smoke",
      "To provide ventilation during a fire",
      "To regulate temperature in a building",
      "To monitor air quality in a building"
    ],
    correctAnswer: 0,
    explanation: "A fire-rated wall is designed to prevent the spread of fire and smoke, providing a barrier that can contain a fire and allow occupants to evacuate safely."
  },
  {
    id: 31,
    question: "What is the purpose of a fire department's technical rescue team?",
    options: [
      "To respond to specialized rescue incidents, such as high-angle rescues and confined space rescues",
      "To provide medical assistance to injured victims",
      "To coordinate fire suppression efforts",
      "To enforce fire codes and regulations"
    ],
    correctAnswer: 0,
    explanation: "A fire department's technical rescue team is trained and equipped to respond to specialized rescue incidents, such as high-angle rescues and confined space rescues, providing specialized skills and equipment to safely rescue victims."
  },
  {
    id: 32,
    question: "What is the importance of conducting regular training exercises for firefighters?",
    options: [
      "To maintain and improve their skills and knowledge",
      "To familiarize them with new equipment and techniques",
      "To promote teamwork and coordination",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Regular training exercises for firefighters maintain and improve their skills and knowledge, familiarize them with new equipment and techniques, and promote teamwork and coordination, ensuring they are prepared to respond effectively to emergencies."
  },
  {
    id: 33,
    question: "What is the role of a fire protection engineer?",
    options: [
      "To design and evaluate fire protection systems",
      "To provide medical assistance to injured victims",
      "To coordinate fire suppression efforts",
      "To enforce fire codes and regulations"
    ],
    correctAnswer: 0,
    explanation: "A fire protection engineer designs and evaluates fire protection systems, ensuring they meet the required standards and provide effective fire protection for buildings and facilities."
  },
  {
    id: 34,
    question: "What is the purpose of a fire department's swiftwater rescue team?",
    options: [
      "To respond to incidents involving water rescues in rivers, streams, and other bodies of water",
      "To provide medical assistance to injured victims",
      "To coordinate fire suppression efforts",
      "To enforce fire codes and regulations"
    ],
    correctAnswer: 0,
    explanation: "A fire department's swiftwater rescue team is trained and equipped to respond to incidents involving water rescues in rivers, streams, and other bodies of water, providing specialized skills and equipment to safely rescue victims."
  },
  {
    id: 35,
    question: "What is the function of a fire-rated ceiling?",
    options: [
      "To prevent the spread of fire and smoke",
      "To provide ventilation during a fire",
      "To regulate temperature in a building",
      "To monitor air quality in a building"
    ],
    correctAnswer: 0,
    explanation: "A fire-rated ceiling is designed to prevent the spread of fire and smoke, providing a barrier that can contain a fire and allow occupants to evacuate safely."
  },
  {
    id: 36,
    question: "What is the purpose of a fire department's urban search and rescue (USAR) team?",
    options: [
      "To respond to incidents involving structural collapses and other complex rescue scenarios",
      "To provide medical assistance to injured victims",
      "To coordinate fire suppression efforts",
      "To enforce fire codes and regulations"
    ],
    correctAnswer: 0,
    explanation: "A fire department's urban search and rescue (USAR) team is trained and equipped to respond to incidents involving structural collapses and other complex rescue scenarios, providing specialized skills and equipment to safely rescue victims."
  },
  {
    id: 37,
    question: "What is the importance of conducting regular inspections of fire protection systems?",
    options: [
      "To ensure they are in good working condition and ready to respond to a fire",
      "To familiarize occupants with their location and operation",
      "To identify potential hazards and risks",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Regular inspections of fire protection systems ensure they are in good working condition and ready to respond to a fire, familiarize occupants with their location and operation, and identify potential hazards and risks."
  },
  {
    id: 38,
    question: "What is the role of a fire safety educator?",
    options: [
      "To educate the public about fire safety and prevention",
      "To provide medical assistance to injured victims",
      "To coordinate fire suppression efforts",
      "To enforce fire codes and regulations"
    ],
    correctAnswer: 0,
    explanation: "A fire safety educator educates the public about fire safety and prevention, reducing the risk of fires and injuries in the community."
  },
  {
    id: 39,
    question: "What is the purpose of a fire department's wildland fire team?",
    options: [
      "To respond to incidents involving wildfires and brush fires",
      "To provide medical assistance to injured victims",
      "To coordinate fire suppression efforts",
      "To enforce fire codes and regulations"
    ],
    correctAnswer: 0,
    explanation: "A fire department's wildland fire team is trained and equipped to respond to incidents involving wildfires and brush fires, protecting lives, property, and natural resources."
  },
  {
    id: 40,
    question: "What is the function of a fire-rated floor?",
    options: [
      "To prevent the spread of fire and smoke",
      "To provide ventilation during a fire",
      "To regulate temperature in a building",
      "To monitor air quality in a building"
    ],
    correctAnswer: 0,
    explanation: "A fire-rated floor is designed to prevent the spread of fire and smoke, providing a barrier that can contain a fire and allow occupants to evacuate safely."
  },
  {
    id: 41,
    question: "What is the purpose of a fire department's dive rescue team?",
    options: [
      "To respond to incidents involving water rescues in lakes, rivers, and other bodies of water",
      "To provide medical assistance to injured victims",
      "To coordinate fire suppression efforts",
      "To enforce fire codes and regulations"
    ],
    correctAnswer: 0,
    explanation: "A fire department's dive rescue team is trained and equipped to respond to incidents involving water rescues in lakes, rivers, and other bodies of water, providing specialized skills and equipment to safely rescue victims."
  },
  {
    id: 42,
    question: "What is the importance of conducting regular inspections of fire apparatus?",
    options: [
      "To ensure they are in good working condition and ready to respond to emergencies",
      "To familiarize firefighters with their operation and maintenance",
      "To identify potential hazards and risks",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Regular inspections of fire apparatus ensure they are in good working condition and ready to respond to emergencies, familiarize firefighters with their operation and maintenance, and identify potential hazards and risks."
  },
  {
    id: 43,
    question: "What is the role of a fire safety consultant?",
    options: [
      "To provide expert advice on fire safety and prevention",
      "To provide medical assistance to injured victims",
      "To coordinate fire suppression efforts",
      "To enforce fire codes and regulations"
    ],
    correctAnswer: 0,
    explanation: "A fire safety consultant provides expert advice on fire safety and prevention, helping organizations and individuals to reduce the risk of fires and injuries."
  },
  {
    id: 44,
    question: "What is the purpose of a fire department's high-angle rescue team?",
    options: [
      "To respond to incidents involving rescues from elevated structures, such as buildings and cliffs",
      "To provide medical assistance to injured victims",
      "To coordinate fire suppression efforts",
      "To enforce fire codes and regulations"
    ],
    correctAnswer: 0,
    explanation: "A fire department's high-angle rescue team is trained and equipped to respond to incidents involving rescues from elevated structures, such as buildings and cliffs, providing specialized skills and equipment to safely rescue victims."
  },
  {
    id: 45,
    question: "What is the function of a fire-rated window?",
    options: [
      "To prevent the spread of fire and smoke",
      "To provide ventilation during a fire",
      "To regulate temperature in a building",
      "To monitor air quality in a building"
    ],
    correctAnswer: 0,
    explanation: "A fire-rated window is designed to prevent the spread of fire and smoke, providing a barrier that can contain a fire and allow occupants to evacuate safely."
  },
  {
    id: 46,
    question: "What is the purpose of a fire department's confined space rescue team?",
    options: [
      "To respond to incidents involving rescues from confined spaces, such as tanks and tunnels",
      "To provide medical assistance to injured victims",
      "To coordinate fire suppression efforts",
      "To enforce fire codes and regulations"
    ],
    correctAnswer: 0,
    explanation: "A fire department's confined space rescue team is trained and equipped to respond to incidents involving rescues from confined spaces, such as tanks and tunnels, providing specialized skills and equipment to safely rescue victims."
  },
  {
    id: 47,
    question: "What is the importance of conducting regular inspections of fire hoses?",
    options: [
      "To ensure they are in good working condition and ready to supply water to a fire",
      "To familiarize firefighters with their operation and maintenance",
      "To identify potential hazards and risks",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Regular inspections of fire hoses ensure they are in good working condition and ready to supply water to a fire, familiarize firefighters with their operation and maintenance, and identify potential hazards and risks."
  },
  {
    id: 48,
    question: "What is the role of a fire safety manager?",
    options: [
      "To oversee fire safety and prevention efforts in a building or facility",
      "To provide medical assistance to injured victims",
      "To coordinate fire suppression efforts",
      "To enforce fire codes and regulations"
    ],
    correctAnswer: 0,
    explanation: "A fire safety manager oversees fire safety and prevention efforts in a building or facility, ensuring compliance with fire codes and implementing strategies to reduce the risk of fires and injuries."
  },
  {
    id: 49,
    question: "What is the purpose of a fire department's trench rescue team?",
    options: [
      "To respond to incidents involving rescues from trenches and excavations",
      "To provide medical assistance to injured victims",
      "To coordinate fire suppression efforts",
      "To enforce fire codes and regulations"
    ],
    correctAnswer: 0,
    explanation: "A fire department's trench rescue team is trained and equipped to respond to incidents involving rescues from trenches and excavations, providing specialized skills and equipment to safely rescue victims."
  },
  {
    id: 50,
    question: "What is the function of a fire-rated door frame?",
    options: [
      "To prevent the spread of fire and smoke",
      "To provide ventilation during a fire",
      "To regulate temperature in a building",
      "To monitor air quality in a building"
    ],
    correctAnswer: 0,
    explanation: "A fire-rated door frame is designed to prevent the spread of fire and smoke, providing a barrier that can contain a fire and allow occupants to evacuate safely."
  },
  {
    id: 51,
    question: "What is the purpose of a fire department's collapse rescue team?",
    options: [
      "To respond to incidents involving structural collapses and other complex rescue scenarios",
      "To provide medical assistance to injured victims",
      "To coordinate fire suppression efforts",
      "To enforce fire codes and regulations"
    ],
    correctAnswer: 0,
    explanation: "A fire department's collapse rescue team is trained and equipped to respond to incidents involving structural collapses and other complex rescue scenarios, providing specialized skills and equipment to safely rescue victims."
  },
  {
    id: 52,
    question: "What is the importance of conducting regular inspections of fire sprinkler systems?",
    options: [
      "To ensure they are in good working condition and ready to suppress a fire",
      "To familiarize occupants with their location and operation",
      "To identify potential hazards and risks",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Regular inspections of fire sprinkler systems ensure they are in good working condition and ready to suppress a fire, familiarize occupants with their location and operation, and identify potential hazards and risks."
  },
  {
    id: 53,
    question: "What is the role of a fire safety trainer?",
    options: [
      "To provide training on fire safety and prevention",
      "To provide medical assistance to injured victims",
      "To coordinate fire suppression efforts",
      "To enforce fire codes and regulations"
    ],
    correctAnswer: 0,
    explanation: "A fire safety trainer provides training on fire safety and prevention, helping individuals and organizations to reduce the risk of fires and injuries."
  },
  {
    id: 54,
    question: "What is the purpose of a fire department's ice rescue team?",
    options: [
      "To respond to incidents involving rescues from ice-covered bodies of water",
      "To provide medical assistance to injured victims",
      "To coordinate fire suppression efforts",
      "To enforce fire codes and regulations"
    ],
    correctAnswer: 0,
    explanation: "A fire department's ice rescue team is trained and equipped to respond to incidents involving rescues from ice-covered bodies of water, providing specialized skills and equipment to safely rescue victims."
  },
  {
    id: 55,
    question: "What is the function of a fire-rated glazing?",
    options: [
      "To prevent the spread of fire and smoke",
      "To provide ventilation during a fire",
      "To regulate temperature in a building",
      "To monitor air quality in a building"
    ],
    correctAnswer: 0,
    explanation: "A fire-rated glazing is designed to prevent the spread of fire and smoke, providing a barrier that can contain a fire and allow occupants to evacuate safely."
  },
  {
    id: 56,
    question: "What is the purpose of a fire department's marine rescue team?",
    options: [
      "To respond to incidents involving rescues from boats and other watercraft",
      "To provide medical assistance to injured victims",
      "To coordinate fire suppression efforts",
      "To enforce fire codes and regulations"
    ],
    correctAnswer: 0,
    explanation: "A fire department's marine rescue team is trained and equipped to respond to incidents involving rescues from boats and other watercraft, providing specialized skills and equipment to safely rescue victims."
  },
  {
    id: 57,
    question: "What is the importance of conducting regular inspections of fire alarm systems?",
    options: [
      "To ensure they are in good working condition and ready to alert occupants to a fire",
      "To familiarize occupants with their location and operation",
      "To identify potential hazards and risks",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Regular inspections of fire alarm systems ensure they are in good working condition and ready to alert occupants to a fire, familiarize occupants with their location and operation, and identify potential hazards and risks."
  },
  {
    id: 58,
    question: "What is the role of a fire safety officer?",
    options: [
      "To oversee fire safety and prevention efforts in an organization",
      "To provide medical assistance to injured victims",
      "To coordinate fire suppression efforts",
      "To enforce fire codes and regulations"
    ],
    correctAnswer: 0,
    explanation: "A fire safety officer oversees fire safety and prevention efforts in an organization, ensuring compliance with fire codes and implementing strategies to reduce the risk of fires and injuries."
  },
  {
    id: 59,
    question: "What is the purpose of a fire department's mountain rescue team?",
    options: [
      "To respond to incidents involving rescues from mountains and other rugged terrain",
      "To provide medical assistance to injured victims",
      "To coordinate fire suppression efforts",
      "To enforce fire codes and regulations"
    ],
    correctAnswer: 0,
    explanation: "A fire department's mountain rescue team is trained and equipped to respond to incidents involving rescues from mountains and other rugged terrain, providing specialized skills and equipment to safely rescue victims."
  },
  {
    id: 60,
    question: "What is the function of a fire-rated damper?",
    options: [
      "To prevent the spread of fire and smoke through ductwork",
      "To provide ventilation during a fire",
      "To regulate temperature in a building",
      "To monitor air quality in a building"
    ],
    correctAnswer: 0,
    explanation: "A fire-rated damper is designed to prevent the spread of fire and smoke through ductwork, providing a barrier that can contain a fire and allow occupants to evacuate safely."
  },
  {
    id: 61,
    question: "What is the purpose of a fire department's cave rescue team?",
    options: [
      "To respond to incidents involving rescues from caves and other underground environments",
      "To provide medical assistance to injured victims",
      "To coordinate fire suppression efforts",
      "To enforce fire codes and regulations"
    ],
    correctAnswer: 0,
    explanation: "A fire department's cave rescue team is trained and equipped to respond to incidents involving rescues from caves and other underground environments, providing specialized skills and equipment to safely rescue victims."
  },
    {
    id: 62,
    question: "What is the importance of conducting regular inspections of fire suppression systems?",
    options: [
      "To ensure they are in good working condition and ready to suppress a fire",
      "To familiarize occupants with their location and operation",
      "To identify potential hazards and risks",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Regular inspections of fire suppression systems ensure they are in good working condition and ready to suppress a fire, familiarize occupants with their location and operation, and identify potential hazards and risks."
  },
  {
    id: 63,
    question: "What is the role of a fire safety engineer?",
    options: [
      "To design and evaluate fire protection systems",
      "To provide medical assistance to injured victims",
      "To coordinate fire suppression efforts",
      "To enforce fire codes and regulations"
    ],
    correctAnswer: 0,
    explanation: "A fire safety engineer designs and evaluates fire protection systems, ensuring they meet the required standards and provide effective fire protection for buildings and facilities."
  },
  {
    id: 64,
    question: "What is the purpose of a fire department's mine rescue team?",
    options: [
      "To respond to incidents involving rescues from mines and other underground environments",
      "To provide medical assistance to injured victims",
      "To
