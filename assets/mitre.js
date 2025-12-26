// MITRE ATT&CK reference map
// Expand as needed for reporting or automation

const MITRE_ATTACK = {
  RECONNAISSANCE: [
    "T1590", // Gather Victim Network Information
    "T1595", // Active Scanning
    "T1593"  // Search Open Websites/Domains
  ],

  INITIAL_ACCESS: [
    "T1190", // Exploit Public-Facing Application
    "T1566"  // Phishing (if ever enabled)
  ],

  EXECUTION: [
    "T1059"  // Command and Scripting Interpreter
  ],

  PRIVILEGE_ESCALATION: [
    "T1068"  // Exploitation for Privilege Escalation
  ],

  CREDENTIAL_ACCESS: [
    "T1003", // OS Credential Dumping
    "T1110"  // Brute Force
  ],

  LATERAL_MOVEMENT: [
    "T1021", // Remote Services
    "T1090"  // Proxy
  ],

  COMMAND_AND_CONTROL: [
    "T1095", // Non-Application Layer Protocol
    "T1071"  // Application Layer Protocol
  ],

  DEFENSE_EVASION: [
    "T1036"  // Masquerading
  ]
};
