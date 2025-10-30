// Data structures for ANRO Portal

const roleDescriptions = {
    // Departments
    "Administration Director": {
        description: "Oversees all administrative operations and strategic planning for ANRO",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
    "Training and Qualification": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
    "TQUAL Admin": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
    "TQUAL Officer": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
    "Senior Instructor": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
    "Instructor": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
    "Prob. Instructor": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
    "Logistics & Human Resources": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
    "Employee Engagement": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
    "ANRO Propaganda Official": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
    "ANRO Recruitment Official": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
    "ANRO Development Official": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
    "ANRO Lore Official": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
    "ANRO Minecraft Official": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
    "Evil dept. Voluntary member": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
    "NICE operator": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
    "Director of Research": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
    "Deputy Director of Research": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
    "ANRORD - Chief Researcher": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
    "ANRORD - Senior Researcher": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
    "ANRORD - Researcher": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
    "Plant Maintenance (Bot Developer)": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
    "Super Duper Research(ed) Department": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
    "Research(ed) Department": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
    "Team SCRAMed": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
    "Team Synced": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
    "Apollo": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "departments"
    },

    // Awards
    "Galaxy Sack": {
        description: "Prestigious award for exceptional service to ANRO",
        requirements: "Outstanding contribution + ANROCOM nomination",
        points: "N/A",
        category: "awards"
    },
    "Diamond Sack": {
        description: "High honor award for distinguished service",
        requirements: "Significant achievement + ANROCOM recommendation",
        points: "N/A",
        category: "awards"
    },
    "Film Commendation 1st Class": {
        description: "Top-tier recognition for media contributions",
        requirements: "",
        points: "N/A",
        category: "awards"
    },
    "Film Commendation 2nd Class": {
        description: "Recognition for quality media contributions",
        requirements: "",
        points: "N/A",
        category: "awards"
    },
    "Naramo Massacre": {
        description: "",
        requirements: "",
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
        description: "",
        requirements: "",
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
        requirements: "Send dx gamepass proof and get accepted",
        points: "N/A",
        category: "awards"
    },
    "V2 Naramo Raider": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "awards"
    },
    "Nice": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "awards"
    },
    "EVIL department": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "awards"
    },

    // Special Roles
    "ANROCOM": {
        description: "ANRO Command - highest leadership position",
        requirements: "",
        points: "N/A",
        category: "special"
    },
    "Server Administrator": {
        description: "Technical administrator with full server access",
        requirements: "",
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
        requirements: "",
        points: "N/A",
        category: "ranks"
    },
    "Chief Executive Officer": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "ranks"
    },
    "HR - HIGH RANK": {
        description: "",
        requirements: "",
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
        description: "",
        requirements: "",
        points: "N/A",
        category: "ranks"
    },
    "Lord Regent God-Emperor Copyright of the Thousand Suns and Million MRs": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "ranks"
    },
    "Professional Standards": {
        description: "",
        requirements: "",
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
        description: "",
        requirements: "",
        points: "N/A",
        category: "ranks"
    },
    "Faction Diplomat": {
        description: "Represents ANRO in diplomatic relations",
        requirements: "",
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
        requirements: "",
        points: "N/A",
        category: "ranks"
    },
    "Senior Reactor Operator": {
        description: "",
        requirements: "15+ shifts + supervisor certification",
        points: "N/A",
        category: "ranks"
    },
    "Nuclear Engineer": {
        description: "",
        requirements: "5 solo T3 shifts + 10+ shifts + emergency & grid cert + 75+ points",
        points: "75",
        category: "ranks"
    },
    "Reactor Operator": {
        description: "",
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
        description: "Volunteer for Nuclear Facility Security Force",
        requirements: "",
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
        description: "",
        requirements: "",
        points: "",
        category: "certifications"
    },
    "Spooky Certified": {
        description: "Specialized certification for spooky operations",
        requirements: "",
        points: "",
        category: "certifications"
    },
    "Supervisor Certified": {
        description: "",
        requirements: "",
        points: "",
        category: "certifications"
    },
    "Supervisor Eligible": {
        description: "",
        requirements: "",
        points: "",
        category: "certifications"
    },
    "Grid Certified": {
        description: "Certified to operate electrical grid systems",
        requirements: "",
        points: "",
        category: "certifications"
    },
    "Evil Certified": {
        description: "",
        requirements: "",
        points: "",
        category: "certifications"
    },
    "Emergency Certified": {
        description: "Qualified to handle emergency situations and procedures",
        requirements: "",
        points: "",
        category: "certifications"
    },
    "Turbine Certified": {
        description: "Certified to operate turbine systems",
        requirements: "",
        points: "",
        category: "certifications"
    },
    "Solo Certified": {
        description: "Qualified for independent solo operations",
        requirements: "",
        points: "",
        category: "certifications"
    },
    "Sleep Cert": {
        description: "",
        requirements: "",
        points: "",
        category: "certifications"
    }
};
