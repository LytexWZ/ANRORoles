//Data
const roleDescriptions = {
    // Departments
    "ANROSOC": { // WIP
        description: "The topfraggers of ANRO.",
        requirements: "Get noticed doing very well by a higher up during a DT/CT.",
        points: "N/A",
        category: "departments"
    },
    "Administration Director": {
        description: "Oversees all administrative operations and strategic planning for ANRO",
        requirements: "Handpicked by Site President",
        points: "N/A",
        category: "departments"
    },
    "Training and Qualification": {
        description: "ANRO personnel tasked with hosting orientations for new ANRO members and certifications for ANRO staff",
        requirements: "Reach MR + Apply to TQUAL",
        points: "N/A",
        category: "departments"
    },
    "TQUAL Admin": {
        description: "Command Staff/HR appointed for the purpose of managing TQUAL",
        requirements: "Appointed by the Assistant Director for Training and Qualification",
        points: "N/A",
        category: "departments"
    },
    "TQUAL Officer": {
        description: "Lower ranking Training & Qualification team member",
        requirements: "Appointed by AD or TQUAL Admin",
        points: "N/A",
        category: "departments"
    },
    "Senior Instructor": {
        description: "High rank instructor that hosts orientations for new ANRO members",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
    "Instructor": {
        description: "ANRO personnel that host certifications and orientations for new ANRO members",
        requirements: "Finish the probationary phase of being an instructor",
        points: "N/A",
        category: "departments"
    },
    "Prob. Instructor": {
        description: "Recently joined instructor, tasked with certifications and orientations for new ANRO members",
        requirements: "Reach MR + Apply to TQUAL",
        points: "N/A",
        category: "departments"
    },
    "RLA Certified": { // WIP
        description: "",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
    "Logistics & Human Resources": {
        description: "Paper pushers of ANRO.",
        requirements: "Reach MR + Apply to Logistics & Human Resources",
        points: "N/A",
        category: "departments"
    },
    "Employee Engagement": {
        description: "Employees that host gamenights to liven up ANRO's spirit",
        requirements: "Reach MR + Apply to Employee Engagement",
        points: "N/A",
        category: "departments"
    },
    "ANRO Ribbon Maker": { // WIP
        description: "LHR members that make ribbons.",
        requirements: "Be LHR, MR+ & unknown.",
        points: "N/A",
        category: "departments"
    },
    "IU | Head of Investigation Operations": { // WIP
        description: "The lead of IU.",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
    "IU | Operations Inspector": { // WIP
        description: "Second highest IU rank.",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
    "IU | Investigator": { // WIP
        description: "Base IU rank.",
        requirements: "Pass the IU application in #subdivision-entry",
        points: "N/A",
        category: "departments"
    },
    "ANRO Propaganda Official": {
        description: "Creators of propaganda materials in the form of artwork, videos, or anything of the sort.",
        requirements: "Apply to join Propaganda in #subdivision-entry",
        points: "N/A",
        category: "departments"
    },
    "ANRO Recruitment Official": {
        description: "Department which assists with recruiting new members to ANRO. Anyone can still recruit.",
        requirements: "Apply to join ANRORS in #subdivision-entry",
        points: "N/A",
        category: "departments"
    },
    "ANRO Development Official": {
        description: "Responsible for working on the ANRO multicenter, ANRO's game for orientation.",
        requirements: "Become an MR and wait for ANRD apps to arrive.",
        points: "N/A",
        category: "departments"
    },
    "ANRO Lore Official": {
        description: "Department which creates the lore of ANRO and hosts lore events for ANRO.",
        requirements: "Apply and pass specific apps.",
        points: "N/A",
        category: "departments"
    },
    "ANRO Minecraft Official": {
        description: "Department handling the Minecraft server of ANRO",
        requirements: "Unknown",
        points: "N/A",
        category: "departments"
    },
    "Evil dept. Voluntary member": {
        description: "Evil operators tasked with destruction of the plant!",
        requirements: "Request for Evil Department in the thread titled 'Enlistment' found in #officer-posting.",
        points: "N/A",
        category: "departments"
    },
    "NICE operator": {
        description: "You are very kind!",
        requirements: "Request for Nice Operator in the thread titled 'Enlistment' found in #officer-posting.",
        points: "N/A",
        category: "departments"
    },
    "Director of Research & Development": {
        description: "Highest authority of the subdepartment ANRO R&D responsible for collecting data from the reactor for the creation of procedures and documentation",
        requirements: "Appointed by TQUAL Assistant Director",
        points: "N/A",
        category: "departments"
    },
    "Dep. Director of Research & Development": {
        description: "Senior executive who supports and reports to the Director of Research, acting as the second in command of the Research Department",
        requirements: "Appointed by Director of Research",
        points: "N/A",
        category: "departments"
    },
    "ANRO R&D - Chief Researcher": {
        description: "High rank inside the Research Department, tasked with hosting research sessions for R&D to research during.",
        requirements: "Be MR and request promotion. (Hosting position)",
        points: "N/A",
        category: "departments"
    },
    "ANRO R&D - Senior Researcher": {
        description: "Middle rank inside the Research Department, tasked with the collection of data from the reactor for the creation of procedures and documentation",
        requirements: "Be active and contribute within the department",
        points: "N/A",
        category: "departments"
    },
    "ANRO R&D - Researcher": {
        description: "Low rank inside the research department, tasked with the collection of data from the reactor for the creation of procedures and documentation",
        requirements: "Apply to join ANRO R&D in #subdivision-entry",
        points: "N/A",
        category: "departments"
    },
    "Plant Maintenance (Bot Developer)": {
        description: "Developer for the John Clanker bot",
        requirements: "Unknown",
        points: "N/A",
        category: "departments"
    },
    "Super Duper Research(ed) Department": {
        description: "IT'S JUST A JOKE, or is it?",
        requirements: "Given to people who do stupid things by MR/HR",
        points: "N/A",
        category: "departments"
    },
    "Research(ed) Department": {
        description: "Given to people who do stupid things as a PUNISHMENT.",
        requirements: "Be stupid. You do NOT want this role.",
        points: "N/A",
        category: "departments"
    },
    "Team SCRAMed": {
        description: "ANRO Games team",
        requirements: "Request to join the ANRO Games",
        points: "N/A",
        category: "departments"
    },
    "Team Synced": {
        description: "ANRO Games team",
        requirements: "Request to join the ANRO Games",
        points: "N/A",
        category: "departments"
    },

    // Awards
    "Quantum Sack": { // WIP
        description: "",
        requirements: "",
        points: "N/A",
        category: "awards"
    },
    "Galaxy Sack": {
        description: "Prestigious award for exceptional service to ANRO",
        requirements: "Outstanding contribution + ANROCOM/HR nomination",
        points: "N/A",
        category: "awards"
    },
    "Diamond Sack": {
        description: "High honor award for distinguished service",
        requirements: "Significant contribution + ANROCOM/HR nomination",
        points: "N/A",
        category: "awards"
    },
    "Film Commendation 1st Class": {
        description: "Awarded to those who allocated hours of their lives to render assistance to the ANRO training videos",
        requirements: "Contribute by creating the intros, transitions, endings, and thumbnails for the training videos (No longer obtainable)",
        points: "N/A",
        category: "awards"
    },
    "Film Commendation 2nd Class": {
        description: "Awarded to those who contributed to the ANRO training videos",
        requirements: "Assisted with filming and/or acting for the training videos (No longer obtainable)",
        points: "N/A",
        category: "awards"
    },
    "Naramo Massacre": {
        description: "Witness the mass murdering of fellow ROs. Rest in peace!",
        requirements: "Awarded for attending a lore event. No longer obtainable",
        points: "N/A",
        category: "awards"
    },
    "Victory Against 1NF Ribbon": {
        description: "Victory ribbon for members of the raid against 1NF, which ANRO won.",
        requirements: "Attended the raid between ANRO and 1NF as ANRO. No longer obtainable",
        points: "N/A",
        category: "awards"
    },
    "The Last Stand": {
        description: "Fought till your last breath for the plant",
        requirements: "No longer obtainable",
        points: "N/A",
        category: "awards"
    },
    "ANRODF Service Ribbon": {
        description: "Service ribbon for ANRO Defense Force members",
        requirements: "Active ANRODF service",
        points: "N/A",
        category: "awards"
    },
    "Pending ANRODF": {
        description: "ANRO members verified to have a DX-21. Allowed to attend ANRODF tryouts.",
        requirements: "Send DX-21 ownership proof and get accepted in #ANRODF-signup",
        points: "N/A",
        category: "awards"
    },
    "V2 Naramo Raider": {
        description: "Be on the WN team during the V2 Beta test with developers.",
        requirements: "No longer obtainable",
        points: "N/A",
        category: "awards"
    },
    "Nice": {
        description: "Very nice. Given to IWantACopyrighStrike for being the 69th nurse in GSMC.",
        requirements: "Unobtainable",
        points: "N/A",
        category: "awards"
    },
    "EVIL department": {
        description: "The department of EVIL...",
        requirements: "Apply to Evil Department when applications were out. Unobtainable?",
        points: "N/A",
        category: "awards"
    },

    // Special Roles
    "ANROCOM": {
        description: "ANRO Command, given to the people in charge of running ANRO.",
        requirements: "Handpicked by ANROCOM",
        points: "N/A",
        category: "special"
    },
    "Server Administrator": {
        description: "Technical administrator with full server access",
        requirements: "Given by ANROCOM to extremely high-ranking and trusted members of ANRO",
        points: "N/A",
        category: "special"
    },

    // Ranks
    "Site President": {
        description: "Highest executive position in ANRO. Leader and owner of ANRO.",
        requirements: "Be doop931",
        points: "N/A",
        category: "ranks"
    },
    "SUPER DUPER BEST HICOM AWARD": {
        description: "Special recognition for outstanding high command service",
        requirements: "Handpicked",
        points: "N/A",
        category: "ranks"
    },
    "THE BEST OM AWARD": { // WIP
        description: "",
        requirements: "",
        points: "N/A",
        category: "ranks"
    },
    "HR - HIGH RANK": {
        description: "High Rank members of ANRO. Command Staff+",
        requirements: "Handpicked by ANROCOM, promoted from MR.",
        points: "N/A",
        category: "ranks"
    },
    "Operations Assistant": {
        description: "Bots of ANRO's Discord.",
        requirements: "Be a Discord bot.",
        points: "N/A",
        category: "ranks"
    },
    "Professional Standards": {
        description: "Individuals selected by the Site President that ANROCOM misconduct should be reported to",
        requirements: "Handpicked",
        points: "N/A",
        category: "ranks"
    },
    "Director of Reactor Operations": {
        description: "Member of ANROCOM, oversees all operations and departments within ANRO",
        requirements: "Handpicked by ANROCOM",
        points: "N/A",
        category: "ranks"
    },
    "Acting Director": { // WIP
        description: "",
        requirements: "",
        points: "N/A",
        category: "ranks"
    },
    "Inspector General": {
        description: "Member of ANROCOM, oversees all operations and departments within ANRO. In charge of MRs.",
        requirements: "Handpicked by ANROCOM",
        points: "N/A",
        category: "ranks"
    },
    "Assistant Director for Human Resources and Internal Affairs": {
        description: "Member of ANROCOM, oversees the department of Internal Affairs.",
        requirements: "Handpicked by ANROCOM. Be active within IA.",
        points: "N/A",
        category: "ranks"
    },
    "Assistant Director for Logistics and Documentation": {
        description: "Member of ANROCOM, oversees the department of Logistics and Human Resources.",
        requirements: "Handpicked by ANROCOM. Be active within LHR.",
        points: "N/A",
        category: "ranks"
    },
    "Assistant Director for Training, Qualification, and Research": {
        description: "Member of ANROCOM, oversees the department of TQUAL.",
        requirements: "Handpicked by ANROCOM. Be active within TQUAL.",
        points: "N/A",
        category: "ranks"
    },
    "Assistant Director for External Affairs and Employee Engagement": {
        description: "Member of ANROCOM, oversees the department of Employee Engagement",
        requirements: "Handpicked by ANROCOM. Be active within EE.",
        points: "N/A",
        category: "ranks"
    },
    "Assistant Director": {
        description: "Role given to the Assistant Directors of ANRO's main departments.",
        requirements: "Be picked by ANROCOM for an Assistant Director position.",
        points: "N/A",
        category: "ranks"
    },
    "Command Staff": {
        description: "Assisting in administrative work in their respective department.",
        requirements: "Handpicked by ANROCOM when deemed necessary",
        points: "N/A",
        category: "ranks"
    },
    "ANROCOM Clerk": { // WIP
        description: "",
        requirements: "",
        points: "N/A",
        category: ""
    },
    "John ANRO": {
        description: "Role for previous HR John ANRO, known for his dedication and love for ANRO.",
        requirements: "Unobtainable.",
        points: "N/A",
        category: "ranks"
    },
    "Moderation Oversight": {
        description: "Oversight of the Moderation team.",
        requirements: "",
        points: "N/A",
        category: "ranks"
    },
    "Facton Oversight": { // WIP
        description: "",
        requirements: "",
        points: "N/A",
        category: "ranks"
    },
    "Federal Government": {
        description: "Role given to Naramo Devs and select Game Staff",
        requirements: "Be a member of 8NEC and request the role",
        points: "N/A",
        category: "ranks"
    },
    "Naramo Moderator": { // WIP
        description: "",
        requirements: "",
        points: "N/A",
        category: "ranks"
    },
    "Most Memorable Retired HR": {
        description: "Honorary title for distinguished retired HR personnel",
        requirements: "Be voted Most Memorable Retired HR",
        points: "N/A",
        category: "ranks"
    },
    "Retired ANROCOM": {
        description: "Honorary title for retired ANROCOM members",
        requirements: "Former ANROCOM status + honorable service",
        points: "N/A",
        category: "ranks"
    },
    "Retired HR": {
        description: "Honorary title for retired HR personnel",
        requirements: "Former HR status + currently retired",
        points: "N/A",
        category: "ranks"
    },
    "BEST MR AWARD": {
        description: "Recognition for outstanding middle rank performance",
        requirements: "Given to whoever is voted best MR.",
        points: "N/A",
        category: "ranks"
    },
    "MR - MIDDLE RANK": {
        description: "Middle management rank with operational responsibilities",
        requirements: "Pass an SU application after reaching SRO.",
        points: "N/A",
        category: "ranks"
    },
    "Field Operations Inspector": {
        description: "Senior MR rank.",
        requirements: "",
        points: "N/A",
        category: "ranks"
    },
    "Control Room Supervisor": {
        description: "Middle MR rank.",
        requirements: "",
        points: "N/A",
        category: "ranks"
    },
    "Shift Supervisor": {
        description: "Supervises shift operations and crew management",
        requirements: "20+ Shifts + Supervisor Application + 175+ Points + passed probationary phase",
        points: "175",
        category: "ranks"
    },
    "Junior Shift Supervisor": {
        description: "Probationary SU",
        requirements: "Pass the MR exam",
        points: "N/A",
        category: "ranks"
    },
    "Faction Diplomat": {
        description: "High ranking members of other Naramo factions. These people represent their factions within ANRO.",
        requirements: "Be an HR in any other Naramo faction, NFSF, NDC, 308th, and NES",
        points: "N/A",
        category: "ranks"
    },
    "super duper cool orange role": { // WIP
        description: "",
        requirements: "",
        points: "N/A",
        category: "ranks"
    },
    "Super duper cool donator people": {
        description: "Special recognition for generous donors",
        requirements: "Donation to NS charity event. Unobtainable",
        points: "N/A",
        category: "ranks"
    },
    "Retired MR": {
        description: "Honorary title for retired middle rank personnel",
        requirements: "Former MR status + retirement status",
        points: "N/A",
        category: "ranks"
    },
    "BEST LR AWARD": { // WIP
        description: "",
        requirements: "",
        points: "N/A",
        category: "ranks"
    },
    "Server Booster": {
        description: "Discord server booster. Special name color and role.",
        requirements: "Active Discord server boost",
        points: "N/A",
        category: "ranks"
    },
    "LR - LOW RANK": {
        description: "Entry-level operational rank. Contains most of ANRO",
        requirements: "Pass an orientation into ANRO becoming a JRO.",
        points: "N/A",
        category: "ranks"
    },
    "Noobic Military Police": {
        description: "Military Police which assist with moderating Naramo.",
        requirements: "Get accepted into NMP",
        points: "N/A",
        category: "ranks"
    },
    "Senior Reactor Operator": {
        description: "Senior LR position. Requires all main certifications.",
        requirements: "15+ shifts + Supervisor Certification",
        points: "N/A",
        category: "ranks"
    },
    "Nuclear Engineer": {
        description: "Experienced LR position.",
        requirements: "5 solo T3 shifts + 10+ shifts + emergency & grid cert + 75+ points",
        points: "75",
        category: "ranks"
    },
    "Reactor Operator": {
        description: "Intermediate LR position, capable of operating the reactor alone.",
        requirements: "Minimum of 25 points + Turbine & Solo Certifications + 2+ Shifts",
        points: "25",
        category: "ranks"
    },
    "Junior Reactor Operator": {
        description: "Entry-level LR position, with minimal experience.",
        requirements: "Orientation exam completion",
        points: "0",
        category: "ranks"
    },
    "NFSF Volunteer": {
        description: "Security for orientations, have limited jurisdiction and have direct contact with IA & DC&E",
        requirements: "Be an NFSF member",
        points: "N/A",
        category: "ranks"
    },
    "New Applicant": {
        description: "New member awaiting orientation and training",
        requirements: "Join the ANRO Discord server",
        points: "N/A",
        category: "ranks"
    },
    "Mods": {
        description: "Moderation team (IA department), deals with all reports of misconduct within ANRO",
        requirements: "Application & passing probationary phase",
        points: "N/A",
        category: "ranks"
    },

    // Certifications
    "Formation Certification": {
        description: "Be able to do wedges and faces",
        requirements: "Pass a Formation Certification hosted by Burger (retired) or Robloxer.",
        points: "N/A",
        category: "certifications"
    },
    "Spooky Certified": {
        description: "Specialized certification for spooky operations. Operates the SpOoOoOoky grid during Halloween!",
        requirements: "Complete the SpOoOoOoky exam!",
        points: "N/A",
        category: "certifications"
    },
    "Supervisor Certified": {
        description: "Able to occupy supervisor positions in ANRO and during shifts. Required for promotion to SRO.",
        requirements: "Complete the Supervisor Exam + Cohost all 4 main Certifications and a Shift",
        points: "N/A",
        category: "certifications"
    },
    "Supervisor Eligible": {
        description: "Able to cohost shifts and take the Supervisor Certification exam when ready.",
        requirements: "Nuclear Engineer rank + 100 points + Emergency, Turbine, Solo, and Grid certifications + Not a member of RD (HR can make exception)",
        points: "100",
        category: "certifications"
    },
    "Grid Certified": {
        description: "Certified to operate electrical grid systems",
        requirements: "Pass the Grid Certification exam during a Grid Certification session.",
        points: "N/A",
        category: "certifications"
    },
    "Evil Certified": {
        description: "You are super EVIL..",
        requirements: "Attend an Evil Certification. These are rarely hosted.",
        points: "N/A",
        category: "certifications"
    },
    "Emergency Certified": {
        description: "Qualified to handle emergency situations and procedures",
        requirements: "Perform a successful SCRAM test, then pass an exam",
        points: "N/A",
        category: "certifications"
    },
    "Turbine Certified": {
        description: "Certified to operate turbine systems",
        requirements: "Sync a turbine successfully during a Turbine Certification session.",
        points: "N/A",
        category: "certifications"
    },
    "Solo Certified": {
        description: "Qualified for independent solo operations",
        requirements: "Perform 3 solo T3s",
        points: "N/A",
        category: "certifications"
    },
    "Sleep Cert": {
        description: "Sleep in call... for a long time...",
        requirements: "Sleep in a call for 24 hours",
        points: "N/A",
        category: "certifications"
    }
};
