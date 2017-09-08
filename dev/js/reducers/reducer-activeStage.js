export default function(state = 'Home', action) {
    switch(action.type) {
        case "STAGE_SELECTED":
            return action.payload;
            break;

    }
    return state;
}

// case "BagClosingParts":
//     return action.payload;
//     break;
// case "DomesticMachine":
//     return action.payload;
//     break;
// case "DomesticParts":
//     return action.payload;
//     break;
// case "IndustrialMachine":
//     return action.payload;
//     break;
// case "IndustrialParts":
//     return action.payload;
//     break;
// case "KnittingNeedles":
//     return action.payload;
//     break;
// case "Sealer":
//     return action.payload;
//     break;
