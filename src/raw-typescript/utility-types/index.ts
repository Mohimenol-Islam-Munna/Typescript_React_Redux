// Exclude

type NominationList = "munna" | "urmi" | "nila" | "ifti" | "moni";

type SortList = "munna" | "ifti";

type RejectedList = Exclude<NominationList, SortList>;

let rejectedUser: RejectedList = "moni";


// Extract 

type NominationListTwo = "munna" | "urmi" | "nila" | "ifti" | "moni";

type SortListTwo = | "munna" | "k"; 

type RejectedListTwo = Extract<NominationListTwo, SortListTwo>;

let rejectedUserTwo: RejectedListTwo = "munna";