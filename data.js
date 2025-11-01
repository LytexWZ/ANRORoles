// Data structures for ANRO Portal

const roleDescriptions = {
    // Departments
    "Administration Director": {
        description: "Oversees all administrative operations and strategic planning for ANRO",
        requirements: "Handpicked by Site President",
        points: "N/A",
        category: "departments"
    },
    "Training and Qualification": {
        description: "ANRO personnel tasked with hosting orientations for new ANRO members and certifications for ANRO staff",
        requirements: "Reach MR + Apply to the specific department",
        points: "N/A",
        category: "departments"
    },
    "TQUAL Admin": {
        description: "Command Staff/HR appointed for the purpose of managing TQUAL",
        requirements: "Appointed by AD",
        points: "N/A",
        category: "departments"
    },
    "TQUAL Officer": {
        description: "Lower ranking administration position within TQUAL",
        requirements: "Appointed by AD or TQUAL Admin",
        points: "N/A",
        category: "departments"
    },
    "Senior Instructor": {
        description: "High rank instructor that hosts and orientations for new ANRO members",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
    "Instructor": {
        description: "ANRO personnel that hosts certifications and orientations for new ANRO members",
        requirements: "Finish the probationary phase of being an instructor",
        points: "N/A",
        category: "departments"
    },
    "Prob. Instructor": {
        description: "Recently joined instructor, tasked with certifications and orientations for new ANRO members",
        requirements: "Reach MR + Apply to the specific department",
        points: "N/A",
        category: "departments"
    },
    "Logistics & Human Resources": {
        description: "You paper push",
        requirements: "Reach MR + Apply to the specific department",
        points: "N/A",
        category: "departments"
    },
    "Employee Engagement": {
        description: "Employees that host gamenights to liven up ANRO's spirit",
        requirements: "Become an ANRO MR, then request to join this department",
        points: "N/A",
        category: "departments"
    },
    "ANRO Propaganda Official": {
        description: "Creators of propaganda materials in the form of artwork, videos, or anything of the sort.",
        requirements: "Under the subdivision channel, if the division is available, apply for it",
        points: "N/A",
        category: "departments"
    },
    "ANRO Recruitment Official": {
        description: "Oversees recruiting of potential ANRO members and recommend them to join ANRO",
        requirements: "Under the subdivision channel, if the division is available, apply for it",
        points: "N/A",
        category: "departments"
    },
    "ANRO Development Official": {
        description: "Responsible for working on the game used for orientations.",
        requirements: "Become a MR and wait for ANRD apps to arrive.",
        points: "N/A",
        category: "departments"
    },
    "ANRO Lore Official": {
        description: "Department regarding lore of ANRO",
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
        description: "Evil operators tasked with the destruction the plant.",
        requirements: "React to a message which will grant you this role",
        points: "N/A",
        category: "departments"
    },
    "NICE operator": {
        description: "You are very kind, help others.",
        requirements: "React to a message which will grant you this role.",
        points: "N/A",
        category: "departments"
    },
    "Director of Research": {
        description: "Highest authority of the subdepartment responsible for collecting data from the reactor for the creation of procedures and documentation",
        requirements: "Appointed by TQUAL Assistant Director",
        points: "N/A",
        category: "departments"
    },
    "Deputy Director of Research": {
        description: "Senior executive who supports and reports to the Director, acting as the second in command of the research department",
        requirements: "Appointed by Director of Research",
        points: "N/A",
        category: "departments"
    },
    "ANRORD - Chief Researcher": {
        description: "High rank inside the research department, tasked with the collection of data from the reactor for the creation of procedures and documentation",
        requirements: "Be MR and request promotion. (Hosting position)",
        points: "N/A",
        category: "departments"
    },
    "ANRORD - Senior Researcher": {
        description: "Middle rank inside the research department, tasked with the collection of data from the reactor for the creation of procedures and documentation",
        requirements: "Be active and contribute within the department",
        points: "N/A",
        category: "departments"
    },
    "ANRORD - Researcher": {
        description: "Low rank inside the research department, tasked with the collection of data from the reactor for the creation of procedures and documentation",
        requirements: "Under the subdivision channel, if the division is available, apply for it",
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
        description: "ITS JUST A JOKE, or is it?",
        requirements: "Given by MR's or HR's",
        points: "N/A",
        category: "departments"
    },
    "Research(ed) Department": {
        description: "Why are you so stupid?",
        requirements: "Do something stupid in ANRO till they have to research your brain",
        points: "N/A",
        category: "departments"
    },
    "Team SCRAMed": {
        description: "ANRO Games team",
        requirements: "Request to join the game",
        points: "N/A",
        category: "departments"
    },
    "Team Synced": {
        description: "ANRO Games team",
        requirements: "Request to join the game",
        points: "N/A",
        category: "departments"
    },
    "Apollo": {
        description: "Unknown",
        requirements: "Unknown",
        points: "N/A",
        category: "departments"
    },

    // Awards
    "Galaxy Sack": {
        description: "Prestigious award for exceptional service to ANRO",
        requirements: "Outstanding contribution + ANROCOM/HR nomination",
        points: "N/A",
        category: "awards"
    },
    "Diamond Sack": {
        description: "High honor award for distinguished service",
        requirements: "Significant achievement + ANROCOM/HR recommendation",
        points: "N/A",
        category: "awards"
    },
    "Film Commendation 1st Class": {
        description: "Awarded to those who allocated hours of their lives to render assistance to the ANRO training videos",
        requirements: "Contrubute by creating the intro’s, transitions, endings, and thumbnails for the training videos (No longer obtainable)",
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
        description: "Witness the mass murdering of fellow ROs, Rest in peace!",
        requirements: "Join a lore event regarding this event",
        points: "N/A",
        category: "awards"
    },
    "Victory Against 1NF Ribbon": {
        description: "Victory ribbon for successful operations against 1NF",
        requirements: "Participation in anti-1NF operation",
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
        description: "Pending approval for ANRODF tryouts",
        requirements: "Send DX-21 gamepass proof and get accepted",
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
        description: "Very nice.",
        requirements: "Be kind",
        points: "N/A",
        category: "awards"
    },
    "EVIL department": {
        description: "The department of EVIL...",
        requirements: "Request under the Enlistment thread under #officer-posting",
        points: "N/A",
        category: "awards"
    },

    // Special Roles
    "ANROCOM": {
        description: "ANRO Command - highest leadership position",
        requirements: "Handpicked",
        points: "N/A",
        category: "special"
    },
    "Server Administrator": {
        description: "Technical administrator with full server access",
        requirements: "Handpicked",
        points: "N/A",
        category: "special"
    },

    // Ranks
    "Site President": {
        description: "Highest executive position in ANRO",
        requirements: "Be Z3us",
        points: "N/A",
        category: "ranks"
    },
    "SUPER DUPER BEST HICOM AWARD": {
        description: "Special recognition for outstanding high command service",
        requirements: "Handpicked",
        points: "N/A",
        category: "ranks"
    },
    "Chief Executive Officer": {
        description: "No longer used.",
        requirements: "No longer used.",
        points: "N/A",
        category: "ranks"
    },
    "HR - HIGH RANK": {
        description: "HR for ANRO",
        requirements: "Be under a HR role",
        points: "N/A",
        category: "ranks"
    },
    "Operations Assistant": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "ranks"
    },
    "SIB": {
        description: "Diplomat role",
        requirements: "Be part of SIB",
        points: "N/A",
        category: "ranks"
    },
    "Lord Regent God-Emperor Copyright of the Thousand Suns and Million MRs": {
        description: "Role for Copy, an old Inspector General that retired",
        requirements: "No longer obtainable",
        points: "N/A",
        category: "ranks"
    },
    "Professional Standards": {
        description: "Unknown",
        requirements: "Unknown",
        points: "N/A",
        category: "ranks"
    },
    "Director of Reactor Operations": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "ranks"
    },
    "Inspector General": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "ranks"
    },
    "Assistant Director for Human Resources and Internal Affairs": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "ranks"
    },
    "Assistant Director for Logistics and Documentation": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "ranks"
    },
    "Assistant Director for Training, Qualification, and Research": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "ranks"
    },
    "Assistant Director for External Affairs and Employee Engagement": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "ranks"
    },
    "Assistant Director": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "ranks"
    },
    "Command Staff": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "ranks"
    },
    "John ANRO": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "ranks"
    },
    "Moderation Oversight": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "ranks"
    },
    "Federal Government": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "ranks"
    },
    "Most Memorable Retired HR": {
        description: "Honorary title for distinguished retired HR personnel",
        requirements: "Exceptional HR service + retirement status",
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
        requirements: "Former HR status + retirement status",
        points: "N/A",
        category: "ranks"
    },
    "BEST MR AWARD": {
        description: "Recognition for outstanding middle rank performance",
        requirements: "",
        points: "N/A",
        category: "ranks"
    },
    "MR - MIDDLE RANK": {
        description: "Middle management rank with operational responsibilities",
        requirements: "",
        points: "N/A",
        category: "ranks"
    },
    "Field Operations Inspector": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "ranks"
    },
    "Control Room Supervisor": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "ranks"
    },
    "Shift Supervisor": {
        description: "Supervises shift operations and crew management",
        requirements: "20+ shifts + supervisor application + 175+ points",
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
        description: "Represents ANRO in diplomatic relations",
        requirements: "Be a HR in any Naramo faction, eg, NFSF, NDC, 308th, and NES",
        points: "N/A",
        category: "ranks"
    },
    "Super duper cool donator people": {
        description: "Special recognition for generous donors",
        requirements: "Significant donation + community appreciation",
        points: "N/A",
        category: "ranks"
    },
    "Retired MR": {
        description: "Honorary title for retired middle rank personnel",
        requirements: "Former MR status + retirement status",
        points: "N/A",
        category: "ranks"
    },
    "Server Booster": {
        description: "Discord server booster with special privileges",
        requirements: "Active Discord server boost",
        points: "N/A",
        category: "ranks"
    },
    "LR - LOW RANK": {
        description: "Entry-level operational rank",
        requirements: "Basic training completion",
        points: "N/A",
        category: "ranks"
    },
    "Stratocratic Military Police": {
        description: "Military police with enforcement authority",
        requirements: "Be part of SMP, A diplomat role.",
        points: "N/A",
        category: "ranks"
    },
    "Senior Reactor Operator": {
        description: "Qualified reactor operator position",
        requirements: "15+ shifts + supervisor certification",
        points: "N/A",
        category: "ranks"
    },
    "Nuclear Engineer": {
        description: "Expierenced reactor operator position",
        requirements: "5 solo T3 shifts + 10+ shifts + emergency & grid cert + 75+ points",
        points: "75",
        category: "ranks"
    },
    "Reactor Operator": {
        description: "Intermediate reactor operator position",
        requirements: "25+ points + turbine & solo cert + 2+ shifts",
        points: "25",
        category: "ranks"
    },
    "Junior Reactor Operator": {
        description: "Entry-level reactor operator position",
        requirements: "Orientation exam completion",
        points: "0",
        category: "ranks"
    },
    "NFSF Volunteer": {
        description: "Security for orientations, have limited jurdisiction and have direct contact to IA & DC&E",
        requirements: "Be a NFSF member in NFSF",
        points: "N/A",
        category: "ranks"
    },
    "New Applicant": {
        description: "New member awaiting orientation and training",
        requirements: "Application acceptance",
        points: "0",
        category: "ranks"
    },
    "Mods": {
        description: "Moderation team member with enforcement powers",
        requirements: "",
        points: "N/A",
        category: "ranks"
    },

    // Certifications
    "Formation Certification": {
        description: "Be able to do wedges and faces",
        requirements: "No longer obtainable - Pass a formation test by burger (retired)",
        points: "",
        category: "certifications"
    },
    "Spooky Certified": {
        description: "Specialized certification for spooky operations",
        requirements: "Complete the SpOoOoOoky exam!",
        points: "",
        category: "certifications"
    },
    "Supervisor Certified": {
        description: "Able to supervise reactor operations - future Supervisor!",
        requirements: "Complete the supervisor exam.",
        points: "",
        category: "certifications"
    },
    "Supervisor Eligible": {
        description: "Able to do the supervisor exam",
        requirements: "Reach a certain rank (TBD) to get this role.",
        points: "",
        category: "certifications"
    },
    "Grid Certified": {
        description: "Certified to operate electrical grid systems",
        requirements: "Setup the grid, take an exam",
        points: "",
        category: "certifications"
    },
    "Evil Certified": {
        description: "Why are you so EVIL!",
        requirements: "Do something evil authorized by Z3usfury",
        points: "",
        category: "certifications"
    },
    "Emergency Certified": {
        description: "Qualified to handle emergency situations and procedures",
        requirements: "Perform a succesfull SCRAM test, then pass an exam",
        points: "",
        category: "certifications"
    },
    "Turbine Certified": {
        description: "Certified to operate turbine systems",
        requirements: "Sync a turbine successfuly",
        points: "",
        category: "certifications"
    },
    "Solo Certified": {
        description: "Qualified for independent solo operations",
        requirements: "Perform 3 solo T3s",
        points: "",
        category: "certifications"
    },
    "Sleep Cert": {
        description: "Sleep in call... for a long time...",
        requirements: "Sleep in a call for 24 hours",
        points: "",
        category: "certifications"
    }
};
