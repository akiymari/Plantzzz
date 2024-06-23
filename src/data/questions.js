const QUESTIONS = [
    // LASC 206_S2_Test 1 
    {
        "id": 1,
        "topic": "LASC 206_S2_Test 1",
        "question": "What is the common name for Acca sellowiana?",
        "answers": [
            "Feijoa", 
            "Japanese maple", 
            "Common horse chestnut", 
            "Agave"
        ],
        "correctAnswer": 0
    },
    {
        "id": 2,
        "topic": "LASC 206_S2_Test 1",
        "question": "Which plant is known as the Japanese maple?",
        "answers": [
            "Acca sellowiana", 
            "Acer palmatum", 
            "Aesculus hippocastanum", 
            "Agave sp."
        ],
        "correctAnswer": 1
    },
    {
        "id": 3,
        "topic": "LASC 206_S2_Test 1",
        "question": "What is the scientific name for the common horse chestnut?",
        "answers": [
            "Acca sellowiana", 
            "Acer palmatum", 
            "Aesculus hippocastanum", 
            "Agave sp."
        ],
        "correctAnswer": 2
    },
    {
        "id": 4,
        "topic": "LASC 206_S2_Test 1",
        "question": "Which plant is referred to as 'agave'?",
        "answers": [
            "Acca sellowiana", 
            "Acer palmatum", 
            "Aesculus hippocastanum", 
            "Agave sp."
        ],
        "correctAnswer": 3
    },
    // LASC 206_S2_Test 2 
    {
        "id": 5,
        "topic": "LASC 206_S2_Test 2",
        "question": "What is the common name for Anigozanthos flavidus?",
        "answers": [
            "Kangaroo paw", 
            "Strawberry tree", 
            "Winberry or makomako", 
            "Shining spleenwort"
        ],
        "correctAnswer": 0
    },
    {
        "id": 6,
        "topic": "LASC 206_S2_Test 2",
        "question": "Which plant is known as the strawberry tree?",
        "answers": [
            "Anigozanthos flavidus", 
            "Arbutus unedo", 
            "Aristotelia serrata", 
            "Asplenium oblongifolium"
        ],
        "correctAnswer": 1
    },
    {
        "id": 7,
        "topic": "LASC 206_S2_Test 2",
        "question": "What is the scientific name for the winberry or makomako?",
        "answers": [
            "Anigozanthos flavidus", 
            "Arbutus unedo", 
            "Aristotelia serrata", 
            "Asplenium oblongifolium"
        ],
        "correctAnswer": 2
    },
    {
        "id": 8,
        "topic": "LASC 206_S2_Test 2",
        "question": "Which plant is referred to as 'shining spleenwort'?",
        "answers": [
            "Anigozanthos flavidus", 
            "Arbutus unedo", 
            "Aristotelia serrata", 
            "Asplenium oblongifolium"
        ],
        "correctAnswer": 3
    },
    // LASC 211_S1_Test 1 
    {
        "id": 9,
        "topic": "LASC 211_S1_Test 1",
        "question": "What is the common name for Bergenia cordifolia?",
        "answers": [
            "Heart leaf bergenia", 
            "Kurrajong or bottletree", 
            "Box hedge", 
            "Bottle brush"
        ],
        "correctAnswer": 0
    },
    {
        "id": 10,
        "topic": "LASC 211_S1_Test 1",
        "question": "Which plant is known as the kurrajong or bottletree?",
        "answers": [
            "Bergenia cordifolia", 
            "Brachychiton populneus", 
            "Buxus sempervirens", 
            "Callistemon sp."
        ],
        "correctAnswer": 1
    },
    {
        "id": 11,
        "topic": "LASC 211_S1_Test 1",
        "question": "What is the scientific name for the box hedge?",
        "answers": [
            "Bergenia cordifolia", 
            "Brachychiton populneus", 
            "Buxus sempervirens", 
            "Callistemon sp."
        ],
        "correctAnswer": 2
    },
    {
        "id": 12,
        "topic": "LASC 211_S1_Test 1",
        "question": "Which plant is referred to as 'bottle brush'?",
        "answers": [
            "Bergenia cordifolia", 
            "Brachychiton populneus", 
            "Buxus sempervirens", 
            "Callistemon sp."
        ],
        "correctAnswer": 3
    },
    // LASC 211_S1_Test 2
    {
        "id": 13,
        "topic": "LASC 211_S1_Test 2",
        "question": "What is the common name for Clivia sp.?",
        "answers": [
            "Natal or bush lily", 
            "Common hazel", 
            "Ivy leaved cyclamen", 
            "Nepalese paper plant"
        ],
        "correctAnswer": 0
    },
    {
        "id": 14,
        "topic": "LASC 211_S1_Test 2",
        "question": "Which plant is known as the common hazel?",
        "answers": [
            "Clivia sp.", 
            "Corylus avellana", 
            "Cyclamen hederifolium", 
            "Daphne bholua"
        ],
        "correctAnswer": 1
    },
    {
        "id": 15,
        "topic": "LASC 211_S1_Test 2",
        "question": "What is the scientific name for the ivy leaved cyclamen?",
        "answers": [
            "Clivia sp.", 
            "Corylus avellana", 
            "Cyclamen hederifolium", 
            "Daphne bholua"
        ],
        "correctAnswer": 2
    },
    {
        "id": 16,
        "topic": "LASC 211_S1_Test 2",
        "question": "Which plant is referred to as 'Nepalese paper plant'?",
        "answers": [
            "Clivia sp.", 
            "Corylus avellana", 
            "Cyclamen hederifolium", 
            "Daphne bholua"
        ],
        "correctAnswer": 3
    },
    {
        "id": 17,
        "topic": "LASC 206_S2_Test 1",
        "question": "What is the common name for Daphne odora?",
        "answers": [
            "Winter daphne", 
            "Grevillea", 
            "Witch hazel", 
            "Oak leaf hydrangea"
        ],
        "correctAnswer": 0
    },
    {
        "id": 18,
        "topic": "LASC 206_S2_Test 1",
        "question": "Which plant is known as the grevillea?",
        "answers": [
            "Daphne odora", 
            "Grevillea banksii X bipinnatifida", 
            "Hamamelis mollis", 
            "Hydrangea quercifolia 'Pee Wee'"
        ],
        "correctAnswer": 1
    },
    {
        "id": 19,
        "topic": "LASC 206_S2_Test 1",
        "question": "What is the scientific name for the witch hazel?",
        "answers": [
            "Daphne odora", 
            "Grevillea banksii X bipinnatifida", 
            "Hamamelis mollis", 
            "Hydrangea quercifolia 'Pee Wee'"
        ],
        "correctAnswer": 2
    },
    {
        "id": 20,
        "topic": "LASC 206_S2_Test 1",
        "question": "Which plant is referred to as 'oak leaf hydrangea'?",
        "answers": [
            "Daphne odora", 
            "Grevillea banksii X bipinnatifida", 
            "Hamamelis mollis", 
            "Hydrangea quercifolia 'Pee Wee'"
        ],
        "correctAnswer": 3
    },
    {
        "id": 21,
        "topic": "LASC 206_S2_Test 2",
        "question": "What is the common name for Eucalyptus globulus?",
        "answers": [
            "Tasmanian blue gum", 
            "Red waratah", 
            "Rose of sharon", 
            "Swamp banksia"
        ],
        "correctAnswer": 0
    },
    {
        "id": 22,
        "topic": "LASC 206_S2_Test 2",
        "question": "Which plant is known as the red waratah?",
        "answers": [
            "Eucalyptus globulus", 
            "Telopea speciosissima", 
            "Hibiscus syriacus", 
            "Banksia robur"
        ],
        "correctAnswer": 1
    },
    {
        "id": 23,
        "topic": "LASC 206_S2_Test 2",
        "question": "What is the scientific name for the rose of sharon?",
        "answers": [
            "Eucalyptus globulus", 
            "Telopea speciosissima", 
            "Hibiscus syriacus", 
            "Banksia robur"
        ],
        "correctAnswer": 2
    },
    {
        "id": 24,
        "topic": "LASC 206_S2_Test 2",
        "question": "Which plant is referred to as 'swamp banksia'?",
        "answers": [
            "Eucalyptus globulus", 
            "Telopea speciosissima", 
            "Hibiscus syriacus", 
            "Banksia robur"
        ],
        "correctAnswer": 3
    },
    {
        "id": 25,
        "topic": "LASC 211_S1_Test 1",
        "question": "What is the common name for Lavandula angustifolia?",
        "answers": [
            "Lavender", 
            "Leucadendron", 
            "Lily pilly", 
            "Lily of the valley"
        ],
        "correctAnswer": 0
    },
    {
        "id": 26,
        "topic": "LASC 211_S1_Test 1",
        "question": "Which plant is known as the leucadendron?",
        "answers": [
            "Lavandula angustifolia", 
            "Leucadendron argenteum", 
            "Melaleuca linariifolia", 
            "Myrtus communis"
        ],
        "correctAnswer": 1
    },
    {
        "id": 27,
        "topic": "LASC 211_S1_Test 1",
        "question": "What is the scientific name for the lily pilly?",
        "answers": [
            "Lavandula angustifolia", 
            "Leucadendron argenteum", 
            "Melaleuca linariifolia", 
            "Myrtus communis"
        ],
        "correctAnswer": 2
    },
    {
        "id": 28,
        "topic": "LASC 211_S1_Test 1",
        "question": "Which plant is referred to as 'lily of the valley'?",
        "answers": [
            "Lavandula angustifolia", 
            "Leucadendron argenteum", 
            "Melaleuca linariifolia", 
            "Myrtus communis"
        ],
        "correctAnswer": 3
    },
    {
        "id": 29,
        "topic": "LASC 211_S1_Test 2",
        "question": "What is the common name for Nerium oleander?",
        "answers": [
            "Oleander", 
            "Pincushion flower", 
            "Pink rock rose", 
            "Pink wood sorrel"
        ],
        "correctAnswer": 0
    },
    {
        "id": 30,
        "topic": "LASC 211_S1_Test 2",
        "question": "Which plant is known as the pincushion flower?",
        "answers": [
            "Nerium oleander", 
            "Scabiosa columbaria", 
            "Helianthemum nummularium", 
            "Oxalis articulata"
        ],
        "correctAnswer": 1
    },
    {
        "id": 31,
        "topic": "LASC 211_S1_Test 2",
        "question": "What is the scientific name for the pink rock rose?",
        "answers": [
            "Nerium oleander", 
            "Scabiosa columbaria", 
            "Helianthemum nummularium", 
            "Oxalis articulata"
        ],
        "correctAnswer": 2
    },
    {
        "id": 32,
        "topic": "LASC 211_S1_Test 2",
        "question": "Which plant is referred to as 'pink wood sorrel'?",
        "answers": [
            "Nerium oleander", 
            "Scabiosa columbaria", 
            "Helianthemum nummularium", 
            "Oxalis articulata"
        ],
        "correctAnswer": 3
    },
    {
        "id": 33,
        "topic": "LASC 206_S2_Test 1",
        "question": "What is the common name for Osmanthus fragrans?",
        "answers": [
            "Sweet olive", 
            "Parrot tree", 
            "Port wine magnolia", 
            "Protea"
        ],
        "correctAnswer": 0
    },
    {
        "id": 34,
        "topic": "LASC 206_S2_Test 1",
        "question": "Which plant is known as the parrot tree?",
        "answers": [
            "Osmanthus fragrans", 
            "Psittacanthus angustifolius", 
            "Rhoicissus tomentosa", 
            "Sansevieria trifasciata"
        ],
        "correctAnswer": 1
    },
    {
        "id": 35,
        "topic": "LASC 206_S2_Test 1",
        "question": "What is the scientific name for the port wine magnolia?",
        "answers": [
            "Osmanthus fragrans", 
            "Psittacanthus angustifolius", 
            "Rhoicissus tomentosa", 
            "Sansevieria trifasciata"
        ],
        "correctAnswer": 2
    },
    {
        "id": 36,
        "topic": "LASC 206_S2_Test 1",
        "question": "Which plant is referred to as 'protea'?",
        "answers": [
            "Osmanthus fragrans", 
            "Psittacanthus angustifolius", 
            "Rhoicissus tomentosa", 
            "Sansevieria trifasciata"
        ],
        "correctAnswer": 3
    },
    {
        "id": 37,
        "topic": "LASC 211_S1_Test 2",
        "question": "What is the common name for Pelargonium peltatum?",
        "answers": [
            "Ivy geranium", 
            "Snowdrop", 
            "Sundew", 
            "Thrift"
        ],
        "correctAnswer": 0
    },
    {
        "id": 38,
        "topic": "LASC 211_S1_Test 2",
        "question": "Which plant is known as the snowdrop?",
        "answers": [
            "Pelargonium peltatum", 
            "Galanthus nivalis", 
            "Drosera rotundifolia", 
            "Armeria maritima"
        ],
        "correctAnswer": 1
    },
    {
        "id": 39,
        "topic": "LASC 211_S1_Test 2",
        "question": "What is the scientific name for the sundew?",
        "answers": [
            "Pelargonium peltatum", 
            "Galanthus nivalis", 
            "Drosera rotundifolia", 
            "Armeria maritima"
        ],
        "correctAnswer": 2
    },
    {
        "id": 40,
        "topic": "LASC 211_S1_Test 2",
        "question": "Which plant is referred to as 'thrift'?",
        "answers": [
            "Pelargonium peltatum", 
            "Galanthus nivalis", 
            "Drosera rotundifolia", 
            "Armeria maritima"
        ],
        "correctAnswer": 3
    },

    {
        "id": 41,
        "topic": "LASC 211_S1_Test 2",
        "question": "Which tree is commonly known as 'kauri'?",
        "answers": [
            "Agathis australis",
            "Apodasmia similis",
            "Camellia japonica",
            "Camellia sasanqua"
        ],
        "correctAnswer": 0
    },
    {
        "id": 42,
        "topic": "LASC 211_S1_Test 2",
        "question": "What is the common name for Clematis paniculata?",
        "answers": [
            "Puawhananga",
            "Kakabeak",
            "Mingimingi",
            "Red coprosma"
        ],
        "correctAnswer": 0
    },
    {
        "id": 43,
        "topic": "LASC 211_S1_Test 2",
        "question": "Which plant is known as 'Malborough rock daisy'?",
        "answers": [
            "Pachystegia insignis",
            "Helleborus orientalis",
            "Hydrangea macrophylla",
            "Hydrangea paniculata"
        ],
        "correctAnswer": 0
    },
    {
        "id": 44,
        "topic": "LASC 211_S1_Test 2",
        "question": "What is the common name for Podocarpus laetus?",
        "answers": [
            "Mountain or Hall's totara",
            "Snow or mountain totara",
            "Totara",
            "Matai"
        ],
        "correctAnswer": 0
    },
    {
        "id": 45,
        "topic": "LASC 211_S1_Test 2",
        "question": "Which plant is commonly known as 'horopito'?",
        "answers": [
            "Pseudowintera colorata",
            "Phyllocladus alpinus",
            "Phyllocladus trichomanoides",
            "Pittosporum tenuifolium 'Sumo'"
        ],
        "correctAnswer": 0
    },
    {
        "id": 46,
        "topic": "LASC 211_S1_Test 1",
        "question": "Which plant is known as the tickseed?",
        "answers": [
            "Senecio angulatus", 
            "Coreopsis lanceolata", 
            "Euphorbia dentata", 
            "Potentilla erecta"
        ],
        "correctAnswer": 1
    },
    {
        "id": 47,
        "topic": "LASC 211_S1_Test 1",
        "question": "What is the scientific name for the toothed spurge?",
        "answers": [
            "Senecio angulatus", 
            "Coreopsis lanceolata", 
            "Euphorbia dentata", 
            "Potentilla erecta"
        ],
        "correctAnswer": 2
    },
    {
        "id": 48,
        "topic": "LASC 211_S1_Test 1",
        "question": "Which plant is referred to as 'tormentil'?",
        "answers": [
            "Senecio angulatus", 
            "Coreopsis lanceolata", 
            "Euphorbia dentata", 
            "Potentilla erecta"
        ],
        "correctAnswer": 3
    },
    {
        "id": 49,
        "topic": "LASC 206_S2_Test 1",
        "question": "What is the common name for Verbascum thapsus?",
        "answers": [
            "Common mullein", 
            "Snowberry", 
            "Sea pink", 
            "Spring cinquefoil"
        ],
        "correctAnswer": 0
    },
    {
        "id": 50,
        "topic": "LASC 206_S2_Test 1",
        "question": "Which plant is known as the snowberry?",
        "answers": [
            "Verbascum thapsus", 
            "Symphoricarpos albus", 
            "Armeria maritima", 
            "Potentilla erecta"
        ],
        "correctAnswer": 1
    },
    {
        "id": 51,
        "topic": "LASC 206_S2_Test 1",
        "question": "What is the scientific name for the sea pink?",
        "answers": [
            "Verbascum thapsus", 
            "Symphoricarpos albus", 
            "Armeria maritima", 
            "Potentilla erecta"
        ],
        "correctAnswer": 2
    },
    {
        "id": 52,
        "topic": "LASC 206_S2_Test 1",
        "question": "Which plant is referred to as 'spring cinquefoil'?",
        "answers": [
            "Verbascum thapsus", 
            "Symphoricarpos albus", 
            "Armeria maritima", 
            "Potentilla erecta"
        ],
        "correctAnswer": 3
    },

    {
        "id": 53,
        "topic": "LASC 211_S1_Test 2",
        "question": "What is the common name for Viburnum tinus?",
        "answers": [
            "Laurustinus", 
            "Lavender", 
            "Lemon balm", 
            "Lesser periwinkle"
        ],
        "correctAnswer": 0
    },
    {
        "id": 54,
        "topic": "LASC 211_S1_Test 2",
        "question": "Which plant is known as the lavender?",
        "answers": [
            "Viburnum tinus", 
            "Lavandula angustifolia", 
            "Melaleuca linariifolia", 
            "Myrtus communis"
        ],
        "correctAnswer": 1
    },
    {
        "id": 55,
        "topic": "LASC 211_S1_Test 2",
        "question": "What is the scientific name for the lemon balm?",
        "answers": [
            "Viburnum tinus", 
            "Lavandula angustifolia", 
            "Melissa officinalis", 
            "Myrtus communis"
        ],
        "correctAnswer": 2
    },
    {
        "id": 56,
        "topic": "LASC 211_S1_Test 2",
        "question": "Which plant is referred to as 'lesser periwinkle'?",
        "answers": [
            "Viburnum tinus", 
            "Lavandula angustifolia", 
            "Melaleuca linariifolia", 
            "Vinca minor"
        ],
        "correctAnswer": 3
    },
  
    {
        "id": 57,
        "topic": "LASC 206_S2_Test 2",
        "question": "What is the common name for Wisteria sinensis?",
        "answers": [
            "Chinese wisteria", 
            "Cinquefoil", 
            "Coralberry", 
            "Cotton lavender"
        ],
        "correctAnswer": 0
    },
    {
        "id": 58,
        "topic": "LASC 206_S2_Test 2",
        "question": "Which plant is known as the cinquefoil?",
        "answers": [
            "Wisteria sinensis", 
            "Potentilla reptans", 
            "Symphoricarpos albus", 
            "Santolina chamaecyparissus"
        ],
        "correctAnswer": 1
    },
    {
        "id": 59,
        "topic": "LASC 206_S2_Test 2",
        "question": "What is the scientific name for the coralberry?",
        "answers": [
            "Wisteria sinensis", 
            "Potentilla reptans", 
            "Symphoricarpos orbiculatus", 
            "Santolina chamaecyparissus"
        ],
        "correctAnswer": 2
    },
    {
        "id": 60,
        "topic": "LASC 206_S2_Test 2",
        "question": "Which plant is referred to as 'cotton lavender'?",
        "answers": [
            "Wisteria sinensis", 
            "Potentilla reptans", 
            "Symphoricarpos albus", 
            "Santolina chamaecyparissus"
        ],
        "correctAnswer": 3
    },
    {
        "id": 61,
        "topic": "LASC 206_S2_Test 1",
        "question": "What is the common name for Caltha palustris?",
        "answers": [
            "Marsh marigold", 
            "Meadow rue", 
            "Milkweed", 
            "Mistflower"
        ],
        "correctAnswer": 0
    },
    {
        "id": 62,
        "topic": "LASC 206_S2_Test 1",
        "question": "Which plant is known as the meadow rue?",
        "answers": [
            "Caltha palustris", 
            "Thalictrum aquilegiifolium", 
            "Asclepias tuberosa", 
            "Conoclinium coelestinum"
        ],
        "correctAnswer": 1
    },
    {
        "id": 63,
        "topic": "LASC 206_S2_Test 1",
        "question": "What is the scientific name for the milkweed?",
        "answers": [
            "Caltha palustris", 
            "Thalictrum aquilegiifolium", 
            "Asclepias tuberosa", 
            "Conoclinium coelestinum"
        ],
        "correctAnswer": 2
    },
    {
        "id": 64,
        "topic": "LASC 206_S2_Test 1",
        "question": "Which plant is referred to as 'mistflower'?",
        "answers": [
            "Caltha palustris", 
            "Thalictrum aquilegiifolium", 
            "Asclepias tuberosa", 
            "Conoclinium coelestinum"
        ],
        "correctAnswer": 3
    },
  
    {
        "id": 65,
        "topic": "LASC 211_S1_Test 1",
        "question": "What is the common name for Vinca major?",
        "answers": [
            "Greater periwinkle", 
            "Snowdrop", 
            "Spurge", 
            "Speedwell"
        ],
        "correctAnswer": 0
    },
    {
        "id": 66,
        "topic": "LASC 211_S1_Test 1",
        "question": "Which plant is known as the snowdrop?",
        "answers": [
            "Vinca major", 
            "Galanthus nivalis", 
            "Euphorbia helioscopia", 
            "Veronica chamaedrys"
        ],
        "correctAnswer": 1
    },
    {
        "id": 67,
        "topic": "LASC 211_S1_Test 1",
        "question": "What is the scientific name for the spurge?",
        "answers": [
            "Vinca major", 
            "Galanthus nivalis", 
            "Euphorbia helioscopia", 
            "Veronica chamaedrys"
        ],
        "correctAnswer": 2
    },
    {
        "id": 68,
        "topic": "LASC 211_S1_Test 1",
        "question": "Which plant is referred to as 'speedwell'?",
        "answers": [
            "Vinca major", 
            "Galanthus nivalis", 
            "Euphrasia officinalis", 
            "Veronica officinalis"
        ],
        "correctAnswer": 3
    },
 
    {
        "id": 69,
        "topic": "LASC 206_S2_Test 2",
        "question": "What is the common name for Ligustrum vulgare?",
        "answers": [
            "Common privet", 
            "Cinquefoil", 
            "Coralberry", 
            "Cotton lavender"
        ],
        "correctAnswer": 0
    },
    {
        "id": 70,
        "topic": "LASC 206_S2_Test 2",
        "question": "Which plant is known as the cinquefoil?",
        "answers": [
            "Ligustrum vulgare", 
            "Potentilla reptans", 
            "Symphoricarpos albus", 
            "Santolina chamaecyparissus"
        ],
        "correctAnswer": 1
    },
    {
        "id": 71,
        "topic": "LASC 206_S2_Test 2",
        "question": "What is the scientific name for the coralberry?",
        "answers": [
            "Ligustrum vulgare", 
            "Potentilla reptans", 
            "Symphoricarpos orbiculatus", 
            "Santolina chamaecyparissus"
        ],
        "correctAnswer": 2
    },
    {
        "id": 72,
        "topic": "LASC 206_S2_Test 2",
        "question": "Which plant is referred to as 'cotton lavender'?",
        "answers": [
            "Ligustrum vulgare", 
            "Potentilla reptans", 
            "Symphoricarpos albus", 
            "Santolina chamaecyparissus"
        ],
        "correctAnswer": 3
    },

    {
        "id": 73,
        "topic": "LASC 211_S1_Test 2",
        "question": "What is the common name for Laurus nobilis?",
        "answers": [
            "Bay laurel", 
            "Butterfly weed", 
            "Blazing star", 
            "Bluebell"
        ],
        "correctAnswer": 0
    },
    {
        "id": 74,
        "topic": "LASC 211_S1_Test 2",
        "question": "Which plant is known as the butterfly weed?",
        "answers": [
            "Laurus nobilis", 
            "Asclepias tuberosa", 
            "Liatris spicata", 
            "Hyacinthoides non-scripta"
        ],
        "correctAnswer": 1
    },
    {
        "id": 75,
        "topic": "LASC 211_S1_Test 2",
        "question": "What is the scientific name for the blazing star?",
        "answers": [
            "Laurus nobilis", 
            "Asclepias tuberosa", 
            "Liatris spicata", 
            "Hyacinthoides non-scripta"
        ],
        "correctAnswer": 2
    },
    {
        "id": 76,
        "topic": "LASC 211_S1_Test 2",
        "question": "Which plant is referred to as 'bluebell'?",
        "answers": [
            "Laurus nobilis", 
            "Asclepias tuberosa", 
            "Liatris spicata", 
            "Hyacinthoides non-scripta"
        ],
        "correctAnswer": 3
    },
    {
    "id": 77,
    "topic": "LASC 206_S2_Test 1",
    "question": "Which plant is commonly known as the 'Blanket Flower'?",
    "answers": [
        "Gaillardia",
        "Digitalis purpurea",
        "Echinacea purpurea",
        "Coreopsis"
    ],
    "correctAnswer": 0
},
{
    "id": 78,
    "topic": "LASC 206_S2_Test 1",
    "question": "What is the scientific name for 'Foxglove'?",
    "answers": [
        "Gaillardia",
        "Digitalis purpurea",
        "Echinacea purpurea",
        "Coreopsis"
    ],
    "correctAnswer": 1
    },
    {
    "id": 79,
    "topic": "LASC 206_S2_Test 1",
    "question": "Which plant is known as the 'Purple Coneflower'?",
    "answers": [
        "Gaillardia",
        "Digitalis purpurea",
        "Echinacea purpurea",
        "Coreopsis"
    ],
    "correctAnswer": 2
},
{
    "id": 80,
    "topic": "LASC 206_S2_Test 1",
    "question": "What is the common name for 'Tickseed'?",
    "answers": [
        "Gaillardia",
        "Digitalis purpurea",
        "Echinacea purpurea",
        "Coreopsis"
    ],
    "correctAnswer": 3
},

{
    "id": 81,
    "topic": "LASC 206_S2_Test 2",
    "question": "Which plant is commonly known as 'titoki'?",
    "answers": [
        "Alectryon excelsus",
        "Azara microphylla",
        "Coprosma repens",
        "Eucalyptus viminalis"
    ],
    "correctAnswer": 0
},
{
    "id": 82,
    "topic": "LASC 206_S2_Test 2",
    "question": "What is the common name for Aucuba japonica?",
    "answers": [
        "Spotted or Japanese laurel",
        "Vanilla tree",
        "Coastal banksia",
        "NZ daisy bush"
    ],
    "correctAnswer": 0
},
{
    "id": 83,
    "topic": "LASC 206_S2_Test 2",
    "question": "Which tree is also known as 'vanilla tree'?",
    "answers": [
        "Azara microphylla",
        "Banksia integrifolia",
        "Carmichaelia williamsii",
        "Carpinus betulus"
    ],
    "correctAnswer": 0
},
{
    "id": 84,
    "topic": "LASC 206_S2_Test 2",
    "question": "What is the common name for Banksia integrifolia?",
    "answers": [
        "Coastal banksia",
        "European hornbeam",
        "Moutain daisy",
        "Confetti bush"
    ],
    "correctAnswer": 0
},
{
    "id": 85,
    "topic": "LASC 211_S1_Test 1",
    "question": "Which New Zealand plant is known as the 'Chatham Islands astelia'?",
    "answers": [
        "Astelia chathamica",
        "Brachyglottis monroi",
        "Melicytus alpinus",
        "Pittosporum tenuifolium"
    ],
    "correctAnswer": 0
},
{
    "id": 86,
    "topic": "LASC 211_S1_Test 1",
    "question": "Which plant is commonly referred to as 'mountain beech'?",
    "answers": [
        "Fuscospora cliffortioides",
        "Pittosporum crassifolium",
        "Sophora microphylla",
        "Libertia peregrinans"
    ],
    "correctAnswer": 0
},
{
    "id": 87,
    "topic": "LASC 211_S1_Test 1",
    "question": "What is the common name for Kunzea ericoides?",
    "answers": [
        "Kanuka",
        "Silver tussock",
        "Mountain lacebark",
        "NZ daisy bush"
    ],
    "correctAnswer": 0
},
{
    "id": 88,
    "topic": "LASC 211_S1_Test 1",
    "question": "Which tree is also known as the 'American sweetgum'?",
    "answers": [
        "Liquidambar styraciflua",
        "Fraxinus excelsior",
        "Ginkgo biloba",
        "Liriodendron tulipifera"
    ],
    "correctAnswer": 0
},
{
    "id": 89,
    "topic": "LASC 211_S1_Test 1",
    "question": "Which plant species is nicknamed 'porcupine scrub'?",
    "answers": [
        "Melicytus alpinus",
        "Olearia cheesemanii",
        "Muehlenbeckia axillaris",
        "Pseudopanax crassifolius"
    ],
    "correctAnswer": 0
},
{
    "id": 90,
    "topic": "LASC 211_S1_Test 1",
    "question": "What is the common name for Platanus x acerifolia?",
    "answers": [
        "London plane",
        "English oak",
        "Pin oak",
        "Yoshino cherry"
    ],
    "correctAnswer": 0
},
{
    "id": 91,
    "topic": "LASC 211_S1_Test 1",
    "question": "Which New Zealand plant is known as the 'lowland ribbonwood'?",
    "answers": [
        "Plagianthus regius",
        "Hoheria lyallii",
        "Dacrydium cupressinum",
        "Discaria toumatou"
    ],
    "correctAnswer": 0
},
{
    "id": 92,
    "topic": "LASC 211_S1_Test 1",
    "question": "Which tree is commonly called 'karaka' or 'NZ laurel'?",
    "answers": [
        "Corynocarpus laevigatus",
        "Pittosporum eugenioides",
        "Prunus x yedoensis",
        "Solanum laciniatum"
    ],
    "correctAnswer": 0
},
{
    "id": 93,
    "topic": "LASC 211_S1_Test 1",
    "question": "What is the common name for Cordyline australis?",
    "answers": [
        "Cabbage tree",
        "Wind grass",
        "South Island toe toe",
        "Monro's daisy"
    ],
    "correctAnswer": 0
},
{
    "id": 94,
    "topic": "LASC 206_S2_Test 2",
    "question": "Which New Zealand plant is known as 'shrubby tororaro'?",
    "answers": [
        "Muehlenbeckia astonii",
        "Myoporum laetum",
        "Olea europaea",
        "Phebalium squameum"
    ],
    "correctAnswer": 0
},
{
    "id": 95,
    "topic": "LASC 206_S2_Test 2",
    "question": "What is the common name for Myosotidium hortensia?",
    "answers": [
        "Chatham Island forget me not",
        "Basket grass",
        "Twiggy tree daisy",
        "Photinia"
    ],
    "correctAnswer": 0
},
{
    "id": 96,
    "topic": "LASC 206_S2_Test 2",
    "question": "Which tree is known as 'variegated elm'?",
    "answers": [
        "Ulmus carpinifolia 'Variegata'",
        "Teucridium parvifolium",
        "Large leaved hebe",
        "Topiary hebe"
    ],
    "correctAnswer": 0
},
{
    "id": 97,
    "topic": "LASC 206_S2_Test 2",
    "question": "What is the common name for Teucridium parvifolium?",
    "answers": [
        "Teucridium",
        "Lime tree",
        "Large leaved hebe",
        "Topiary hebe"
    ],
    "correctAnswer": 0
},
{
    "id": 98,
    "topic": "LASC 206_S2_Test 2",
    "question": "Which plant is commonly known as 'laurustinus'?",
    "answers": [
        "Viburnum tinus",
        "Teucridium parvifolium",
        "Large leaved hebe",
        "Topiary hebe"
    ],
    "correctAnswer": 0
},
{
    "id": 99,
    "topic": "LASC 206_S2_Test 1",
    "question": "What is the common name for Pittosporum tenuifolium?",
    "answers": [
        "Kohuhu or black matipo",
        "Poroporo",
        "South Island kowhai",
        "NZ daisy bush"
    ],
    "correctAnswer": 0
},
{
    "id": 100,
    "topic": "LASC 211_S1_Test 1",
    "question": "What is the common name for Veronica hulkeana?",
    "answers": [
        "Wind grass",
        "Chatham Islands astelia",
        "Monro's daisy",
        "New Zealand lilac",
    ],
    "correctAnswer": 3
},

];

export default QUESTIONS;

