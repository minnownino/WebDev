////////////////////////////////////
///// data for svg configuration ///
////////////////////////////////////
var margin = {top: 20, right: 30, bottom: 30, left: 30},
    margin2 = {top: 430, right: 10, bottom: 20, left: 40},
    width = 1200 - margin.left - margin.right,
    height = 500; //- margin.top - margin.bottom;
    //height = height / 3;
    height2 = 500 - margin2.top - margin2.bottom;
    height2 = height2 / 3;

/////////////////////////////
/////// data ///////////////
///////////////////////////

var barWidth = 15,
    barOffset = 5;

//var tp53 = {"0": [0, 0, 0], "1": [95, 95, 100], "2": [245, 245, 251], "3": [104, 104, 106], "4": [129, 129, 131], "5": [66, 66, 71], "6": [316, 317, 320], "7": [17, 17, 17], "8": [4, 4, 4], "9": [41, 41, 43], "10": [186, 186, 189], "11": [108, 108, 111], "12": [269, 273, 275], "13": [44, 44, 77], "14": [57, 57, 57], "15": [80, 80, 83], "16": [41, 41, 41]};
var tp53 = {"0": [0, 0, 0],
 "1": [37, 43, 43],
 "2": [283, 315, 315],
 "3": [47, 47, 47],
 "4": [11, 38, 38],
 "5": [19, 23, 23],
 "6": [83, 165, 165],
 "7": [12, 20, 20],
 "8": [2, 2, 2],
 "9": [2, 4, 4],
 "10": [22, 23, 23],
 "11": [14, 79, 79],
 "12": [1, 63, 63],
 "13": [11, 23, 23],
 "14": [8, 8, 8],
 "15": [29, 35, 35],
 "16": [99, 105, 105]};

var degs = [{"result_gene_name":"KIF20A","cancer_type_id":1,"count":97},{"result_gene_name":"MELK","cancer_type_id":1,"count":96},{"result_gene_name":"CENPF","cancer_type_id":1,"count":96},{"result_gene_name":"KIF18B","cancer_type_id":1,"count":96},{"result_gene_name":"ADH1B","cancer_type_id":1,"count":95},{"result_gene_name":"CCL14","cancer_type_id":1,"count":95},{"result_gene_name":"DEPDC1","cancer_type_id":1,"count":94},{"result_gene_name":"CDC45","cancer_type_id":1,"count":94},{"result_gene_name":"EXO1","cancer_type_id":1,"count":94},{"result_gene_name":"TTK","cancer_type_id":1,"count":94},{"result_gene_name":"KIF20A","cancer_type_id":2,"count":271},{"result_gene_name":"MELK","cancer_type_id":2,"count":267},{"result_gene_name":"ACACB","cancer_type_id":2,"count":267},{"result_gene_name":"DEPDC1","cancer_type_id":2,"count":267},{"result_gene_name":"PDE2A","cancer_type_id":2,"count":266},{"result_gene_name":"SMYD1","cancer_type_id":2,"count":266},{"result_gene_name":"ASPM","cancer_type_id":2,"count":264},{"result_gene_name":"CDC20","cancer_type_id":2,"count":264},{"result_gene_name":"TPX2","cancer_type_id":2,"count":263},{"result_gene_name":"CCL14","cancer_type_id":2,"count":263},{"result_gene_name":"MTHFD1L","cancer_type_id":3,"count":106},{"result_gene_name":"NR3C2","cancer_type_id":3,"count":104},{"result_gene_name":"ASPA","cancer_type_id":3,"count":100},{"result_gene_name":"ADH1B","cancer_type_id":3,"count":100},{"result_gene_name":"MAL","cancer_type_id":3,"count":99},{"result_gene_name":"HBB","cancer_type_id":3,"count":97},{"result_gene_name":"COL7A1","cancer_type_id":3,"count":96},{"result_gene_name":"CCL14","cancer_type_id":3,"count":95},{"result_gene_name":"APOBEC3A","cancer_type_id":3,"count":94},{"result_gene_name":"HMGCS2","cancer_type_id":3,"count":94},{"result_gene_name":"UBE2T","cancer_type_id":4,"count":130},{"result_gene_name":"CDC20","cancer_type_id":4,"count":124},{"result_gene_name":"TPX2","cancer_type_id":4,"count":124},{"result_gene_name":"RCC1","cancer_type_id":4,"count":122},{"result_gene_name":"MAL","cancer_type_id":4,"count":119},{"result_gene_name":"CKS1B","cancer_type_id":4,"count":116},{"result_gene_name":"SLC26A9","cancer_type_id":4,"count":115},{"result_gene_name":"CENPF","cancer_type_id":4,"count":114},{"result_gene_name":"GPR133","cancer_type_id":4,"count":114},{"result_gene_name":"RNASEH2A","cancer_type_id":4,"count":114},{"result_gene_name":"EPB49","cancer_type_id":5,"count":69},{"result_gene_name":"SH3GL3","cancer_type_id":5,"count":69},{"result_gene_name":"NUF2","cancer_type_id":5,"count":69},{"result_gene_name":"PBK","cancer_type_id":5,"count":69},{"result_gene_name":"SSTR1","cancer_type_id":5,"count":68},{"result_gene_name":"PTPRR","cancer_type_id":5,"count":68},{"result_gene_name":"C1orf115","cancer_type_id":5,"count":68},{"result_gene_name":"F2R","cancer_type_id":5,"count":68},{"result_gene_name":"BUB1","cancer_type_id":5,"count":68},{"result_gene_name":"PDE2A","cancer_type_id":5,"count":67},{"result_gene_name":"MAL","cancer_type_id":6,"count":311},{"result_gene_name":"RORC","cancer_type_id":6,"count":292},{"result_gene_name":"SELENBP1","cancer_type_id":6,"count":292},{"result_gene_name":"DMBT1","cancer_type_id":6,"count":291},{"result_gene_name":"HMGA2","cancer_type_id":6,"count":290},{"result_gene_name":"AIM2","cancer_type_id":6,"count":286},{"result_gene_name":"NR3C2","cancer_type_id":6,"count":286},{"result_gene_name":"EDN3","cancer_type_id":6,"count":281},{"result_gene_name":"SERPINE1","cancer_type_id":6,"count":280},{"result_gene_name":"GPD1L","cancer_type_id":6,"count":275},{"result_gene_name":"TPX2","cancer_type_id":7,"count":17},{"result_gene_name":"KLRG2","cancer_type_id":7,"count":17},{"result_gene_name":"NXPH4","cancer_type_id":7,"count":17},{"result_gene_name":"ANLN","cancer_type_id":7,"count":16},{"result_gene_name":"SUSD4","cancer_type_id":7,"count":16},{"result_gene_name":"ADH1B","cancer_type_id":7,"count":16},{"result_gene_name":"NR3C2","cancer_type_id":7,"count":16},{"result_gene_name":"MSLN","cancer_type_id":7,"count":16},{"result_gene_name":"C7","cancer_type_id":7,"count":15},{"result_gene_name":"C2orf40","cancer_type_id":7,"count":15},{"result_gene_name":"SELENBP1","cancer_type_id":8,"count":7},{"result_gene_name":"PDE2A","cancer_type_id":8,"count":7},{"result_gene_name":"ITPR1","cancer_type_id":8,"count":7},{"result_gene_name":"SPOCK2","cancer_type_id":8,"count":7},{"result_gene_name":"NR3C2","cancer_type_id":8,"count":7},{"result_gene_name":"C2orf40","cancer_type_id":8,"count":7},{"result_gene_name":"PTTG1","cancer_type_id":8,"count":6},{"result_gene_name":"UCHL1","cancer_type_id":8,"count":6},{"result_gene_name":"CTSL2","cancer_type_id":8,"count":6},{"result_gene_name":"SLC38A5","cancer_type_id":8,"count":6},{"result_gene_name":"PTTG1","cancer_type_id":9,"count":44},{"result_gene_name":"CDC20","cancer_type_id":9,"count":43},{"result_gene_name":"UBE2T","cancer_type_id":9,"count":43},{"result_gene_name":"MYBL2","cancer_type_id":9,"count":43},{"result_gene_name":"CXCL14","cancer_type_id":9,"count":42},{"result_gene_name":"CCL14","cancer_type_id":9,"count":42},{"result_gene_name":"ASPM","cancer_type_id":9,"count":42},{"result_gene_name":"CCNB2","cancer_type_id":9,"count":40},{"result_gene_name":"CENPF","cancer_type_id":9,"count":40},{"result_gene_name":"FANCD2","cancer_type_id":9,"count":40},{"result_gene_name":"KIF20A","cancer_type_id":10,"count":185},{"result_gene_name":"SH3GL3","cancer_type_id":10,"count":184},{"result_gene_name":"UBE2T","cancer_type_id":10,"count":183},{"result_gene_name":"ASPM","cancer_type_id":10,"count":181},{"result_gene_name":"HBB","cancer_type_id":10,"count":181},{"result_gene_name":"TPX2","cancer_type_id":10,"count":181},{"result_gene_name":"MELK","cancer_type_id":10,"count":179},{"result_gene_name":"CENPF","cancer_type_id":10,"count":177},{"result_gene_name":"CCNB2","cancer_type_id":10,"count":176},{"result_gene_name":"COL10A1","cancer_type_id":10,"count":176},{"result_gene_name":"DEPDC1","cancer_type_id":11,"count":109},{"result_gene_name":"UBE2T","cancer_type_id":11,"count":109},{"result_gene_name":"KIF20A","cancer_type_id":11,"count":109},{"result_gene_name":"SELENBP1","cancer_type_id":11,"count":109},{"result_gene_name":"KIF14","cancer_type_id":11,"count":109},{"result_gene_name":"ASPM","cancer_type_id":11,"count":109},{"result_gene_name":"KIF18B","cancer_type_id":11,"count":109},{"result_gene_name":"EXO1","cancer_type_id":11,"count":108},{"result_gene_name":"AOC3","cancer_type_id":11,"count":108},{"result_gene_name":"CENPF","cancer_type_id":11,"count":108},{"result_gene_name":"NUF2","cancer_type_id":12,"count":261},{"result_gene_name":"MELK","cancer_type_id":12,"count":260},{"result_gene_name":"AGBL2","cancer_type_id":12,"count":252},{"result_gene_name":"BUB1","cancer_type_id":12,"count":251},{"result_gene_name":"NMU","cancer_type_id":12,"count":251},{"result_gene_name":"DEPDC1","cancer_type_id":12,"count":250},{"result_gene_name":"CNN1","cancer_type_id":12,"count":246},{"result_gene_name":"SPATA18","cancer_type_id":12,"count":239},{"result_gene_name":"CENPF","cancer_type_id":12,"count":238},{"result_gene_name":"TPX2","cancer_type_id":12,"count":234},{"result_gene_name":"NRG2","cancer_type_id":13,"count":57},{"result_gene_name":"DUOX2","cancer_type_id":13,"count":56},{"result_gene_name":"ASPA","cancer_type_id":13,"count":56},{"result_gene_name":"GDF10","cancer_type_id":13,"count":55},{"result_gene_name":"MLC1","cancer_type_id":13,"count":55},{"result_gene_name":"HOXD13","cancer_type_id":13,"count":55},{"result_gene_name":"MSLN","cancer_type_id":13,"count":54},{"result_gene_name":"PENK","cancer_type_id":13,"count":54},{"result_gene_name":"MAL","cancer_type_id":13,"count":53},{"result_gene_name":"TMEM132A","cancer_type_id":13,"count":52},{"result_gene_name":"ASPA","cancer_type_id":14,"count":60},{"result_gene_name":"CCL14","cancer_type_id":14,"count":58},{"result_gene_name":"NNAT","cancer_type_id":14,"count":58},{"result_gene_name":"NRG2","cancer_type_id":14,"count":58},{"result_gene_name":"ROR1","cancer_type_id":14,"count":57},{"result_gene_name":"MAL","cancer_type_id":14,"count":57},{"result_gene_name":"PLEKHG4","cancer_type_id":14,"count":57},{"result_gene_name":"PDE2A","cancer_type_id":14,"count":57},{"result_gene_name":"ADH1B","cancer_type_id":14,"count":56},{"result_gene_name":"NR3C2","cancer_type_id":14,"count":56},{"result_gene_name":"MAL","cancer_type_id":15,"count":83},{"result_gene_name":"TPX2","cancer_type_id":15,"count":75},{"result_gene_name":"UBE2T","cancer_type_id":15,"count":70},{"result_gene_name":"HBB","cancer_type_id":15,"count":70},{"result_gene_name":"DMBT1","cancer_type_id":15,"count":69},{"result_gene_name":"SPARC","cancer_type_id":15,"count":69},{"result_gene_name":"COL18A1","cancer_type_id":15,"count":67},{"result_gene_name":"SST","cancer_type_id":15,"count":66},{"result_gene_name":"TTYH3","cancer_type_id":15,"count":65},{"result_gene_name":"ANXA10","cancer_type_id":15,"count":64},{"result_gene_name":"MELK","cancer_type_id":16,"count":45},{"result_gene_name":"KIF18B","cancer_type_id":16,"count":45},{"result_gene_name":"CENPF","cancer_type_id":16,"count":45},{"result_gene_name":"ASPM","cancer_type_id":16,"count":45},{"result_gene_name":"KIF20A","cancer_type_id":16,"count":45},{"result_gene_name":"E2F2","cancer_type_id":16,"count":45},{"result_gene_name":"TACC3","cancer_type_id":16,"count":44},{"result_gene_name":"CTSL2","cancer_type_id":16,"count":44},{"result_gene_name":"UBE2T","cancer_type_id":16,"count":44},{"result_gene_name":"CDC45","cancer_type_id":16,"count":44}];
//var degs = [{"result_gene_name":"KIF20A","cancer_type_id":1,"count":97},{"result_gene_name":"CENPF","cancer_type_id":1,"count":96},{"result_gene_name":"KIF18B","cancer_type_id":1,"count":96},{"result_gene_name":"MELK","cancer_type_id":1,"count":96},{"result_gene_name":"ADH1B","cancer_type_id":1,"count":95},{"result_gene_name":"CCL14","cancer_type_id":1,"count":95},{"result_gene_name":"CDC45","cancer_type_id":1,"count":94},{"result_gene_name":"DEPDC1","cancer_type_id":1,"count":94},{"result_gene_name":"EXO1","cancer_type_id":1,"count":94},{"result_gene_name":"TTK","cancer_type_id":1,"count":94},{"result_gene_name":"KIF20A","cancer_type_id":2,"count":271},{"result_gene_name":"MELK","cancer_type_id":2,"count":267},{"result_gene_name":"ACACB","cancer_type_id":2,"count":267},{"result_gene_name":"DEPDC1","cancer_type_id":2,"count":267},{"result_gene_name":"SMYD1","cancer_type_id":2,"count":266},{"result_gene_name":"PDE2A","cancer_type_id":2,"count":266},{"result_gene_name":"ASPM","cancer_type_id":2,"count":264},{"result_gene_name":"CDC20","cancer_type_id":2,"count":264},{"result_gene_name":"LEPR","cancer_type_id":2,"count":263},{"result_gene_name":"TPX2","cancer_type_id":2,"count":263},{"result_gene_name":"MTHFD1L","cancer_type_id":3,"count":106},{"result_gene_name":"NR3C2","cancer_type_id":3,"count":104},{"result_gene_name":"ASPA","cancer_type_id":3,"count":100},{"result_gene_name":"ADH1B","cancer_type_id":3,"count":100},{"result_gene_name":"MAL","cancer_type_id":3,"count":99},{"result_gene_name":"HBB","cancer_type_id":3,"count":97},{"result_gene_name":"COL7A1","cancer_type_id":3,"count":96},{"result_gene_name":"CCL14","cancer_type_id":3,"count":95},{"result_gene_name":"APOBEC3A","cancer_type_id":3,"count":94},{"result_gene_name":"SELENBP1","cancer_type_id":3,"count":94},{"result_gene_name":"UBE2T","cancer_type_id":4,"count":130},{"result_gene_name":"CDC20","cancer_type_id":4,"count":124},{"result_gene_name":"TPX2","cancer_type_id":4,"count":124},{"result_gene_name":"RCC1","cancer_type_id":4,"count":122},{"result_gene_name":"MAL","cancer_type_id":4,"count":119},{"result_gene_name":"CKS1B","cancer_type_id":4,"count":116},{"result_gene_name":"SLC26A9","cancer_type_id":4,"count":115},{"result_gene_name":"RNASEH2A","cancer_type_id":4,"count":114},{"result_gene_name":"CENPF","cancer_type_id":4,"count":114},{"result_gene_name":"GPR133","cancer_type_id":4,"count":114},{"result_gene_name":"SH3GL3","cancer_type_id":5,"count":69},{"result_gene_name":"NUF2","cancer_type_id":5,"count":69},{"result_gene_name":"PBK","cancer_type_id":5,"count":69},{"result_gene_name":"EPB49","cancer_type_id":5,"count":69},{"result_gene_name":"C1orf115","cancer_type_id":5,"count":68},{"result_gene_name":"PTPRR","cancer_type_id":5,"count":68},{"result_gene_name":"F2R","cancer_type_id":5,"count":68},{"result_gene_name":"BUB1","cancer_type_id":5,"count":68},{"result_gene_name":"SSTR1","cancer_type_id":5,"count":68},{"result_gene_name":"STYK1","cancer_type_id":5,"count":67},{"result_gene_name":"MAL","cancer_type_id":6,"count":311},{"result_gene_name":"SELENBP1","cancer_type_id":6,"count":292},{"result_gene_name":"RORC","cancer_type_id":6,"count":292},{"result_gene_name":"DMBT1","cancer_type_id":6,"count":291},{"result_gene_name":"HMGA2","cancer_type_id":6,"count":290},{"result_gene_name":"AIM2","cancer_type_id":6,"count":286},{"result_gene_name":"NR3C2","cancer_type_id":6,"count":286},{"result_gene_name":"EDN3","cancer_type_id":6,"count":281},{"result_gene_name":"SERPINE1","cancer_type_id":6,"count":280},{"result_gene_name":"GPD1L","cancer_type_id":6,"count":275},{"result_gene_name":"NXPH4","cancer_type_id":7,"count":17},{"result_gene_name":"KLRG2","cancer_type_id":7,"count":17},{"result_gene_name":"TPX2","cancer_type_id":7,"count":17},{"result_gene_name":"SUSD4","cancer_type_id":7,"count":16},{"result_gene_name":"MSLN","cancer_type_id":7,"count":16},{"result_gene_name":"ANLN","cancer_type_id":7,"count":16},{"result_gene_name":"ADH1B","cancer_type_id":7,"count":16},{"result_gene_name":"NR3C2","cancer_type_id":7,"count":16},{"result_gene_name":"C7","cancer_type_id":7,"count":15},{"result_gene_name":"PTTG1","cancer_type_id":7,"count":15},{"result_gene_name":"SELENBP1","cancer_type_id":8,"count":7},{"result_gene_name":"C2orf40","cancer_type_id":8,"count":7},{"result_gene_name":"PDE2A","cancer_type_id":8,"count":7},{"result_gene_name":"SPOCK2","cancer_type_id":8,"count":7},{"result_gene_name":"NR3C2","cancer_type_id":8,"count":7},{"result_gene_name":"ITPR1","cancer_type_id":8,"count":7},{"result_gene_name":"FMO5","cancer_type_id":8,"count":6},{"result_gene_name":"UCHL1","cancer_type_id":8,"count":6},{"result_gene_name":"GCNT3","cancer_type_id":8,"count":6},{"result_gene_name":"BMP7","cancer_type_id":8,"count":6},{"result_gene_name":"PTTG1","cancer_type_id":9,"count":44},{"result_gene_name":"UBE2T","cancer_type_id":9,"count":43},{"result_gene_name":"MYBL2","cancer_type_id":9,"count":43},{"result_gene_name":"CDC20","cancer_type_id":9,"count":43},{"result_gene_name":"ASPM","cancer_type_id":9,"count":42},{"result_gene_name":"CCL14","cancer_type_id":9,"count":42},{"result_gene_name":"CXCL14","cancer_type_id":9,"count":42},{"result_gene_name":"FANCD2","cancer_type_id":9,"count":40},{"result_gene_name":"CCNB2","cancer_type_id":9,"count":40},{"result_gene_name":"CENPF","cancer_type_id":9,"count":40},{"result_gene_name":"KIF20A","cancer_type_id":10,"count":185},{"result_gene_name":"SH3GL3","cancer_type_id":10,"count":184},{"result_gene_name":"UBE2T","cancer_type_id":10,"count":183},{"result_gene_name":"ASPM","cancer_type_id":10,"count":181},{"result_gene_name":"HBB","cancer_type_id":10,"count":181},{"result_gene_name":"TPX2","cancer_type_id":10,"count":181},{"result_gene_name":"MELK","cancer_type_id":10,"count":179},{"result_gene_name":"CENPF","cancer_type_id":10,"count":177},{"result_gene_name":"COL10A1","cancer_type_id":10,"count":176},{"result_gene_name":"CCNB2","cancer_type_id":10,"count":176},{"result_gene_name":"KIF18B","cancer_type_id":11,"count":109},{"result_gene_name":"UBE2T","cancer_type_id":11,"count":109},{"result_gene_name":"SELENBP1","cancer_type_id":11,"count":109},{"result_gene_name":"KIF20A","cancer_type_id":11,"count":109},{"result_gene_name":"DEPDC1","cancer_type_id":11,"count":109},{"result_gene_name":"ASPM","cancer_type_id":11,"count":109},{"result_gene_name":"KIF14","cancer_type_id":11,"count":109},{"result_gene_name":"PTTG1","cancer_type_id":11,"count":108},{"result_gene_name":"NUF2","cancer_type_id":11,"count":108},{"result_gene_name":"AOC3","cancer_type_id":11,"count":108},{"result_gene_name":"NUF2","cancer_type_id":12,"count":261},{"result_gene_name":"MELK","cancer_type_id":12,"count":260},{"result_gene_name":"AGBL2","cancer_type_id":12,"count":252},{"result_gene_name":"NMU","cancer_type_id":12,"count":251},{"result_gene_name":"BUB1","cancer_type_id":12,"count":251},{"result_gene_name":"DEPDC1","cancer_type_id":12,"count":250},{"result_gene_name":"CNN1","cancer_type_id":12,"count":246},{"result_gene_name":"SPATA18","cancer_type_id":12,"count":239},{"result_gene_name":"CENPF","cancer_type_id":12,"count":238},{"result_gene_name":"TPX2","cancer_type_id":12,"count":234},{"result_gene_name":"NRG2","cancer_type_id":13,"count":57},{"result_gene_name":"ASPA","cancer_type_id":13,"count":56},{"result_gene_name":"DUOX2","cancer_type_id":13,"count":56},{"result_gene_name":"MLC1","cancer_type_id":13,"count":55},{"result_gene_name":"GDF10","cancer_type_id":13,"count":55},{"result_gene_name":"HOXD13","cancer_type_id":13,"count":55},{"result_gene_name":"MSLN","cancer_type_id":13,"count":54},{"result_gene_name":"PENK","cancer_type_id":13,"count":54},{"result_gene_name":"MAL","cancer_type_id":13,"count":53},{"result_gene_name":"CACNA1D","cancer_type_id":13,"count":52},{"result_gene_name":"ASPA","cancer_type_id":14,"count":60},{"result_gene_name":"NNAT","cancer_type_id":14,"count":58},{"result_gene_name":"CCL14","cancer_type_id":14,"count":58},{"result_gene_name":"NRG2","cancer_type_id":14,"count":58},{"result_gene_name":"PLEKHG4","cancer_type_id":14,"count":57},{"result_gene_name":"ROR1","cancer_type_id":14,"count":57},{"result_gene_name":"MAL","cancer_type_id":14,"count":57},{"result_gene_name":"PDE2A","cancer_type_id":14,"count":57},{"result_gene_name":"ADH1B","cancer_type_id":14,"count":56},{"result_gene_name":"NR3C2","cancer_type_id":14,"count":56},{"result_gene_name":"MAL","cancer_type_id":15,"count":83},{"result_gene_name":"TPX2","cancer_type_id":15,"count":75},{"result_gene_name":"UBE2T","cancer_type_id":15,"count":70},{"result_gene_name":"HBB","cancer_type_id":15,"count":70},{"result_gene_name":"SPARC","cancer_type_id":15,"count":69},{"result_gene_name":"DMBT1","cancer_type_id":15,"count":69},{"result_gene_name":"COL18A1","cancer_type_id":15,"count":67},{"result_gene_name":"SST","cancer_type_id":15,"count":66},{"result_gene_name":"TTYH3","cancer_type_id":15,"count":65},{"result_gene_name":"SCARF2","cancer_type_id":15,"count":64},{"result_gene_name":"MELK","cancer_type_id":16,"count":45},{"result_gene_name":"ASPM","cancer_type_id":16,"count":45},{"result_gene_name":"KIF18B","cancer_type_id":16,"count":45},{"result_gene_name":"E2F2","cancer_type_id":16,"count":45},{"result_gene_name":"CENPF","cancer_type_id":16,"count":45},{"result_gene_name":"KIF20A","cancer_type_id":16,"count":45},{"result_gene_name":"CDC45","cancer_type_id":16,"count":44},{"result_gene_name":"CTSL2","cancer_type_id":16,"count":44},{"result_gene_name":"UBE2T","cancer_type_id":16,"count":44},{"result_gene_name":"TACC3","cancer_type_id":16,"count":44}]

var deg1 = {"0": [0, 0, 0], "1": [93, 93, 98], "2": [242, 242, 248], "3": [51, 51, 51], "4": [104, 104, 106], "5": [57, 57, 62], "6": [90, 90, 90], "7": [14, 14, 14], "8": [2, 2, 2], "9": [37, 37, 38], "10": [180, 180, 183], "11": [107, 107, 110], "12": [195, 197, 198], "13": [27, 27, 39], "14": [31, 31, 31], "15": [43, 43, 44], "16": [40, 40, 40]};

//pik3ca
var ctdegs = {"1": {"SMAD9": {"0": [0, 0, 0], "1": [34, 40, 40], "2": [192, 215, 215], "3": [21, 21, 21], "4": [3, 15, 15], "5": [2, 2, 2], "6": [39, 77, 77], "7": [5, 6, 6], "8": [0, 0, 0], "9": [0, 0, 0], "10": [16, 17, 17], "11": [12, 58, 58], "12": [0, 40, 40], "13": [3, 6, 6], "14": [5, 5, 5], "15": [9, 9, 9], "16": [0, 0, 0]}, "CLEC3B": {"0": [0, 0, 0], "1": [35, 41, 41], "2": [246, 278, 278], "3": [15, 15, 15], "4": [8, 29, 29], "5": [4, 6, 6], "6": [79, 151, 151], "7": [1, 3, 3], "8": [2, 2, 2], "9": [0, 1, 1], "10": [17, 17, 17], "11": [14, 77, 77], "12": [1, 52, 52], "13": [6, 13, 13], "14": [3, 3, 3], "15": [20, 25, 25], "16": [0, 0, 0]}, "SPAG5": {"0": [0, 0, 0], "1": [34, 40, 40], "2": [188, 217, 217], "3": [10, 10, 10], "4": [9, 33, 33], "5": [5, 5, 5], "6": [32, 78, 78], "7": [2, 3, 3], "8": [2, 2, 2], "9": [1, 3, 3], "10": [20, 20, 20], "11": [14, 76, 76], "12": [1, 39, 39], "13": [7, 11, 11], "14": [2, 2, 2], "15": [4, 6, 6], "16": [95, 101, 101]}, "CDC25C": {"0": [0, 0, 0], "1": [34, 40, 40], "2": [167, 196, 196], "3": [8, 8, 8], "4": [0, 0, 0], "5": [12, 14, 14], "6": [27, 61, 61], "7": [0, 1, 1], "8": [1, 1, 1], "9": [0, 2, 2], "10": [13, 13, 13], "11": [12, 70, 70], "12": [1, 52, 52], "13": [2, 3, 3], "14": [2, 2, 2], "15": [0, 0, 0], "16": [78, 84, 84]}, "RAD54L": {"0": [0, 0, 0], "1": [33, 39, 39], "2": [203, 233, 233], "3": [29, 29, 29], "4": [3, 12, 12], "5": [6, 7, 7], "6": [41, 89, 89], "7": [2, 5, 5], "8": [1, 1, 1], "9": [0, 2, 2], "10": [18, 18, 18], "11": [14, 78, 78], "12": [0, 38, 38], "13": [4, 7, 7], "14": [3, 3, 3], "15": [5, 7, 7], "16": [97, 103, 103]}, "ATP1A2": {"0": [0, 0, 0], "1": [37, 43, 43], "2": [265, 296, 296], "3": [42, 42, 42], "4": [0, 0, 0], "5": [10, 12, 12], "6": [72, 139, 139], "7": [6, 9, 9], "8": [2, 2, 2], "9": [0, 0, 0], "10": [19, 20, 20], "11": [13, 75, 75], "12": [0, 59, 59], "13": [10, 16, 16], "14": [8, 8, 8], "15": [18, 22, 22], "16": [0, 0, 0]}, "TK1": {"0": [0, 0, 0], "1": [35, 41, 41], "2": [219, 247, 247], "3": [3, 3, 3], "4": [10, 35, 35], "5": [11, 13, 13], "6": [34, 83, 83], "7": [6, 11, 11], "8": [2, 2, 2], "9": [1, 2, 2], "10": [18, 18, 18], "11": [14, 77, 77], "12": [0, 42, 42], "13": [6, 8, 8], "14": [2, 2, 2], "15": [23, 28, 28], "16": [72, 77, 77]}, "F10": {"0": [0, 0, 0], "1": [34, 40, 40], "2": [204, 228, 228], "3": [23, 23, 23], "4": [0, 0, 0], "5": [1, 1, 1], "6": [53, 106, 106], "7": [4, 7, 7], "8": [1, 1, 1], "9": [0, 0, 0], "10": [17, 17, 17], "11": [13, 75, 75], "12": [1, 47, 47], "13": [4, 10, 10], "14": [4, 4, 4], "15": [20, 21, 21], "16": [0, 0, 0]}, "UHRF1": {"0": [0, 0, 0], "1": [34, 40, 40], "2": [242, 269, 269], "3": [34, 34, 34], "4": [9, 29, 29], "5": [12, 14, 14], "6": [32, 70, 70], "7": [8, 15, 15], "8": [1, 1, 1], "9": [0, 2, 2], "10": [14, 15, 15], "11": [9, 53, 53], "12": [0, 11, 11], "13": [7, 11, 11], "14": [6, 6, 6], "15": [4, 5, 5], "16": [71, 76, 76]}, "ABCA8": {"0": [0, 0, 0], "1": [35, 41, 41], "2": [259, 290, 290], "3": [46, 46, 46], "4": [9, 31, 31], "5": [2, 2, 2], "6": [69, 135, 135], "7": [11, 18, 18], "8": [1, 1, 1], "9": [0, 2, 2], "10": [21, 21, 21], "11": [14, 79, 79], "12": [1, 56, 56], "13": [3, 9, 9], "14": [8, 8, 8], "15": [19, 22, 22], "16": [0, 0, 0]}}, "2": {"ADAMTS5": {"0": [0, 0, 0], "1": [22, 27, 27], "2": [264, 293, 293], "3": [4, 4, 4], "4": [0, 0, 0], "5": [9, 11, 11], "6": [21, 44, 44], "7": [3, 6, 6], "8": [0, 0, 0], "9": [0, 1, 1], "10": [7, 7, 7], "11": [4, 16, 16], "12": [0, 15, 15], "13": [8, 14, 14], "14": [2, 2, 2], "15": [0, 0, 0], "16": [0, 0, 0]}, "APOB": {"0": [0, 0, 0], "1": [0, 0, 0], "2": [273, 304, 304], "3": [0, 0, 0], "4": [0, 0, 0], "5": [0, 0, 0], "6": [0, 0, 0], "7": [4, 7, 7], "8": [0, 0, 0], "9": [0, 1, 1], "10": [0, 0, 0], "11": [0, 0, 0], "12": [0, 0, 0], "13": [6, 13, 13], "14": [7, 7, 7], "15": [0, 1, 1], "16": [0, 0, 0]}, "COMP": {"0": [0, 0, 0], "1": [30, 33, 33], "2": [274, 304, 304], "3": [33, 33, 33], "4": [0, 4, 4], "5": [0, 0, 0], "6": [55, 112, 112], "7": [7, 12, 12], "8": [0, 0, 0], "9": [0, 2, 2], "10": [18, 19, 19], "11": [7, 36, 36], "12": [0, 36, 36], "13": [10, 19, 19], "14": [5, 5, 5], "15": [5, 8, 8], "16": [35, 38, 38]}, "GLYAT": {"0": [0, 0, 0], "1": [0, 0, 0], "2": [278, 310, 310], "3": [0, 0, 0], "4": [0, 0, 0], "5": [0, 0, 0], "6": [0, 0, 0], "7": [1, 3, 3], "8": [1, 1, 1], "9": [0, 1, 1], "10": [0, 0, 0], "11": [0, 0, 0], "12": [0, 0, 0], "13": [0, 0, 0], "14": [0, 0, 0], "15": [0, 0, 0], "16": [0, 0, 0]}, "ATP1A2": {"0": [0, 0, 0], "1": [37, 43, 43], "2": [265, 296, 296], "3": [42, 42, 42], "4": [0, 0, 0], "5": [10, 12, 12], "6": [72, 139, 139], "7": [6, 9, 9], "8": [2, 2, 2], "9": [0, 0, 0], "10": [19, 20, 20], "11": [13, 75, 75], "12": [0, 59, 59], "13": [10, 16, 16], "14": [8, 8, 8], "15": [18, 22, 22], "16": [0, 0, 0]}, "TSLP": {"0": [0, 0, 0], "1": [28, 32, 32], "2": [272, 303, 303], "3": [0, 0, 0], "4": [0, 0, 0], "5": [11, 13, 13], "6": [19, 41, 41], "7": [5, 7, 7], "8": [0, 0, 0], "9": [1, 1, 1], "10": [14, 14, 14], "11": [3, 24, 24], "12": [0, 28, 28], "13": [9, 17, 17], "14": [6, 6, 6], "15": [0, 0, 0], "16": [0, 0, 0]}, "MME": {"0": [0, 0, 0], "1": [19, 22, 22], "2": [268, 299, 299], "3": [15, 15, 15], "4": [0, 0, 0], "5": [4, 5, 5], "6": [27, 41, 41], "7": [4, 5, 5], "8": [1, 1, 1], "9": [1, 3, 3], "10": [7, 7, 7], "11": [9, 60, 60], "12": [0, 14, 14], "13": [8, 12, 12], "14": [2, 2, 2], "15": [2, 2, 2], "16": [40, 42, 42]}, "COL25A1": {"0": [0, 0, 0], "1": [0, 0, 0], "2": [263, 294, 294], "3": [0, 0, 0], "4": [0, 0, 0], "5": [0, 0, 0], "6": [0, 0, 0], "7": [3, 5, 5], "8": [2, 2, 2], "9": [2, 4, 4], "10": [1, 1, 1], "11": [0, 0, 0], "12": [0, 0, 0], "13": [0, 0, 0], "14": [0, 0, 0], "15": [0, 0, 0], "16": [18, 19, 19]}, "GFAP": {"0": [0, 0, 0], "1": [4, 4, 4], "2": [255, 286, 286], "3": [0, 0, 0], "4": [0, 0, 0], "5": [0, 0, 0], "6": [4, 9, 9], "7": [0, 2, 2], "8": [0, 0, 0], "9": [0, 0, 0], "10": [0, 0, 0], "11": [0, 0, 0], "12": [0, 0, 0], "13": [0, 1, 1], "14": [0, 0, 0], "15": [0, 0, 0], "16": [0, 0, 0]}, "ABCA8": {"0": [0, 0, 0], "1": [35, 41, 41], "2": [259, 290, 290], "3": [46, 46, 46], "4": [9, 31, 31], "5": [2, 2, 2], "6": [69, 135, 135], "7": [11, 18, 18], "8": [1, 1, 1], "9": [0, 2, 2], "10": [21, 21, 21], "11": [14, 79, 79], "12": [1, 56, 56], "13": [3, 9, 9], "14": [8, 8, 8], "15": [19, 22, 22], "16": [0, 0, 0]}}, "3": {"MMP11": {"0": [0, 0, 0], "1": [31, 32, 32], "2": [236, 251, 251], "3": [45, 45, 45], "4": [7, 16, 16], "5": [1, 1, 1], "6": [52, 81, 81], "7": [8, 9, 9], "8": [1, 1, 1], "9": [2, 3, 3], "10": [21, 21, 21], "11": [11, 61, 61], "12": [0, 15, 15], "13": [5, 7, 7], "14": [8, 8, 8], "15": [23, 24, 24], "16": [79, 81, 81]}, "SEC14L2": {"0": [0, 0, 0], "1": [17, 20, 20], "2": [119, 133, 133], "3": [45, 45, 45], "4": [1, 6, 6], "5": [0, 0, 0], "6": [19, 42, 42], "7": [1, 2, 2], "8": [1, 1, 1], "9": [0, 1, 1], "10": [7, 8, 8], "11": [5, 32, 32], "12": [0, 9, 9], "13": [0, 3, 3], "14": [7, 7, 7], "15": [0, 0, 0], "16": [76, 81, 81]}, "PSAT1": {"0": [0, 0, 0], "1": [15, 17, 17], "2": [208, 229, 229], "3": [39, 39, 39], "4": [7, 23, 23], "5": [0, 2, 2], "6": [8, 22, 22], "7": [9, 15, 15], "8": [1, 1, 1], "9": [1, 1, 1], "10": [12, 12, 12], "11": [8, 51, 51], "12": [1, 32, 32], "13": [1, 3, 3], "14": [7, 7, 7], "15": [12, 12, 12], "16": [45, 48, 48]}, "ADAM12": {"0": [0, 0, 0], "1": [13, 14, 14], "2": [164, 178, 178], "3": [43, 43, 43], "4": [1, 1, 1], "5": [6, 6, 6], "6": [40, 75, 75], "7": [8, 12, 12], "8": [2, 2, 2], "9": [0, 1, 1], "10": [17, 17, 17], "11": [8, 43, 43], "12": [0, 21, 21], "13": [2, 3, 3], "14": [4, 4, 4], "15": [1, 1, 1], "16": [71, 76, 76]}, "PDK4": {"0": [0, 0, 0], "1": [33, 38, 38], "2": [229, 255, 255], "3": [42, 42, 42], "4": [10, 34, 34], "5": [4, 5, 5], "6": [73, 145, 145], "7": [6, 10, 10], "8": [1, 1, 1], "9": [1, 3, 3], "10": [17, 17, 17], "11": [14, 75, 75], "12": [1, 51, 51], "13": [10, 15, 15], "14": [8, 8, 8], "15": [21, 24, 24], "16": [0, 0, 0]}, "CLCA2": {"0": [0, 0, 0], "1": [29, 35, 35], "2": [170, 193, 193], "3": [36, 36, 36], "4": [9, 32, 32], "5": [2, 2, 2], "6": [12, 26, 26], "7": [0, 0, 0], "8": [0, 0, 0], "9": [0, 0, 0], "10": [5, 5, 5], "11": [12, 68, 68], "12": [0, 13, 13], "13": [9, 18, 18], "14": [0, 0, 0], "15": [0, 0, 0], "16": [6, 6, 6]}, "CAPN9": {"0": [0, 0, 0], "1": [4, 6, 6], "2": [172, 183, 183], "3": [36, 36, 36], "4": [10, 36, 36], "5": [2, 2, 2], "6": [0, 0, 0], "7": [0, 0, 0], "8": [0, 0, 0], "9": [0, 0, 0], "10": [18, 18, 18], "11": [14, 79, 79], "12": [1, 18, 18], "13": [4, 6, 6], "14": [7, 7, 7], "15": [27, 32, 32], "16": [61, 64, 64]}, "MFAP2": {"0": [0, 0, 0], "1": [24, 28, 28], "2": [227, 251, 251], "3": [36, 36, 36], "4": [10, 31, 31], "5": [2, 3, 3], "6": [78, 153, 153], "7": [6, 11, 11], "8": [1, 1, 1], "9": [1, 1, 1], "10": [11, 11, 11], "11": [9, 49, 49], "12": [1, 40, 40], "13": [1, 4, 4], "14": [4, 4, 4], "15": [15, 20, 20], "16": [75, 80, 80]}, "ABCA8": {"0": [0, 0, 0], "1": [35, 41, 41], "2": [259, 290, 290], "3": [46, 46, 46], "4": [9, 31, 31], "5": [2, 2, 2], "6": [69, 135, 135], "7": [11, 18, 18], "8": [1, 1, 1], "9": [0, 2, 2], "10": [21, 21, 21], "11": [14, 79, 79], "12": [1, 56, 56], "13": [3, 9, 9], "14": [8, 8, 8], "15": [19, 22, 22], "16": [0, 0, 0]}, "ATP1A2": {"0": [0, 0, 0], "1": [37, 43, 43], "2": [265, 296, 296], "3": [42, 42, 42], "4": [0, 0, 0], "5": [10, 12, 12], "6": [72, 139, 139], "7": [6, 9, 9], "8": [2, 2, 2], "9": [0, 0, 0], "10": [19, 20, 20], "11": [13, 75, 75], "12": [0, 59, 59], "13": [10, 16, 16], "14": [8, 8, 8], "15": [18, 22, 22], "16": [0, 0, 0]}}, "4": {"SPAG5": {"0": [0, 0, 0], "1": [34, 40, 40], "2": [188, 217, 217], "3": [10, 10, 10], "4": [9, 33, 33], "5": [5, 5, 5], "6": [32, 78, 78], "7": [2, 3, 3], "8": [2, 2, 2], "9": [1, 3, 3], "10": [20, 20, 20], "11": [14, 76, 76], "12": [1, 39, 39], "13": [7, 11, 11], "14": [2, 2, 2], "15": [4, 6, 6], "16": [95, 101, 101]}, "BIRC5": {"0": [0, 0, 0], "1": [24, 28, 28], "2": [209, 237, 237], "3": [17, 17, 17], "4": [10, 35, 35], "5": [8, 11, 11], "6": [32, 78, 78], "7": [5, 11, 11], "8": [1, 1, 1], "9": [0, 2, 2], "10": [16, 16, 16], "11": [14, 73, 73], "12": [1, 46, 46], "13": [4, 7, 7], "14": [2, 2, 2], "15": [16, 19, 19], "16": [28, 32, 32]}, "TK1": {"0": [0, 0, 0], "1": [35, 41, 41], "2": [219, 247, 247], "3": [3, 3, 3], "4": [10, 35, 35], "5": [11, 13, 13], "6": [34, 83, 83], "7": [6, 11, 11], "8": [2, 2, 2], "9": [1, 2, 2], "10": [18, 18, 18], "11": [14, 77, 77], "12": [0, 42, 42], "13": [6, 8, 8], "14": [2, 2, 2], "15": [23, 28, 28], "16": [72, 77, 77]}, "CNFN": {"0": [0, 0, 0], "1": [19, 22, 22], "2": [91, 105, 105], "3": [6, 6, 6], "4": [11, 34, 34], "5": [0, 0, 0], "6": [59, 127, 127], "7": [1, 1, 1], "8": [0, 0, 0], "9": [0, 1, 1], "10": [9, 9, 9], "11": [8, 51, 51], "12": [0, 0, 0], "13": [3, 4, 4], "14": [1, 1, 1], "15": [14, 17, 17], "16": [52, 54, 54]}, "PDK4": {"0": [0, 0, 0], "1": [33, 38, 38], "2": [229, 255, 255], "3": [42, 42, 42], "4": [10, 34, 34], "5": [4, 5, 5], "6": [73, 145, 145], "7": [6, 10, 10], "8": [1, 1, 1], "9": [1, 3, 3], "10": [17, 17, 17], "11": [14, 75, 75], "12": [1, 51, 51], "13": [10, 15, 15], "14": [8, 8, 8], "15": [21, 24, 24], "16": [0, 0, 0]}, "FGFBP1": {"0": [0, 0, 0], "1": [31, 35, 35], "2": [243, 264, 264], "3": [16, 16, 16], "4": [9, 33, 33], "5": [0, 0, 0], "6": [29, 50, 50], "7": [0, 0, 0], "8": [1, 1, 1], "9": [0, 0, 0], "10": [11, 11, 11], "11": [10, 63, 63], "12": [0, 28, 28], "13": [5, 6, 6], "14": [3, 3, 3], "15": [3, 3, 3], "16": [43, 44, 44]}, "KRT6A": {"0": [0, 0, 0], "1": [29, 34, 34], "2": [179, 192, 192], "3": [15, 15, 15], "4": [11, 35, 35], "5": [0, 0, 0], "6": [19, 29, 29], "7": [0, 0, 0], "8": [1, 1, 1], "9": [0, 0, 0], "10": [14, 14, 14], "11": [11, 68, 68], "12": [0, 23, 23], "13": [8, 12, 12], "14": [2, 2, 2], "15": [3, 4, 4], "16": [61, 63, 63]}, "COL5A1": {"0": [0, 0, 0], "1": [17, 21, 21], "2": [220, 236, 236], "3": [23, 23, 23], "4": [9, 31, 31], "5": [6, 7, 7], "6": [72, 140, 140], "7": [6, 12, 12], "8": [2, 2, 2], "9": [1, 2, 2], "10": [11, 12, 12], "11": [10, 45, 45], "12": [0, 23, 23], "13": [5, 8, 8], "14": [2, 2, 2], "15": [23, 28, 28], "16": [0, 0, 0]}, "PI3": {"0": [0, 0, 0], "1": [15, 17, 17], "2": [219, 246, 246], "3": [21, 21, 21], "4": [9, 32, 32], "5": [4, 4, 4], "6": [45, 95, 95], "7": [1, 2, 2], "8": [2, 2, 2], "9": [0, 1, 1], "10": [12, 12, 12], "11": [14, 68, 68], "12": [0, 27, 27], "13": [4, 9, 9], "14": [2, 2, 2], "15": [14, 17, 17], "16": [65, 71, 71]}, "CAPN9": {"0": [0, 0, 0], "1": [4, 6, 6], "2": [172, 183, 183], "3": [36, 36, 36], "4": [10, 36, 36], "5": [2, 2, 2], "6": [0, 0, 0], "7": [0, 0, 0], "8": [0, 0, 0], "9": [0, 0, 0], "10": [18, 18, 18], "11": [14, 79, 79], "12": [1, 18, 18], "13": [4, 6, 6], "14": [7, 7, 7], "15": [27, 32, 32], "16": [61, 64, 64]}}, "5": {"SLC35F3": {"0": [0, 0, 0], "1": [1, 5, 5], "2": [135, 145, 145], "3": [0, 0, 0], "4": [0, 0, 0], "5": [19, 23, 23], "6": [39, 63, 63], "7": [0, 1, 1], "8": [0, 0, 0], "9": [0, 0, 0], "10": [6, 6, 6], "11": [4, 33, 33], "12": [0, 5, 5], "13": [1, 4, 4], "14": [0, 0, 0], "15": [0, 0, 0], "16": [26, 26, 26]}, "FXYD1": {"0": [0, 0, 0], "1": [33, 38, 38], "2": [249, 277, 277], "3": [13, 13, 13], "4": [7, 25, 25], "5": [14, 17, 17], "6": [67, 131, 131], "7": [8, 12, 12], "8": [1, 1, 1], "9": [0, 2, 2], "10": [16, 17, 17], "11": [13, 73, 73], "12": [0, 29, 29], "13": [6, 11, 11], "14": [0, 0, 0], "15": [16, 20, 20], "16": [0, 0, 0]}, "DYNC1I1": {"0": [0, 0, 0], "1": [8, 10, 10], "2": [128, 136, 136], "3": [5, 5, 5], "4": [0, 0, 0], "5": [18, 21, 21], "6": [42, 78, 78], "7": [1, 1, 1], "8": [2, 2, 2], "9": [0, 0, 0], "10": [4, 4, 4], "11": [9, 49, 49], "12": [1, 9, 9], "13": [5, 8, 8], "14": [0, 0, 0], "15": [0, 0, 0], "16": [28, 28, 28]}, "CDC25C": {"0": [0, 0, 0], "1": [34, 40, 40], "2": [167, 196, 196], "3": [8, 8, 8], "4": [0, 0, 0], "5": [12, 14, 14], "6": [27, 61, 61], "7": [0, 1, 1], "8": [1, 1, 1], "9": [0, 2, 2], "10": [13, 13, 13], "11": [12, 70, 70], "12": [1, 52, 52], "13": [2, 3, 3], "14": [2, 2, 2], "15": [0, 0, 0], "16": [78, 84, 84]}, "SULF1": {"0": [0, 0, 0], "1": [24, 26, 26], "2": [146, 165, 165], "3": [31, 31, 31], "4": [7, 13, 13], "5": [12, 14, 14], "6": [48, 79, 79], "7": [4, 6, 6], "8": [0, 0, 0], "9": [0, 1, 1], "10": [17, 17, 17], "11": [9, 44, 44], "12": [1, 33, 33], "13": [4, 7, 7], "14": [3, 3, 3], "15": [25, 30, 30], "16": [5, 5, 5]}, "POSTN": {"0": [0, 0, 0], "1": [28, 32, 32], "2": [227, 249, 249], "3": [19, 19, 19], "4": [4, 17, 17], "5": [15, 19, 19], "6": [74, 138, 138], "7": [7, 11, 11], "8": [1, 1, 1], "9": [0, 1, 1], "10": [12, 12, 12], "11": [10, 47, 47], "12": [1, 47, 47], "13": [5, 7, 7], "14": [4, 4, 4], "15": [8, 9, 9], "16": [0, 0, 0]}, "HOXA3": {"0": [0, 0, 0], "1": [2, 2, 2], "2": [219, 245, 245], "3": [1, 1, 1], "4": [0, 5, 5], "5": [13, 15, 15], "6": [20, 37, 37], "7": [4, 6, 6], "8": [0, 0, 0], "9": [0, 0, 0], "10": [5, 5, 5], "11": [1, 7, 7], "12": [1, 30, 30], "13": [2, 3, 3], "14": [3, 3, 3], "15": [3, 3, 3], "16": [0, 0, 0]}, "STXBP6": {"0": [0, 0, 0], "1": [28, 33, 33], "2": [230, 253, 253], "3": [4, 4, 4], "4": [0, 0, 0], "5": [19, 22, 22], "6": [64, 109, 109], "7": [5, 10, 10], "8": [0, 0, 0], "9": [1, 2, 2], "10": [19, 19, 19], "11": [9, 48, 48], "12": [1, 30, 30], "13": [3, 6, 6], "14": [0, 0, 0], "15": [0, 0, 0], "16": [87, 91, 91]}, "UHRF1": {"0": [0, 0, 0], "1": [34, 40, 40], "2": [242, 269, 269], "3": [34, 34, 34], "4": [9, 29, 29], "5": [12, 14, 14], "6": [32, 70, 70], "7": [8, 15, 15], "8": [1, 1, 1], "9": [0, 2, 2], "10": [14, 15, 15], "11": [9, 53, 53], "12": [0, 11, 11], "13": [7, 11, 11], "14": [6, 6, 6], "15": [4, 5, 5], "16": [71, 76, 76]}, "PHYHIP": {"0": [0, 0, 0], "1": [15, 20, 20], "2": [139, 152, 152], "3": [18, 18, 18], "4": [0, 0, 0], "5": [18, 22, 22], "6": [49, 91, 91], "7": [8, 14, 14], "8": [2, 2, 2], "9": [0, 0, 0], "10": [5, 5, 5], "11": [3, 14, 14], "12": [1, 31, 31], "13": [4, 6, 6], "14": [7, 7, 7], "15": [0, 0, 0], "16": [0, 0, 0]}}, "6": {"CLEC3B": {"0": [0, 0, 0], "1": [35, 41, 41], "2": [246, 278, 278], "3": [15, 15, 15], "4": [8, 29, 29], "5": [4, 6, 6], "6": [79, 151, 151], "7": [1, 3, 3], "8": [2, 2, 2], "9": [0, 1, 1], "10": [17, 17, 17], "11": [14, 77, 77], "12": [1, 52, 52], "13": [6, 13, 13], "14": [3, 3, 3], "15": [20, 25, 25], "16": [0, 0, 0]}, "HP": {"0": [0, 0, 0], "1": [5, 6, 6], "2": [175, 200, 200], "3": [2, 2, 2], "4": [0, 0, 0], "5": [0, 0, 0], "6": [67, 133, 133], "7": [4, 7, 7], "8": [0, 0, 0], "9": [1, 1, 1], "10": [16, 16, 16], "11": [10, 47, 47], "12": [0, 18, 18], "13": [0, 0, 0], "14": [1, 1, 1], "15": [2, 2, 2], "16": [57, 59, 59]}, "PDK4": {"0": [0, 0, 0], "1": [33, 38, 38], "2": [229, 255, 255], "3": [42, 42, 42], "4": [10, 34, 34], "5": [4, 5, 5], "6": [73, 145, 145], "7": [6, 10, 10], "8": [1, 1, 1], "9": [1, 3, 3], "10": [17, 17, 17], "11": [14, 75, 75], "12": [1, 51, 51], "13": [10, 15, 15], "14": [8, 8, 8], "15": [21, 24, 24], "16": [0, 0, 0]}, "POSTN": {"0": [0, 0, 0], "1": [28, 32, 32], "2": [227, 249, 249], "3": [19, 19, 19], "4": [4, 17, 17], "5": [15, 19, 19], "6": [74, 138, 138], "7": [7, 11, 11], "8": [1, 1, 1], "9": [0, 1, 1], "10": [12, 12, 12], "11": [10, 47, 47], "12": [1, 47, 47], "13": [5, 7, 7], "14": [4, 4, 4], "15": [8, 9, 9], "16": [0, 0, 0]}, "COL5A1": {"0": [0, 0, 0], "1": [17, 21, 21], "2": [220, 236, 236], "3": [23, 23, 23], "4": [9, 31, 31], "5": [6, 7, 7], "6": [72, 140, 140], "7": [6, 12, 12], "8": [2, 2, 2], "9": [1, 2, 2], "10": [11, 12, 12], "11": [10, 45, 45], "12": [0, 23, 23], "13": [5, 8, 8], "14": [2, 2, 2], "15": [23, 28, 28], "16": [0, 0, 0]}, "ATP1A2": {"0": [0, 0, 0], "1": [37, 43, 43], "2": [265, 296, 296], "3": [42, 42, 42], "4": [0, 0, 0], "5": [10, 12, 12], "6": [72, 139, 139], "7": [6, 9, 9], "8": [2, 2, 2], "9": [0, 0, 0], "10": [19, 20, 20], "11": [13, 75, 75], "12": [0, 59, 59], "13": [10, 16, 16], "14": [8, 8, 8], "15": [18, 22, 22], "16": [0, 0, 0]}, "ARTN": {"0": [0, 0, 0], "1": [12, 17, 17], "2": [96, 105, 105], "3": [8, 8, 8], "4": [4, 21, 21], "5": [0, 0, 0], "6": [66, 136, 136], "7": [1, 2, 2], "8": [0, 0, 0], "9": [0, 0, 0], "10": [3, 3, 3], "11": [9, 69, 69], "12": [0, 0, 0], "13": [0, 1, 1], "14": [1, 1, 1], "15": [0, 0, 0], "16": [58, 62, 62]}, "PAX9": {"0": [0, 0, 0], "1": [14, 17, 17], "2": [167, 185, 185], "3": [15, 15, 15], "4": [4, 25, 25], "5": [0, 0, 0], "6": [67, 132, 132], "7": [0, 0, 0], "8": [0, 0, 0], "9": [0, 0, 0], "10": [15, 16, 16], "11": [11, 68, 68], "12": [0, 3, 3], "13": [2, 5, 5], "14": [2, 2, 2], "15": [0, 0, 0], "16": [55, 57, 57]}, "ABCA8": {"0": [0, 0, 0], "1": [35, 41, 41], "2": [259, 290, 290], "3": [46, 46, 46], "4": [9, 31, 31], "5": [2, 2, 2], "6": [69, 135, 135], "7": [11, 18, 18], "8": [1, 1, 1], "9": [0, 2, 2], "10": [21, 21, 21], "11": [14, 79, 79], "12": [1, 56, 56], "13": [3, 9, 9], "14": [8, 8, 8], "15": [19, 22, 22], "16": [0, 0, 0]}, "MFAP2": {"0": [0, 0, 0], "1": [24, 28, 28], "2": [227, 251, 251], "3": [36, 36, 36], "4": [10, 31, 31], "5": [2, 3, 3], "6": [78, 153, 153], "7": [6, 11, 11], "8": [1, 1, 1], "9": [1, 1, 1], "10": [11, 11, 11], "11": [9, 49, 49], "12": [1, 40, 40], "13": [1, 4, 4], "14": [4, 4, 4], "15": [15, 20, 20], "16": [75, 80, 80]}}, "7": {"TPX2": {"0": [0, 0, 0], "1": [13, 14, 14], "2": [151, 156, 156], "3": [13, 13, 13], "4": [1, 1, 1], "5": [9, 10, 10], "6": [13, 23, 23], "7": [12, 19, 19], "8": [1, 1, 1], "9": [0, 2, 2], "10": [9, 10, 10], "11": [0, 9, 9], "12": [0, 4, 4], "13": [7, 12, 12], "14": [2, 2, 2], "15": [20, 21, 21], "16": [73, 74, 74]}, "ANLN": {"0": [0, 0, 0], "1": [7, 7, 7], "2": [155, 155, 155], "3": [14, 14, 14], "4": [1, 1, 1], "5": [0, 0, 0], "6": [3, 3, 3], "7": [11, 14, 14], "8": [1, 1, 1], "9": [0, 0, 0], "10": [8, 8, 8], "11": [0, 0, 0], "12": [0, 0, 0], "13": [4, 4, 4], "14": [3, 3, 3], "15": [10, 10, 10], "16": [60, 61, 61]}, "ADAMTSL4": {"0": [0, 0, 0], "1": [26, 28, 28], "2": [201, 218, 218], "3": [21, 21, 21], "4": [6, 22, 22], "5": [6, 9, 9], "6": [35, 76, 76], "7": [8, 15, 15], "8": [2, 2, 2], "9": [0, 0, 0], "10": [17, 18, 18], "11": [14, 75, 75], "12": [0, 16, 16], "13": [2, 9, 9], "14": [7, 7, 7], "15": [7, 7, 7], "16": [0, 0, 0]}, "ASPM": {"0": [0, 0, 0], "1": [15, 17, 17], "2": [173, 176, 176], "3": [13, 13, 13], "4": [0, 0, 0], "5": [11, 12, 12], "6": [12, 26, 26], "7": [10, 17, 17], "8": [0, 0, 0], "9": [1, 3, 3], "10": [9, 10, 10], "11": [0, 12, 12], "12": [0, 5, 5], "13": [6, 9, 9], "14": [1, 1, 1], "15": [4, 4, 4], "16": [71, 72, 72]}, "DEFB1": {"0": [0, 0, 0], "1": [5, 7, 7], "2": [112, 116, 116], "3": [20, 20, 20], "4": [0, 2, 2], "5": [0, 0, 0], "6": [21, 43, 43], "7": [11, 16, 16], "8": [0, 0, 0], "9": [0, 0, 0], "10": [6, 7, 7], "11": [1, 16, 16], "12": [0, 7, 7], "13": [5, 10, 10], "14": [1, 1, 1], "15": [5, 6, 6], "16": [25, 26, 26]}, "C1QTNF6": {"0": [0, 0, 0], "1": [29, 31, 31], "2": [232, 249, 249], "3": [10, 10, 10], "4": [2, 6, 6], "5": [0, 1, 1], "6": [59, 118, 118], "7": [8, 16, 16], "8": [1, 1, 1], "9": [0, 0, 0], "10": [12, 12, 12], "11": [9, 54, 54], "12": [0, 0, 0], "13": [3, 3, 3], "14": [1, 1, 1], "15": [1, 1, 1], "16": [53, 57, 57]}, "C3orf57": {"0": [0, 0, 0], "1": [14, 18, 18], "2": [114, 124, 124], "3": [6, 6, 6], "4": [0, 0, 0], "5": [6, 6, 6], "6": [37, 69, 69], "7": [10, 18, 18], "8": [0, 0, 0], "9": [0, 0, 0], "10": [7, 8, 8], "11": [4, 30, 30], "12": [0, 18, 18], "13": [5, 9, 9], "14": [1, 1, 1], "15": [0, 0, 0], "16": [35, 37, 37]}, "CTHRC1": {"0": [0, 0, 0], "1": [10, 11, 11], "2": [166, 170, 170], "3": [23, 23, 23], "4": [1, 1, 1], "5": [8, 8, 8], "6": [28, 48, 48], "7": [7, 13, 13], "8": [1, 1, 1], "9": [1, 2, 2], "10": [10, 11, 11], "11": [0, 11, 11], "12": [0, 3, 3], "13": [7, 11, 11], "14": [2, 2, 2], "15": [18, 19, 19], "16": [45, 46, 46]}, "ABCA8": {"0": [0, 0, 0], "1": [35, 41, 41], "2": [259, 290, 290], "3": [46, 46, 46], "4": [9, 31, 31], "5": [2, 2, 2], "6": [69, 135, 135], "7": [11, 18, 18], "8": [1, 1, 1], "9": [0, 2, 2], "10": [21, 21, 21], "11": [14, 79, 79], "12": [1, 56, 56], "13": [3, 9, 9], "14": [8, 8, 8], "15": [19, 22, 22], "16": [0, 0, 0]}, "KIF20A": {"0": [0, 0, 0], "1": [16, 18, 18], "2": [195, 200, 200], "3": [14, 14, 14], "4": [1, 1, 1], "5": [10, 11, 11], "6": [12, 28, 28], "7": [9, 16, 16], "8": [0, 0, 0], "9": [0, 2, 2], "10": [9, 9, 9], "11": [0, 12, 12], "12": [0, 5, 5], "13": [6, 10, 10], "14": [1, 1, 1], "15": [11, 12, 12], "16": [78, 79, 79]}}, "8": {"DYNC1I1": {"0": [0, 0, 0], "1": [8, 10, 10], "2": [128, 136, 136], "3": [5, 5, 5], "4": [0, 0, 0], "5": [18, 21, 21], "6": [42, 78, 78], "7": [1, 1, 1], "8": [2, 2, 2], "9": [0, 0, 0], "10": [4, 4, 4], "11": [9, 49, 49], "12": [1, 9, 9], "13": [5, 8, 8], "14": [0, 0, 0], "15": [0, 0, 0], "16": [28, 28, 28]}, "ADAMTSL4": {"0": [0, 0, 0], "1": [26, 28, 28], "2": [201, 218, 218], "3": [21, 21, 21], "4": [6, 22, 22], "5": [6, 9, 9], "6": [35, 76, 76], "7": [8, 15, 15], "8": [2, 2, 2], "9": [0, 0, 0], "10": [17, 18, 18], "11": [14, 75, 75], "12": [0, 16, 16], "13": [2, 9, 9], "14": [7, 7, 7], "15": [7, 7, 7], "16": [0, 0, 0]}, "FN1": {"0": [0, 0, 0], "1": [10, 10, 10], "2": [150, 156, 156], "3": [18, 18, 18], "4": [1, 1, 1], "5": [4, 5, 5], "6": [16, 31, 31], "7": [2, 3, 3], "8": [2, 2, 2], "9": [0, 0, 0], "10": [2, 2, 2], "11": [4, 17, 17], "12": [0, 17, 17], "13": [4, 5, 5], "14": [3, 3, 3], "15": [13, 17, 17], "16": [5, 5, 5]}, "EPHA7": {"0": [0, 0, 0], "1": [10, 12, 12], "2": [162, 172, 172], "3": [9, 9, 9], "4": [0, 0, 0], "5": [0, 0, 0], "6": [15, 34, 34], "7": [2, 3, 3], "8": [2, 2, 2], "9": [0, 0, 0], "10": [6, 6, 6], "11": [4, 18, 18], "12": [0, 0, 0], "13": [4, 5, 5], "14": [0, 0, 0], "15": [0, 0, 0], "16": [29, 30, 30]}, "SPAG5": {"0": [0, 0, 0], "1": [34, 40, 40], "2": [188, 217, 217], "3": [10, 10, 10], "4": [9, 33, 33], "5": [5, 5, 5], "6": [32, 78, 78], "7": [2, 3, 3], "8": [2, 2, 2], "9": [1, 3, 3], "10": [20, 20, 20], "11": [14, 76, 76], "12": [1, 39, 39], "13": [7, 11, 11], "14": [2, 2, 2], "15": [4, 6, 6], "16": [95, 101, 101]}, "C1orf175": {"0": [0, 0, 0], "1": [18, 20, 20], "2": [149, 161, 161], "3": [16, 16, 16], "4": [0, 0, 0], "5": [0, 0, 0], "6": [18, 38, 38], "7": [4, 8, 8], "8": [2, 2, 2], "9": [2, 3, 3], "10": [3, 3, 3], "11": [4, 24, 24], "12": [0, 8, 8], "13": [4, 10, 10], "14": [5, 5, 5], "15": [0, 0, 0], "16": [0, 0, 0]}, "CLEC3B": {"0": [0, 0, 0], "1": [35, 41, 41], "2": [246, 278, 278], "3": [15, 15, 15], "4": [8, 29, 29], "5": [4, 6, 6], "6": [79, 151, 151], "7": [1, 3, 3], "8": [2, 2, 2], "9": [0, 1, 1], "10": [17, 17, 17], "11": [14, 77, 77], "12": [1, 52, 52], "13": [6, 13, 13], "14": [3, 3, 3], "15": [20, 25, 25], "16": [0, 0, 0]}, "SUSD3": {"0": [0, 0, 0], "1": [8, 9, 9], "2": [222, 236, 236], "3": [13, 13, 13], "4": [0, 0, 0], "5": [0, 1, 1], "6": [21, 44, 44], "7": [3, 5, 5], "8": [2, 2, 2], "9": [2, 3, 3], "10": [2, 2, 2], "11": [1, 9, 9], "12": [1, 17, 17], "13": [2, 7, 7], "14": [3, 3, 3], "15": [2, 4, 4], "16": [0, 0, 0]}, "PHYHIP": {"0": [0, 0, 0], "1": [15, 20, 20], "2": [139, 152, 152], "3": [18, 18, 18], "4": [0, 0, 0], "5": [18, 22, 22], "6": [49, 91, 91], "7": [8, 14, 14], "8": [2, 2, 2], "9": [0, 0, 0], "10": [5, 5, 5], "11": [3, 14, 14], "12": [1, 31, 31], "13": [4, 6, 6], "14": [7, 7, 7], "15": [0, 0, 0], "16": [0, 0, 0]}, "TOP2A": {"0": [0, 0, 0], "1": [15, 17, 17], "2": [187, 200, 200], "3": [21, 21, 21], "4": [4, 5, 5], "5": [6, 7, 7], "6": [14, 27, 27], "7": [4, 8, 8], "8": [2, 2, 2], "9": [1, 2, 2], "10": [12, 12, 12], "11": [4, 23, 23], "12": [1, 38, 38], "13": [6, 11, 11], "14": [4, 4, 4], "15": [14, 17, 17], "16": [61, 64, 64]}}, "9": {"TGFA": {"0": [0, 0, 0], "1": [4, 4, 4], "2": [101, 108, 108], "3": [7, 7, 7], "4": [3, 6, 6], "5": [4, 4, 4], "6": [5, 10, 10], "7": [8, 13, 13], "8": [1, 1, 1], "9": [2, 4, 4], "10": [4, 5, 5], "11": [6, 32, 32], "12": [0, 16, 16], "13": [2, 4, 4], "14": [1, 1, 1], "15": [5, 5, 5], "16": [24, 25, 25]}, "ADAMTSL2": {"0": [0, 0, 0], "1": [5, 7, 7], "2": [194, 210, 210], "3": [18, 18, 18], "4": [0, 0, 0], "5": [0, 0, 0], "6": [55, 99, 99], "7": [6, 8, 8], "8": [1, 1, 1], "9": [1, 3, 3], "10": [7, 7, 7], "11": [9, 51, 51], "12": [0, 0, 0], "13": [2, 3, 3], "14": [3, 3, 3], "15": [0, 0, 0], "16": [29, 30, 30]}, "COL25A1": {"0": [0, 0, 0], "1": [0, 0, 0], "2": [263, 294, 294], "3": [0, 0, 0], "4": [0, 0, 0], "5": [0, 0, 0], "6": [0, 0, 0], "7": [3, 5, 5], "8": [2, 2, 2], "9": [2, 4, 4], "10": [1, 1, 1], "11": [0, 0, 0], "12": [0, 0, 0], "13": [0, 0, 0], "14": [0, 0, 0], "15": [0, 0, 0], "16": [18, 19, 19]}, "P4HA3": {"0": [0, 0, 0], "1": [11, 13, 13], "2": [237, 256, 256], "3": [15, 15, 15], "4": [0, 0, 0], "5": [3, 4, 4], "6": [29, 61, 61], "7": [3, 5, 5], "8": [0, 0, 0], "9": [1, 3, 3], "10": [16, 16, 16], "11": [8, 30, 30], "12": [0, 15, 15], "13": [2, 4, 4], "14": [2, 2, 2], "15": [0, 0, 0], "16": [9, 9, 9]}, "FREM2": {"0": [0, 0, 0], "1": [29, 34, 34], "2": [196, 218, 218], "3": [36, 36, 36], "4": [2, 4, 4], "5": [0, 0, 0], "6": [64, 129, 129], "7": [5, 13, 13], "8": [1, 1, 1], "9": [2, 4, 4], "10": [9, 10, 10], "11": [10, 48, 48], "12": [0, 0, 0], "13": [4, 9, 9], "14": [3, 3, 3], "15": [0, 0, 0], "16": [60, 63, 63]}, "CNTNAP2": {"0": [0, 0, 0], "1": [4, 4, 4], "2": [185, 202, 202], "3": [23, 23, 23], "4": [1, 1, 1], "5": [5, 5, 5], "6": [25, 50, 50], "7": [0, 0, 0], "8": [0, 0, 0], "9": [2, 3, 3], "10": [12, 12, 12], "11": [4, 22, 22], "12": [0, 3, 3], "13": [3, 5, 5], "14": [2, 2, 2], "15": [0, 0, 0], "16": [54, 57, 57]}, "PRUNE2": {"0": [0, 0, 0], "1": [33, 38, 38], "2": [200, 225, 225], "3": [19, 19, 19], "4": [7, 26, 26], "5": [0, 0, 0], "6": [61, 119, 119], "7": [7, 9, 9], "8": [1, 1, 1], "9": [2, 4, 4], "10": [7, 7, 7], "11": [11, 58, 58], "12": [1, 26, 26], "13": [5, 6, 6], "14": [6, 6, 6], "15": [18, 22, 22], "16": [0, 0, 0]}, "KRT19": {"0": [0, 0, 0], "1": [16, 16, 16], "2": [176, 193, 193], "3": [10, 10, 10], "4": [0, 0, 0], "5": [0, 0, 0], "6": [53, 96, 96], "7": [7, 13, 13], "8": [2, 2, 2], "9": [2, 4, 4], "10": [6, 6, 6], "11": [12, 65, 65], "12": [0, 14, 14], "13": [4, 8, 8], "14": [3, 3, 3], "15": [0, 0, 0], "16": [42, 43, 43]}, "PRR15L": {"0": [0, 0, 0], "1": [10, 11, 11], "2": [94, 102, 102], "3": [0, 0, 0], "4": [2, 2, 2], "5": [0, 0, 0], "6": [14, 27, 27], "7": [6, 7, 7], "8": [0, 0, 0], "9": [1, 3, 3], "10": [5, 5, 5], "11": [3, 17, 17], "12": [0, 0, 0], "13": [0, 1, 1], "14": [0, 0, 0], "15": [3, 5, 5], "16": [59, 60, 60]}, "HEPACAM": {"0": [0, 0, 0], "1": [0, 0, 0], "2": [255, 285, 285], "3": [0, 0, 0], "4": [0, 0, 0], "5": [0, 0, 0], "6": [0, 0, 0], "7": [0, 0, 0], "8": [0, 0, 0], "9": [2, 3, 3], "10": [0, 0, 0], "11": [0, 0, 0], "12": [0, 0, 0], "13": [0, 0, 0], "14": [0, 0, 0], "15": [0, 0, 0], "16": [0, 0, 0]}}, "10": {"AQP5": {"0": [0, 0, 0], "1": [1, 1, 1], "2": [207, 229, 229], "3": [4, 4, 4], "4": [1, 4, 4], "5": [4, 4, 4], "6": [65, 129, 129], "7": [0, 0, 0], "8": [2, 2, 2], "9": [0, 0, 0], "10": [20, 21, 21], "11": [9, 49, 49], "12": [0, 48, 48], "13": [8, 16, 16], "14": [0, 0, 0], "15": [22, 26, 26], "16": [82, 88, 88]}, "MMP11": {"0": [0, 0, 0], "1": [31, 32, 32], "2": [236, 251, 251], "3": [45, 45, 45], "4": [7, 16, 16], "5": [1, 1, 1], "6": [52, 81, 81], "7": [8, 9, 9], "8": [1, 1, 1], "9": [2, 3, 3], "10": [21, 21, 21], "11": [11, 61, 61], "12": [0, 15, 15], "13": [5, 7, 7], "14": [8, 8, 8], "15": [23, 24, 24], "16": [79, 81, 81]}, "B3GNT3": {"0": [0, 0, 0], "1": [19, 22, 22], "2": [196, 210, 210], "3": [0, 0, 0], "4": [8, 30, 30], "5": [0, 0, 0], "6": [29, 66, 66], "7": [7, 10, 10], "8": [1, 1, 1], "9": [1, 2, 2], "10": [21, 22, 22], "11": [9, 49, 49], "12": [1, 33, 33], "13": [8, 16, 16], "14": [0, 0, 0], "15": [0, 2, 2], "16": [80, 86, 86]}, "SPAG5": {"0": [0, 0, 0], "1": [34, 40, 40], "2": [188, 217, 217], "3": [10, 10, 10], "4": [9, 33, 33], "5": [5, 5, 5], "6": [32, 78, 78], "7": [2, 3, 3], "8": [2, 2, 2], "9": [1, 3, 3], "10": [20, 20, 20], "11": [14, 76, 76], "12": [1, 39, 39], "13": [7, 11, 11], "14": [2, 2, 2], "15": [4, 6, 6], "16": [95, 101, 101]}, "RTKN2": {"0": [0, 0, 0], "1": [24, 29, 29], "2": [155, 174, 174], "3": [9, 9, 9], "4": [0, 0, 0], "5": [0, 0, 0], "6": [14, 39, 39], "7": [0, 2, 2], "8": [1, 1, 1], "9": [0, 0, 0], "10": [22, 22, 22], "11": [14, 79, 79], "12": [0, 0, 0], "13": [0, 0, 0], "14": [1, 1, 1], "15": [0, 0, 0], "16": [86, 90, 90]}, "FUT2": {"0": [0, 0, 0], "1": [15, 15, 15], "2": [142, 155, 155], "3": [2, 2, 2], "4": [2, 10, 10], "5": [0, 0, 0], "6": [39, 83, 83], "7": [4, 7, 7], "8": [0, 0, 0], "9": [0, 0, 0], "10": [21, 22, 22], "11": [11, 56, 56], "12": [0, 5, 5], "13": [7, 15, 15], "14": [0, 0, 0], "15": [6, 8, 8], "16": [80, 86, 86]}, "RADIL": {"0": [0, 0, 0], "1": [27, 31, 31], "2": [150, 168, 168], "3": [29, 29, 29], "4": [0, 0, 0], "5": [0, 0, 0], "6": [28, 54, 54], "7": [0, 0, 0], "8": [0, 0, 0], "9": [0, 0, 0], "10": [21, 22, 22], "11": [12, 57, 57], "12": [0, 0, 0], "13": [0, 3, 3], "14": [7, 7, 7], "15": [0, 0, 0], "16": [0, 0, 0]}, "MS4A15": {"0": [0, 0, 0], "1": [0, 0, 0], "2": [96, 105, 105], "3": [0, 0, 0], "4": [0, 0, 0], "5": [0, 0, 0], "6": [0, 0, 0], "7": [0, 0, 0], "8": [0, 0, 0], "9": [0, 0, 0], "10": [20, 21, 21], "11": [14, 79, 79], "12": [0, 0, 0], "13": [0, 0, 0], "14": [0, 0, 0], "15": [0, 0, 0], "16": [5, 6, 6]}, "ABCA8": {"0": [0, 0, 0], "1": [35, 41, 41], "2": [259, 290, 290], "3": [46, 46, 46], "4": [9, 31, 31], "5": [2, 2, 2], "6": [69, 135, 135], "7": [11, 18, 18], "8": [1, 1, 1], "9": [0, 2, 2], "10": [21, 21, 21], "11": [14, 79, 79], "12": [1, 56, 56], "13": [3, 9, 9], "14": [8, 8, 8], "15": [19, 22, 22], "16": [0, 0, 0]}, "ATP1A2": {"0": [0, 0, 0], "1": [37, 43, 43], "2": [265, 296, 296], "3": [42, 42, 42], "4": [0, 0, 0], "5": [10, 12, 12], "6": [72, 139, 139], "7": [6, 9, 9], "8": [2, 2, 2], "9": [0, 0, 0], "10": [19, 20, 20], "11": [13, 75, 75], "12": [0, 59, 59], "13": [10, 16, 16], "14": [8, 8, 8], "15": [18, 22, 22], "16": [0, 0, 0]}}, "11": {"ADAMTSL4": {"0": [0, 0, 0], "1": [26, 28, 28], "2": [201, 218, 218], "3": [21, 21, 21], "4": [6, 22, 22], "5": [6, 9, 9], "6": [35, 76, 76], "7": [8, 15, 15], "8": [2, 2, 2], "9": [0, 0, 0], "10": [17, 18, 18], "11": [14, 75, 75], "12": [0, 16, 16], "13": [2, 9, 9], "14": [7, 7, 7], "15": [7, 7, 7], "16": [0, 0, 0]}, "RAD54L": {"0": [0, 0, 0], "1": [33, 39, 39], "2": [203, 233, 233], "3": [29, 29, 29], "4": [3, 12, 12], "5": [6, 7, 7], "6": [41, 89, 89], "7": [2, 5, 5], "8": [1, 1, 1], "9": [0, 2, 2], "10": [18, 18, 18], "11": [14, 78, 78], "12": [0, 38, 38], "13": [4, 7, 7], "14": [3, 3, 3], "15": [5, 7, 7], "16": [97, 103, 103]}, "RTKN2": {"0": [0, 0, 0], "1": [24, 29, 29], "2": [155, 174, 174], "3": [9, 9, 9], "4": [0, 0, 0], "5": [0, 0, 0], "6": [14, 39, 39], "7": [0, 2, 2], "8": [1, 1, 1], "9": [0, 0, 0], "10": [22, 22, 22], "11": [14, 79, 79], "12": [0, 0, 0], "13": [0, 0, 0], "14": [1, 1, 1], "15": [0, 0, 0], "16": [86, 90, 90]}, "CLEC3B": {"0": [0, 0, 0], "1": [35, 41, 41], "2": [246, 278, 278], "3": [15, 15, 15], "4": [8, 29, 29], "5": [4, 6, 6], "6": [79, 151, 151], "7": [1, 3, 3], "8": [2, 2, 2], "9": [0, 1, 1], "10": [17, 17, 17], "11": [14, 77, 77], "12": [1, 52, 52], "13": [6, 13, 13], "14": [3, 3, 3], "15": [20, 25, 25], "16": [0, 0, 0]}, "ABCA8": {"0": [0, 0, 0], "1": [35, 41, 41], "2": [259, 290, 290], "3": [46, 46, 46], "4": [9, 31, 31], "5": [2, 2, 2], "6": [69, 135, 135], "7": [11, 18, 18], "8": [1, 1, 1], "9": [0, 2, 2], "10": [21, 21, 21], "11": [14, 79, 79], "12": [1, 56, 56], "13": [3, 9, 9], "14": [8, 8, 8], "15": [19, 22, 22], "16": [0, 0, 0]}, "TK1": {"0": [0, 0, 0], "1": [35, 41, 41], "2": [219, 247, 247], "3": [3, 3, 3], "4": [10, 35, 35], "5": [11, 13, 13], "6": [34, 83, 83], "7": [6, 11, 11], "8": [2, 2, 2], "9": [1, 2, 2], "10": [18, 18, 18], "11": [14, 77, 77], "12": [0, 42, 42], "13": [6, 8, 8], "14": [2, 2, 2], "15": [23, 28, 28], "16": [72, 77, 77]}, "F10": {"0": [0, 0, 0], "1": [34, 40, 40], "2": [204, 228, 228], "3": [23, 23, 23], "4": [0, 0, 0], "5": [1, 1, 1], "6": [53, 106, 106], "7": [4, 7, 7], "8": [1, 1, 1], "9": [0, 0, 0], "10": [17, 17, 17], "11": [13, 75, 75], "12": [1, 47, 47], "13": [4, 10, 10], "14": [4, 4, 4], "15": [20, 21, 21], "16": [0, 0, 0]}, "MS4A15": {"0": [0, 0, 0], "1": [0, 0, 0], "2": [96, 105, 105], "3": [0, 0, 0], "4": [0, 0, 0], "5": [0, 0, 0], "6": [0, 0, 0], "7": [0, 0, 0], "8": [0, 0, 0], "9": [0, 0, 0], "10": [20, 21, 21], "11": [14, 79, 79], "12": [0, 0, 0], "13": [0, 0, 0], "14": [0, 0, 0], "15": [0, 0, 0], "16": [5, 6, 6]}, "CAPN9": {"0": [0, 0, 0], "1": [4, 6, 6], "2": [172, 183, 183], "3": [36, 36, 36], "4": [10, 36, 36], "5": [2, 2, 2], "6": [0, 0, 0], "7": [0, 0, 0], "8": [0, 0, 0], "9": [0, 0, 0], "10": [18, 18, 18], "11": [14, 79, 79], "12": [1, 18, 18], "13": [4, 6, 6], "14": [7, 7, 7], "15": [27, 32, 32], "16": [61, 64, 64]}, "ATP1A2": {"0": [0, 0, 0], "1": [37, 43, 43], "2": [265, 296, 296], "3": [42, 42, 42], "4": [0, 0, 0], "5": [10, 12, 12], "6": [72, 139, 139], "7": [6, 9, 9], "8": [2, 2, 2], "9": [0, 0, 0], "10": [19, 20, 20], "11": [13, 75, 75], "12": [0, 59, 59], "13": [10, 16, 16], "14": [8, 8, 8], "15": [18, 22, 22], "16": [0, 0, 0]}}, "12": {"KIAA1324": {"0": [0, 0, 0], "1": [7, 9, 9], "2": [16, 19, 19], "3": [14, 14, 14], "4": [3, 3, 3], "5": [5, 6, 6], "6": [28, 49, 49], "7": [5, 9, 9], "8": [1, 1, 1], "9": [0, 0, 0], "10": [11, 11, 11], "11": [3, 16, 16], "12": [1, 54, 54], "13": [2, 6, 6], "14": [4, 4, 4], "15": [17, 20, 20], "16": [73, 76, 76]}, "CLEC3B": {"0": [0, 0, 0], "1": [35, 41, 41], "2": [246, 278, 278], "3": [15, 15, 15], "4": [8, 29, 29], "5": [4, 6, 6], "6": [79, 151, 151], "7": [1, 3, 3], "8": [2, 2, 2], "9": [0, 1, 1], "10": [17, 17, 17], "11": [14, 77, 77], "12": [1, 52, 52], "13": [6, 13, 13], "14": [3, 3, 3], "15": [20, 25, 25], "16": [0, 0, 0]}, "RSPH1": {"0": [0, 0, 0], "1": [4, 4, 4], "2": [170, 180, 180], "3": [8, 8, 8], "4": [0, 0, 0], "5": [4, 5, 5], "6": [27, 51, 51], "7": [4, 6, 6], "8": [0, 0, 0], "9": [0, 0, 0], "10": [10, 10, 10], "11": [5, 34, 34], "12": [1, 51, 51], "13": [3, 4, 4], "14": [0, 0, 0], "15": [2, 2, 2], "16": [62, 63, 63]}, "CCDC78": {"0": [0, 0, 0], "1": [5, 7, 7], "2": [151, 164, 164], "3": [7, 7, 7], "4": [0, 0, 0], "5": [0, 0, 0], "6": [9, 17, 17], "7": [2, 3, 3], "8": [0, 0, 0], "9": [0, 0, 0], "10": [12, 12, 12], "11": [9, 54, 54], "12": [1, 63, 63], "13": [8, 10, 10], "14": [2, 2, 2], "15": [0, 0, 0], "16": [56, 56, 56]}, "CDC25C": {"0": [0, 0, 0], "1": [34, 40, 40], "2": [167, 196, 196], "3": [8, 8, 8], "4": [0, 0, 0], "5": [12, 14, 14], "6": [27, 61, 61], "7": [0, 1, 1], "8": [1, 1, 1], "9": [0, 2, 2], "10": [13, 13, 13], "11": [12, 70, 70], "12": [1, 52, 52], "13": [2, 3, 3], "14": [2, 2, 2], "15": [0, 0, 0], "16": [78, 84, 84]}, "ATP1A2": {"0": [0, 0, 0], "1": [37, 43, 43], "2": [265, 296, 296], "3": [42, 42, 42], "4": [0, 0, 0], "5": [10, 12, 12], "6": [72, 139, 139], "7": [6, 9, 9], "8": [2, 2, 2], "9": [0, 0, 0], "10": [19, 20, 20], "11": [13, 75, 75], "12": [0, 59, 59], "13": [10, 16, 16], "14": [8, 8, 8], "15": [18, 22, 22], "16": [0, 0, 0]}, "ZMYND10": {"0": [0, 0, 0], "1": [1, 2, 2], "2": [243, 262, 262], "3": [0, 0, 0], "4": [0, 0, 0], "5": [4, 5, 5], "6": [0, 0, 0], "7": [3, 6, 6], "8": [2, 2, 2], "9": [0, 0, 0], "10": [15, 15, 15], "11": [10, 63, 63], "12": [1, 52, 52], "13": [4, 7, 7], "14": [0, 0, 0], "15": [0, 0, 0], "16": [59, 61, 61]}, "CCDC19": {"0": [0, 0, 0], "1": [11, 11, 11], "2": [185, 203, 203], "3": [0, 0, 0], "4": [0, 0, 0], "5": [2, 2, 2], "6": [5, 17, 17], "7": [2, 3, 3], "8": [0, 0, 0], "9": [0, 0, 0], "10": [6, 6, 6], "11": [5, 42, 42], "12": [0, 58, 58], "13": [4, 4, 4], "14": [0, 0, 0], "15": [0, 0, 0], "16": [49, 49, 49]}, "ABCA8": {"0": [0, 0, 0], "1": [35, 41, 41], "2": [259, 290, 290], "3": [46, 46, 46], "4": [9, 31, 31], "5": [2, 2, 2], "6": [69, 135, 135], "7": [11, 18, 18], "8": [1, 1, 1], "9": [0, 2, 2], "10": [21, 21, 21], "11": [14, 79, 79], "12": [1, 56, 56], "13": [3, 9, 9], "14": [8, 8, 8], "15": [19, 22, 22], "16": [0, 0, 0]}, "PDK4": {"0": [0, 0, 0], "1": [33, 38, 38], "2": [229, 255, 255], "3": [42, 42, 42], "4": [10, 34, 34], "5": [4, 5, 5], "6": [73, 145, 145], "7": [6, 10, 10], "8": [1, 1, 1], "9": [1, 3, 3], "10": [17, 17, 17], "11": [14, 75, 75], "12": [1, 51, 51], "13": [10, 15, 15], "14": [8, 8, 8], "15": [21, 24, 24], "16": [0, 0, 0]}}, "13": {"AQP5": {"0": [0, 0, 0], "1": [1, 1, 1], "2": [207, 229, 229], "3": [4, 4, 4], "4": [1, 4, 4], "5": [4, 4, 4], "6": [65, 129, 129], "7": [0, 0, 0], "8": [2, 2, 2], "9": [0, 0, 0], "10": [20, 21, 21], "11": [9, 49, 49], "12": [0, 48, 48], "13": [8, 16, 16], "14": [0, 0, 0], "15": [22, 26, 26], "16": [82, 88, 88]}, "B3GNT3": {"0": [0, 0, 0], "1": [19, 22, 22], "2": [196, 210, 210], "3": [0, 0, 0], "4": [8, 30, 30], "5": [0, 0, 0], "6": [29, 66, 66], "7": [7, 10, 10], "8": [1, 1, 1], "9": [1, 2, 2], "10": [21, 22, 22], "11": [9, 49, 49], "12": [1, 33, 33], "13": [8, 16, 16], "14": [0, 0, 0], "15": [0, 2, 2], "16": [80, 86, 86]}, "COMP": {"0": [0, 0, 0], "1": [30, 33, 33], "2": [274, 304, 304], "3": [33, 33, 33], "4": [0, 4, 4], "5": [0, 0, 0], "6": [55, 112, 112], "7": [7, 12, 12], "8": [0, 0, 0], "9": [0, 2, 2], "10": [18, 19, 19], "11": [7, 36, 36], "12": [0, 36, 36], "13": [10, 19, 19], "14": [5, 5, 5], "15": [5, 8, 8], "16": [35, 38, 38]}, "C18orf34": {"0": [0, 0, 0], "1": [0, 0, 0], "2": [248, 279, 279], "3": [0, 0, 0], "4": [0, 0, 0], "5": [2, 3, 3], "6": [0, 0, 0], "7": [4, 7, 7], "8": [0, 0, 0], "9": [0, 0, 0], "10": [0, 0, 0], "11": [0, 0, 0], "12": [0, 12, 12], "13": [9, 18, 18], "14": [0, 0, 0], "15": [0, 0, 0], "16": [0, 0, 0]}, "CEACAM6": {"0": [0, 0, 0], "1": [31, 36, 36], "2": [193, 217, 217], "3": [23, 23, 23], "4": [9, 31, 31], "5": [1, 1, 1], "6": [53, 108, 108], "7": [0, 0, 0], "8": [0, 0, 0], "9": [0, 0, 0], "10": [13, 13, 13], "11": [12, 67, 67], "12": [1, 31, 31], "13": [8, 17, 17], "14": [6, 6, 6], "15": [23, 27, 27], "16": [63, 66, 66]}, "ATP1A2": {"0": [0, 0, 0], "1": [37, 43, 43], "2": [265, 296, 296], "3": [42, 42, 42], "4": [0, 0, 0], "5": [10, 12, 12], "6": [72, 139, 139], "7": [6, 9, 9], "8": [2, 2, 2], "9": [0, 0, 0], "10": [19, 20, 20], "11": [13, 75, 75], "12": [0, 59, 59], "13": [10, 16, 16], "14": [8, 8, 8], "15": [18, 22, 22], "16": [0, 0, 0]}, "TSLP": {"0": [0, 0, 0], "1": [28, 32, 32], "2": [272, 303, 303], "3": [0, 0, 0], "4": [0, 0, 0], "5": [11, 13, 13], "6": [19, 41, 41], "7": [5, 7, 7], "8": [0, 0, 0], "9": [1, 1, 1], "10": [14, 14, 14], "11": [3, 24, 24], "12": [0, 28, 28], "13": [9, 17, 17], "14": [6, 6, 6], "15": [0, 0, 0], "16": [0, 0, 0]}, "CLCA2": {"0": [0, 0, 0], "1": [29, 35, 35], "2": [170, 193, 193], "3": [36, 36, 36], "4": [9, 32, 32], "5": [2, 2, 2], "6": [12, 26, 26], "7": [0, 0, 0], "8": [0, 0, 0], "9": [0, 0, 0], "10": [5, 5, 5], "11": [12, 68, 68], "12": [0, 13, 13], "13": [9, 18, 18], "14": [0, 0, 0], "15": [0, 0, 0], "16": [6, 6, 6]}, "CHST2": {"0": [0, 0, 0], "1": [18, 20, 20], "2": [126, 142, 142], "3": [15, 15, 15], "4": [5, 13, 13], "5": [0, 0, 0], "6": [62, 91, 91], "7": [1, 3, 3], "8": [0, 0, 0], "9": [1, 1, 1], "10": [10, 10, 10], "11": [2, 27, 27], "12": [0, 10, 10], "13": [9, 16, 16], "14": [5, 5, 5], "15": [5, 5, 5], "16": [33, 36, 36]}, "FUT2": {"0": [0, 0, 0], "1": [15, 15, 15], "2": [142, 155, 155], "3": [2, 2, 2], "4": [2, 10, 10], "5": [0, 0, 0], "6": [39, 83, 83], "7": [4, 7, 7], "8": [0, 0, 0], "9": [0, 0, 0], "10": [21, 22, 22], "11": [11, 56, 56], "12": [0, 5, 5], "13": [7, 15, 15], "14": [0, 0, 0], "15": [6, 8, 8], "16": [80, 86, 86]}}, "14": {"MMP11": {"0": [0, 0, 0], "1": [31, 32, 32], "2": [236, 251, 251], "3": [45, 45, 45], "4": [7, 16, 16], "5": [1, 1, 1], "6": [52, 81, 81], "7": [8, 9, 9], "8": [1, 1, 1], "9": [2, 3, 3], "10": [21, 21, 21], "11": [11, 61, 61], "12": [0, 15, 15], "13": [5, 7, 7], "14": [8, 8, 8], "15": [23, 24, 24], "16": [79, 81, 81]}, "DMGDH": {"0": [0, 0, 0], "1": [30, 36, 36], "2": [226, 252, 252], "3": [0, 0, 0], "4": [0, 0, 0], "5": [4, 4, 4], "6": [0, 0, 0], "7": [2, 4, 4], "8": [1, 1, 1], "9": [0, 1, 1], "10": [2, 2, 2], "11": [0, 0, 0], "12": [0, 8, 8], "13": [5, 9, 9], "14": [7, 7, 7], "15": [0, 0, 0], "16": [0, 0, 0]}, "PPP2R2B": {"0": [0, 0, 0], "1": [22, 24, 24], "2": [151, 156, 156], "3": [25, 25, 25], "4": [0, 0, 0], "5": [9, 10, 10], "6": [25, 32, 32], "7": [10, 11, 11], "8": [0, 0, 0], "9": [0, 0, 0], "10": [2, 2, 2], "11": [3, 5, 5], "12": [1, 6, 6], "13": [3, 5, 5], "14": [8, 8, 8], "15": [0, 0, 0], "16": [0, 0, 0]}, "JPH2": {"0": [0, 0, 0], "1": [28, 32, 32], "2": [225, 249, 249], "3": [31, 31, 31], "4": [1, 5, 5], "5": [0, 0, 0], "6": [58, 117, 117], "7": [6, 11, 11], "8": [1, 1, 1], "9": [0, 0, 0], "10": [12, 12, 12], "11": [10, 60, 60], "12": [0, 0, 0], "13": [8, 15, 15], "14": [8, 8, 8], "15": [16, 19, 19], "16": [0, 0, 0]}, "SLAIN1": {"0": [0, 0, 0], "1": [19, 23, 23], "2": [185, 211, 211], "3": [28, 28, 28], "4": [5, 20, 20], "5": [2, 2, 2], "6": [43, 81, 81], "7": [2, 3, 3], "8": [0, 0, 0], "9": [1, 2, 2], "10": [8, 8, 8], "11": [12, 56, 56], "12": [0, 12, 12], "13": [0, 0, 0], "14": [8, 8, 8], "15": [3, 3, 3], "16": [15, 15, 15]}, "NAALAD2": {"0": [0, 0, 0], "1": [18, 22, 22], "2": [175, 186, 186], "3": [0, 0, 0], "4": [0, 0, 0], "5": [0, 0, 0], "6": [0, 0, 0], "7": [4, 8, 8], "8": [1, 1, 1], "9": [0, 2, 2], "10": [8, 8, 8], "11": [5, 40, 40], "12": [0, 2, 2], "13": [4, 7, 7], "14": [8, 8, 8], "15": [0, 0, 0], "16": [0, 0, 0]}, "PDK4": {"0": [0, 0, 0], "1": [33, 38, 38], "2": [229, 255, 255], "3": [42, 42, 42], "4": [10, 34, 34], "5": [4, 5, 5], "6": [73, 145, 145], "7": [6, 10, 10], "8": [1, 1, 1], "9": [1, 3, 3], "10": [17, 17, 17], "11": [14, 75, 75], "12": [1, 51, 51], "13": [10, 15, 15], "14": [8, 8, 8], "15": [21, 24, 24], "16": [0, 0, 0]}, "PHYHIP": {"0": [0, 0, 0], "1": [15, 20, 20], "2": [139, 152, 152], "3": [18, 18, 18], "4": [0, 0, 0], "5": [18, 22, 22], "6": [49, 91, 91], "7": [8, 14, 14], "8": [2, 2, 2], "9": [0, 0, 0], "10": [5, 5, 5], "11": [3, 14, 14], "12": [1, 31, 31], "13": [4, 6, 6], "14": [7, 7, 7], "15": [0, 0, 0], "16": [0, 0, 0]}, "ABCA8": {"0": [0, 0, 0], "1": [35, 41, 41], "2": [259, 290, 290], "3": [46, 46, 46], "4": [9, 31, 31], "5": [2, 2, 2], "6": [69, 135, 135], "7": [11, 18, 18], "8": [1, 1, 1], "9": [0, 2, 2], "10": [21, 21, 21], "11": [14, 79, 79], "12": [1, 56, 56], "13": [3, 9, 9], "14": [8, 8, 8], "15": [19, 22, 22], "16": [0, 0, 0]}, "ATP1A2": {"0": [0, 0, 0], "1": [37, 43, 43], "2": [265, 296, 296], "3": [42, 42, 42], "4": [0, 0, 0], "5": [10, 12, 12], "6": [72, 139, 139], "7": [6, 9, 9], "8": [2, 2, 2], "9": [0, 0, 0], "10": [19, 20, 20], "11": [13, 75, 75], "12": [0, 59, 59], "13": [10, 16, 16], "14": [8, 8, 8], "15": [18, 22, 22], "16": [0, 0, 0]}}, "15": {"AQP5": {"0": [0, 0, 0], "1": [1, 1, 1], "2": [207, 229, 229], "3": [4, 4, 4], "4": [1, 4, 4], "5": [4, 4, 4], "6": [65, 129, 129], "7": [0, 0, 0], "8": [2, 2, 2], "9": [0, 0, 0], "10": [20, 21, 21], "11": [9, 49, 49], "12": [0, 48, 48], "13": [8, 16, 16], "14": [0, 0, 0], "15": [22, 26, 26], "16": [82, 88, 88]}, "MMP11": {"0": [0, 0, 0], "1": [31, 32, 32], "2": [236, 251, 251], "3": [45, 45, 45], "4": [7, 16, 16], "5": [1, 1, 1], "6": [52, 81, 81], "7": [8, 9, 9], "8": [1, 1, 1], "9": [2, 3, 3], "10": [21, 21, 21], "11": [11, 61, 61], "12": [0, 15, 15], "13": [5, 7, 7], "14": [8, 8, 8], "15": [23, 24, 24], "16": [79, 81, 81]}, "PLK1": {"0": [0, 0, 0], "1": [26, 31, 31], "2": [173, 187, 187], "3": [10, 10, 10], "4": [4, 9, 9], "5": [0, 0, 0], "6": [25, 53, 53], "7": [8, 14, 14], "8": [1, 1, 1], "9": [0, 1, 1], "10": [16, 17, 17], "11": [9, 64, 64], "12": [0, 0, 0], "13": [6, 10, 10], "14": [2, 2, 2], "15": [20, 25, 25], "16": [79, 83, 83]}, "TK1": {"0": [0, 0, 0], "1": [35, 41, 41], "2": [219, 247, 247], "3": [3, 3, 3], "4": [10, 35, 35], "5": [11, 13, 13], "6": [34, 83, 83], "7": [6, 11, 11], "8": [2, 2, 2], "9": [1, 2, 2], "10": [18, 18, 18], "11": [14, 77, 77], "12": [0, 42, 42], "13": [6, 8, 8], "14": [2, 2, 2], "15": [23, 28, 28], "16": [72, 77, 77]}, "SULF1": {"0": [0, 0, 0], "1": [24, 26, 26], "2": [146, 165, 165], "3": [31, 31, 31], "4": [7, 13, 13], "5": [12, 14, 14], "6": [48, 79, 79], "7": [4, 6, 6], "8": [0, 0, 0], "9": [0, 1, 1], "10": [17, 17, 17], "11": [9, 44, 44], "12": [1, 33, 33], "13": [4, 7, 7], "14": [3, 3, 3], "15": [25, 30, 30], "16": [5, 5, 5]}, "CLEC3B": {"0": [0, 0, 0], "1": [35, 41, 41], "2": [246, 278, 278], "3": [15, 15, 15], "4": [8, 29, 29], "5": [4, 6, 6], "6": [79, 151, 151], "7": [1, 3, 3], "8": [2, 2, 2], "9": [0, 1, 1], "10": [17, 17, 17], "11": [14, 77, 77], "12": [1, 52, 52], "13": [6, 13, 13], "14": [3, 3, 3], "15": [20, 25, 25], "16": [0, 0, 0]}, "COL5A1": {"0": [0, 0, 0], "1": [17, 21, 21], "2": [220, 236, 236], "3": [23, 23, 23], "4": [9, 31, 31], "5": [6, 7, 7], "6": [72, 140, 140], "7": [6, 12, 12], "8": [2, 2, 2], "9": [1, 2, 2], "10": [11, 12, 12], "11": [10, 45, 45], "12": [0, 23, 23], "13": [5, 8, 8], "14": [2, 2, 2], "15": [23, 28, 28], "16": [0, 0, 0]}, "PDK4": {"0": [0, 0, 0], "1": [33, 38, 38], "2": [229, 255, 255], "3": [42, 42, 42], "4": [10, 34, 34], "5": [4, 5, 5], "6": [73, 145, 145], "7": [6, 10, 10], "8": [1, 1, 1], "9": [1, 3, 3], "10": [17, 17, 17], "11": [14, 75, 75], "12": [1, 51, 51], "13": [10, 15, 15], "14": [8, 8, 8], "15": [21, 24, 24], "16": [0, 0, 0]}, "CEACAM6": {"0": [0, 0, 0], "1": [31, 36, 36], "2": [193, 217, 217], "3": [23, 23, 23], "4": [9, 31, 31], "5": [1, 1, 1], "6": [53, 108, 108], "7": [0, 0, 0], "8": [0, 0, 0], "9": [0, 0, 0], "10": [13, 13, 13], "11": [12, 67, 67], "12": [1, 31, 31], "13": [8, 17, 17], "14": [6, 6, 6], "15": [23, 27, 27], "16": [63, 66, 66]}, "CAPN9": {"0": [0, 0, 0], "1": [4, 6, 6], "2": [172, 183, 183], "3": [36, 36, 36], "4": [10, 36, 36], "5": [2, 2, 2], "6": [0, 0, 0], "7": [0, 0, 0], "8": [0, 0, 0], "9": [0, 0, 0], "10": [18, 18, 18], "11": [14, 79, 79], "12": [1, 18, 18], "13": [4, 6, 6], "14": [7, 7, 7], "15": [27, 32, 32], "16": [61, 64, 64]}}, "16": {"AQP5": {"0": [0, 0, 0], "1": [1, 1, 1], "2": [207, 229, 229], "3": [4, 4, 4], "4": [1, 4, 4], "5": [4, 4, 4], "6": [65, 129, 129], "7": [0, 0, 0], "8": [2, 2, 2], "9": [0, 0, 0], "10": [20, 21, 21], "11": [9, 49, 49], "12": [0, 48, 48], "13": [8, 16, 16], "14": [0, 0, 0], "15": [22, 26, 26], "16": [82, 88, 88]}, "B3GNT3": {"0": [0, 0, 0], "1": [19, 22, 22], "2": [196, 210, 210], "3": [0, 0, 0], "4": [8, 30, 30], "5": [0, 0, 0], "6": [29, 66, 66], "7": [7, 10, 10], "8": [1, 1, 1], "9": [1, 2, 2], "10": [21, 22, 22], "11": [9, 49, 49], "12": [1, 33, 33], "13": [8, 16, 16], "14": [0, 0, 0], "15": [0, 2, 2], "16": [80, 86, 86]}, "RAD54L": {"0": [0, 0, 0], "1": [33, 39, 39], "2": [203, 233, 233], "3": [29, 29, 29], "4": [3, 12, 12], "5": [6, 7, 7], "6": [41, 89, 89], "7": [2, 5, 5], "8": [1, 1, 1], "9": [0, 2, 2], "10": [18, 18, 18], "11": [14, 78, 78], "12": [0, 38, 38], "13": [4, 7, 7], "14": [3, 3, 3], "15": [5, 7, 7], "16": [97, 103, 103]}, "SPAG5": {"0": [0, 0, 0], "1": [34, 40, 40], "2": [188, 217, 217], "3": [10, 10, 10], "4": [9, 33, 33], "5": [5, 5, 5], "6": [32, 78, 78], "7": [2, 3, 3], "8": [2, 2, 2], "9": [1, 3, 3], "10": [20, 20, 20], "11": [14, 76, 76], "12": [1, 39, 39], "13": [7, 11, 11], "14": [2, 2, 2], "15": [4, 6, 6], "16": [95, 101, 101]}, "RTKN2": {"0": [0, 0, 0], "1": [24, 29, 29], "2": [155, 174, 174], "3": [9, 9, 9], "4": [0, 0, 0], "5": [0, 0, 0], "6": [14, 39, 39], "7": [0, 2, 2], "8": [1, 1, 1], "9": [0, 0, 0], "10": [22, 22, 22], "11": [14, 79, 79], "12": [0, 0, 0], "13": [0, 0, 0], "14": [1, 1, 1], "15": [0, 0, 0], "16": [86, 90, 90]}, "STXBP6": {"0": [0, 0, 0], "1": [28, 33, 33], "2": [230, 253, 253], "3": [4, 4, 4], "4": [0, 0, 0], "5": [19, 22, 22], "6": [64, 109, 109], "7": [5, 10, 10], "8": [0, 0, 0], "9": [1, 2, 2], "10": [19, 19, 19], "11": [9, 48, 48], "12": [1, 30, 30], "13": [3, 6, 6], "14": [0, 0, 0], "15": [0, 0, 0], "16": [87, 91, 91]}, "FUT2": {"0": [0, 0, 0], "1": [15, 15, 15], "2": [142, 155, 155], "3": [2, 2, 2], "4": [2, 10, 10], "5": [0, 0, 0], "6": [39, 83, 83], "7": [4, 7, 7], "8": [0, 0, 0], "9": [0, 0, 0], "10": [21, 22, 22], "11": [11, 56, 56], "12": [0, 5, 5], "13": [7, 15, 15], "14": [0, 0, 0], "15": [6, 8, 8], "16": [80, 86, 86]}, "SPDEF": {"0": [0, 0, 0], "1": [15, 18, 18], "2": [176, 201, 201], "3": [31, 31, 31], "4": [10, 33, 33], "5": [0, 0, 0], "6": [61, 122, 122], "7": [0, 0, 0], "8": [0, 0, 0], "9": [0, 0, 0], "10": [16, 17, 17], "11": [9, 55, 55], "12": [0, 22, 22], "13": [1, 1, 1], "14": [7, 7, 7], "15": [14, 18, 18], "16": [86, 89, 89]}, "KLHDC7A": {"0": [0, 0, 0], "1": [30, 35, 35], "2": [158, 175, 175], "3": [21, 21, 21], "4": [0, 0, 0], "5": [0, 0, 0], "6": [60, 124, 124], "7": [3, 4, 4], "8": [1, 1, 1], "9": [1, 1, 1], "10": [12, 12, 12], "11": [13, 67, 67], "12": [0, 0, 0], "13": [2, 7, 7], "14": [4, 4, 4], "15": [0, 0, 0], "16": [83, 88, 88]}, "TNFRSF18": {"0": [0, 0, 0], "1": [19, 23, 23], "2": [189, 211, 211], "3": [15, 15, 15], "4": [6, 25, 25], "5": [0, 0, 0], "6": [37, 86, 86], "7": [2, 3, 3], "8": [0, 0, 0], "9": [0, 1, 1], "10": [15, 15, 15], "11": [12, 70, 70], "12": [0, 0, 0], "13": [2, 3, 3], "14": [3, 3, 3], "15": [0, 0, 0], "16": [79, 84, 84]}}};




//var degs_ct1 = [{"result_gene_name":"KIF20A","cancer_type_id":1,"count":97},{"result_gene_name":"KIF18B","cancer_type_id":1,"count":96},{"result_gene_name":"MELK","cancer_type_id":1,"count":96},{"result_gene_name":"CENPF","cancer_type_id":1,"count":96},{"result_gene_name":"ADH1B","cancer_type_id":1,"count":95},{"result_gene_name":"CCL14","cancer_type_id":1,"count":95},{"result_gene_name":"DEPDC1","cancer_type_id":1,"count":94},{"result_gene_name":"EXO1","cancer_type_id":1,"count":94},{"result_gene_name":"TTK","cancer_type_id":1,"count":94},{"result_gene_name":"CDC45","cancer_type_id":1,"count":94}];
var degs_distribution = {"1": {"CCL14": {"1": [91, 91, 96]}, "CENPF": {"1": [92, 92, 97]}, "EXO1": {"1": [90, 90, 95]}, "KIF18B": {"1": [92, 92, 97]}, "TTK": {"1": [90, 90, 95]}, "MELK": {"1": [92, 92, 97]}, "DEPDC1": {"1": [90, 90, 95]}, "ADH1B": {"1": [91, 91, 96]}, "CDC45": {"1": [90, 90, 94]}, "KIF20A": {"1": [93, 93, 98]}}, "2": {"AOC3": {"2": [234, 234, 240]}, "ACACB": {"2": [238, 238, 244]}, "ASPM": {"2": [235, 235, 241]}, "TPX2": {"2": [235, 235, 241]}, "PDE2A": {"2": [237, 237, 243]}, "MELK": {"2": [240, 240, 246]}, "DEPDC1": {"2": [238, 238, 244]}, "SMYD1": {"2": [237, 237, 243]}, "CDC20": {"2": [236, 236, 242]}, "KIF20A": {"2": [242, 242, 248]}}, "3": {"NR3C2": {"3": [99, 99, 101]}, "CCL14": {"3": [92, 92, 94]}, "ASPA": {"3": [95, 95, 96]}, "SELENBP1": {"3": [89, 89, 91]}, "MTHFD1L": {"3": [101, 101, 103]}, "APOBEC3A": {"3": [91, 91, 92]}, "HBB": {"3": [92, 92, 94]}, "ADH1B": {"3": [96, 96, 98]}, "MAL": {"3": [97, 97, 99]}, "COL7A1": {"3": [92, 92, 93]}}, "4": {"RCC1": {"4": [119, 119, 121]}, "TPX2": {"4": [122, 122, 124]}, "RNASEH2A": {"4": [112, 112, 114]}, "CENPF": {"4": [111, 111, 113]}, "CKS1B": {"4": [114, 114, 116]}, "UBE2T": {"4": [127, 127, 129]}, "GPR133": {"4": [112, 112, 114]}, "SLC26A9": {"4": [113, 113, 115]}, "CDC20": {"4": [121, 121, 123]}, "MAL": {"4": [116, 116, 118]}}, "5": {"BUB1": {"5": [64, 64, 69]}, "PTPRR": {"5": [64, 64, 69]}, "C1orf115": {"5": [64, 64, 69]}, "NUF2": {"5": [65, 65, 70]}, "STYK1": {"5": [63, 63, 68]}, "EPB49": {"5": [65, 65, 70]}, "SSTR1": {"5": [64, 64, 69]}, "F2R": {"5": [64, 64, 69]}, "PBK": {"5": [65, 65, 70]}, "SH3GL3": {"5": [65, 65, 70]}}, "6": {"NR3C2": {"6": [282, 283, 286]}, "SELENBP1": {"6": [285, 286, 289]}, "HMGA2": {"6": [282, 283, 286]}, "RORC": {"6": [285, 286, 289]}, "AIM2": {"6": [279, 280, 283]}, "SERPINE1": {"6": [275, 276, 278]}, "DMBT1": {"6": [283, 283, 286]}, "GPD1L": {"6": [269, 270, 272]}, "EDN3": {"6": [273, 274, 276]}, "MAL": {"6": [303, 304, 307]}}, "7": {"NR3C2": {"7": [15, 15, 15]}, "TPX2": {"7": [16, 16, 16]}, "KIF20A": {"7": [14, 14, 14]}, "ANLN": {"7": [15, 15, 15]}, "SUSD4": {"7": [15, 15, 15]}, "ADH1B": {"7": [15, 15, 15]}, "MSLN": {"7": [15, 15, 15]}, "NXPH4": {"7": [16, 16, 16]}, "C2orf40": {"7": [14, 14, 14]}, "KLRG2": {"7": [16, 16, 16]}}, "8": {"NR3C2": {"8": [4, 4, 4]}, "SEMA3C": {"8": [4, 4, 4]}, "SELENBP1": {"8": [4, 4, 4]}, "FAM132A": {"8": [3, 3, 3]}, "PDE2A": {"8": [4, 4, 4]}, "MAL": {"8": [3, 3, 3]}, "SPOCK2": {"8": [4, 4, 4]}, "ITPR1": {"8": [4, 4, 4]}, "RTN4RL1": {"8": [4, 4, 4]}, "C2orf40": {"8": [4, 4, 4]}}, "9": {"CCNB2": {"9": [37, 37, 39]}, "CCL14": {"9": [39, 39, 40]}, "ASPM": {"9": [40, 40, 42]}, "ANLN": {"9": [38, 38, 40]}, "CXCL14": {"9": [38, 38, 40]}, "FANCD2": {"9": [39, 39, 40]}, "PTTG1": {"9": [41, 41, 43]}, "MYBL2": {"9": [41, 41, 43]}, "UBE2T": {"9": [39, 39, 41]}, "CDC20": {"9": [41, 41, 42]}}, "10": {"COL10A1": {"10": [171, 171, 174]}, "CCNB2": {"10": [171, 171, 172]}, "TPX2": {"10": [176, 176, 179]}, "ASPM": {"10": [176, 176, 179]}, "HBB": {"10": [177, 177, 180]}, "MELK": {"10": [174, 174, 177]}, "CENPF": {"10": [172, 172, 175]}, "UBE2T": {"10": [178, 178, 181]}, "SH3GL3": {"10": [179, 179, 182]}, "KIF20A": {"10": [180, 180, 183]}}, "11": {"NUF2": {"11": [106, 106, 109]}, "SELENBP1": {"11": [107, 107, 110]}, "ASPM": {"11": [107, 107, 110]}, "KIF18B": {"11": [107, 107, 110]}, "KIF14": {"11": [107, 107, 110]}, "DEPDC1": {"11": [107, 107, 110]}, "CENPF": {"11": [106, 106, 109]}, "PTTG1": {"11": [106, 106, 109]}, "UBE2T": {"11": [107, 107, 110]}, "KIF20A": {"11": [107, 107, 110]}}, "12": {"TPX2": {"12": [210, 212, 213]}, "NMU": {"12": [226, 228, 230]}, "BUB1": {"12": [225, 227, 229]}, "AGBL2": {"12": [227, 229, 231]}, "NUF2": {"12": [236, 238, 239]}, "CENPF": {"12": [214, 216, 217]}, "SPATA18": {"12": [218, 220, 221]}, "MELK": {"12": [235, 237, 238]}, "DEPDC1": {"12": [225, 227, 229]}, "CNN1": {"12": [221, 222, 224]}}, "13": {"ASPA": {"13": [36, 36, 60]}, "TMEM132A": {"13": [36, 36, 57]}, "DUOX2": {"13": [37, 37, 61]}, "HOXD13": {"13": [37, 37, 61]}, "MLC1": {"13": [34, 34, 61]}, "MSLN": {"13": [35, 35, 59]}, "NRG2": {"13": [37, 37, 63]}, "PENK": {"13": [34, 34, 59]}, "MAL": {"13": [33, 33, 58]}, "GDF10": {"13": [34, 34, 60]}}, "14": {"NR3C2": {"14": [54, 54, 54]}, "CCL14": {"14": [55, 55, 55]}, "ASPA": {"14": [57, 57, 57]}, "PLEKHG4": {"14": [54, 54, 54]}, "PDE2A": {"14": [54, 54, 54]}, "ADH1B": {"14": [53, 53, 53]}, "NNAT": {"14": [55, 55, 55]}, "NRG2": {"14": [55, 55, 55]}, "MAL": {"14": [54, 54, 54]}, "ROR1": {"14": [54, 54, 54]}}, "15": {"TPX2": {"15": [69, 69, 72]}, "COL18A1": {"15": [62, 62, 65]}, "SST": {"15": [60, 60, 62]}, "ANLN": {"15": [61, 61, 62]}, "MAL": {"15": [77, 77, 80]}, "DMBT1": {"15": [65, 65, 67]}, "SPARC": {"15": [64, 64, 67]}, "TTYH3": {"15": [61, 61, 63]}, "HBB": {"15": [64, 64, 67]}, "UBE2T": {"15": [67, 67, 69]}}, "16": {"CTSL2": {"16": [39, 39, 39]}, "E2F2": {"16": [40, 40, 40]}, "ASPM": {"16": [40, 40, 40]}, "TACC3": {"16": [39, 39, 39]}, "KIF18B": {"16": [40, 40, 40]}, "MELK": {"16": [40, 40, 40]}, "CENPF": {"16": [40, 40, 40]}, "CDC45": {"16": [39, 39, 39]}, "UBE2T": {"16": [39, 39, 39]}, "KIF20A": {"16": [40, 40, 40]}}};

legends = ['Somatic Mutations', 'Copy Number Alteration - Amplification', 'Copy Number Alteration - Deletion'];

var row_colors = ['#00cc66', '#ff4f49', '#00768f'];

var cancer_types = ['BRCA', 'BLCA', 'COAD', 'ESCA','GBM','HNSC','KIRC','KIRP','LIHC','LUAD','LUSC','OV','PRAD','READ','STAD','UCEC'];

//////////////////////////////////////////
/// stacked plot -- all cancer type /////
/////////////////////////////////////////


//////////////////////////////////////////////////////

var legend = d3.select('#legend').append('svg')
				.attr('width', 1000)
				.attr('height', 50)
				.style('position', 'relative');
var len = legend.selectAll('.rect').data(row_colors)
		.enter().append('rect')
		.attr('y', function(d, i) {
			return i * 15
		})
		.attr('width', 15)
		.attr('height', 15)
		.style('fill', function(d, i) {
			return row_colors[i];
		})

legend.selectAll('text').data(legends)
	.enter().append('text')
	.attr('x', 20)
	.attr('y', function(d, i) {return (i + 1) * 13;})
	.style('height', '15px')
	.style('font-size', '8px')
	.text(function(d, i) {
		return legends[i];
	})
	.style('fill', 'black');

var chart = d3.select('#barForGene').append('svg')
			    .attr('width', '97%')
			    .attr('height', height * 0.16)
			    .style('position', 'absolute')
			    .style('background-color', '#fff');





//prepare deg data for each cancer type
var degs_data = {};
var degs_name = {};

for (var i = 0; i < degs.length; i++) {
	var type = degs[i].cancer_type_id;
	if (degs_data.hasOwnProperty(type)){
		degs_data[type].push(degs[i].count);
	    degs_name[type].push(degs[i].result_gene_name);
	} else {
		degs_data[type] = [];
		degs_name[type] = [];
		degs_data[type].push(degs[i].count);
	    degs_name[type].push(degs[i].result_gene_name);
	}
}
var row_max = 0;
for (var item in tp53) {
	if (tp53[item][2] > row_max) {
		row_max = tp53[item][2];
	}
}
var row_colors = ['#00cc66', '#ff4f49', '#00768f'];
var rowmap = d3.scale.linear()
				.domain([0, row_max + 10])
				.range([0, 80]);
// prepare deg data for clicked cancer type
// var degs_data_ct = {};
// var degs_name_ct = {};
// for (var i = 0; i < degs_ct1.length; i++) {
// 	var type = 1;
// 	if (degs_data_ct.hasOwnProperty(type)){
// 		degs_data_ct[type].push(degs_ct1[i].count);
// 	    degs_name_ct[type].push(degs_ct1[i].result_gene_name);
// 	} else {
// 		degs_data_ct[type] = [];
// 		degs_name_ct[type] = [];
// 		degs_data_ct[type].push(degs_ct1[i].count);
// 	    degs_name_ct[type].push(degs_ct1[i].result_gene_name);
// 	}
// }

function degDistribution(ct, deg_name, row) {
	var column = -1;
	deg1 = ctdegs[ct][deg_name];
	var deg_rowmap = d3.scale.linear()
				.domain([0, row_max + 10])
				.range([0, 50]);
	for (var item in deg1) {
		if (deg1.hasOwnProperty(item)) {
			if (column == -1) {
				column = column + 1;
				continue;
			}
			var data = deg1[item];
			//console.log(data);
				canvas.append('g')
					.attr('id', 'degct')
					.attr('transform', 'translate(400,0)')
					.selectAll('.rect').data(data)
				.enter().append('rect')
				.attr('y', 40 * row)
				.attr('x', function(d,i) {
					if (i == 0) {
						return 50 * column;
					} else {
						//console.log(data[i - 1]);
						return 50 * column + deg_rowmap(data[i - 1]);	
					}			
				})
				.style('height', '19px')
				.style('width',  function(d, i) {
					if (i == 0) {
						return deg_rowmap(data[i]);
					} else {
						return deg_rowmap(data[i] - data[i - 1]);
					}
				})
				.style('fill', function(d, i) {
					return row_colors[i];
				});
		}
		column = column + 1;
	}

}

var canvas = d3.select('#section2').append('svg')
			    .attr('width', '97%')
			    .attr('height', height)
			    .style('position', 'absolute')
			    .style('background-color', 'white');

createChart(1);

//create the rows
var rows = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
canvas.selectAll('.rect').data(rows)
						.enter().append('rect')
						.attr('transform', 'translate(400,0)')
						.attr('width', 1200)
						.attr('height', '19px')
						.attr('x', 0)
						.attr('y', function(d, i) {
							console.log('get here!!!!!')
							//return 17 * (i + 1);
							return 20 * (i + 2);
						})
						.style('fill', function(d, i) {
							if (i % 2 == 0) {
								return "#3E9583";
							} else {
								return "#ffffff";
							}
						})
						.style('opacity', 0.1);

function createChart(ct) {
	//bar plot for each cancer type, for all cancer types
	//console.log(degs_data);
	// var canvas = d3.select('#section2').append('svg')
	// 		    .attr('width', '97%')
	// 		    .attr('height', height)
	// 		    .style('position', 'absolute')
	// 		    .style('background-color', 'white');

	if (d3.select('#section2').selectAll('#bar').length > 0) {
		d3.select('#section2').selectAll('#bars').remove();
		d3.select('#section2').selectAll('text').remove();
	}
	if (d3.select('#section2').selectAll("rect").length > 0) {
		d3.select('#section2').selectAll("#degct").remove();
	}
	var yscale = d3.scale.linear()
				.domain([0,10])
				.range([0,400]);

	var yAxis = d3.svg.axis();

	yAxis.orient('left')
		.scale(yscale)
		.tickSize(0)
		.tickFormat(function(d,i){ 
			return degs_name[ct][i]; })
		.tickValues(d3.range(17));
	canvas.selectAll('text').data(cancer_types)
					.enter().append('text')
						.attr('width', 80)
						.attr('height', 17)
						.attr('y', 14)
						.attr('x', function(d, i) {
							return i * 50 + 400;
						})
						.text(function(d) {
							return d;
						})
						.attr('fill', 'black')
						.style('font-size', '8px');
	var kind = canvas.append('text')
						.text(function() {
							return "DEGs for " + cancer_types[ct - 1];
						})
						.style('fill', 'orange')
						.style('font-size', '30px')
						.attr("transform", "translate(30,30)")
	var y_xis = canvas.append('g')
				  .attr("transform", "translate(100,50)")
				  .attr('id','yaxis')
				  .call(yAxis);

	var bars = canvas.append('g')
				.attr("transform", "translate(100,22)")
				.attr('id','bars')
				.selectAll('rect')
				.data(degs_data[ct])
				.enter()
				.append('rect')
				.attr('height',19)
				.attr({'x':0,'y':function(d,i){ return yscale(i)+19; }})
				.attr('width',function(d){ return 0; });


	var xscale = d3.scale.linear()
					.domain([d3.min(degs_data[ct]) - 3,d3.max(degs_data[ct])])
					.range([0,200]);
	var transit = canvas.selectAll("#bars rect")
					    .data(degs_data[ct])
					    .transition()
					    .duration(1000) 
					    .attr('height', 19)
					    .style('fill', 'grey')
					    .attr("width", function(d) {
					    	return xscale(d); 
					    });

	var transitext = d3.select('#bars')
						.selectAll('text')
						.data(degs_data[ct])
						.enter()
						.append('text')
						.transition()
						.delay(1000)
						.attr({'x':function(d) {return xscale(d)+10; },'y':function(d,i){ return yscale(i)+35; }})
						.text(function(d){ return d + ' tumors'; }).style({'fill':'black','font-size':'14px'});

	var row_colors = ['#00cc66', '#ff4f49', '#00768f'];
	var rowmap = d3.scale.linear()
					.domain([0, row_max + 10])
					.range([0, 50]);
	var row = 0;


							// .on('mouseover', function(d) {
							// 	d3.select(this)
							// 		.style('font-size', '20px');
							// })
							// .on('mouseout', function(d) {
							// 	d3.select(this)
							// 		.style('font-size', '14px')
							// })
							// .on('click', function(d) {
							// 	var ct = d3.select(this).text();
							// 	var idx = cancer_types.indexOf(ct) + 1;	
							// 	console.log(idx);
							// 	createChart(idx);
								
							// })
	//console.log("here?");
	for (var key in ctdegs[ct]) {
		row = row + 1;
		if (ctdegs[ct].hasOwnProperty(key)) {
			console.log("get here ooo");
			degDistribution(ct, key, row);
		}
	}
    // currdegs = ctdegs[ct];
    // row = 0;
    // for (var deg_name in currdegs) {
    // 	row = row + 1;
    // 	degDistribution(1, "KIF20A", 1);
    // }				



}



// function createChartCT(ct) {
// 	//bar plot for each cancer type, for all cancer types
// 	//console.log(degs_data);
// 	// if (d3.select('#section2').selectAll('#bar').length > 0) {
// 	// 	d3.select('#section2').select('svg').remove();
// 	// }
// 	// var canvas = d3.select('#section2').append('svg')
// 	// 			    .attr('width', '97%')
// 	// 			    .attr('height', height)
// 	// 			    .style('position', 'absolute')
// 	// 			    .style('background-color', 'white');
// 	var yscale = d3.scale.linear()
// 				.domain([0,10])
// 				.range([0,400]);

// 	var yAxis = d3.svg.axis();

// 	yAxis.orient('left')
// 		.scale(yscale)
// 		.tickSize(0)
// 		.tickFormat(function(d,i){ 
// 			return degs_name[ct][i]; })
// 		.tickValues(d3.range(17));

// 	var y_xis = canvas.append('g')
// 				  .attr("transform", "translate(700,50)")
// 				  .attr('id','yaxis_ct')
// 				  .call(yAxis);

// 	var bars = canvas.append('g')
// 				.attr("transform", "translate(700,22)")
// 				.attr('id','bars_ct')
// 				.selectAll('rect')
// 				.data(degs_data_ct[ct])
// 				.enter()
// 				.append('rect')
// 				.attr('height',19)
// 				.attr({'x':0,'y':function(d,i){ return yscale(i)+19; }})
// 				.attr('width',function(d){ return 0; });

// 	var xscale = d3.scale.linear()
// 					.domain([d3.min(degs_data_ct[ct]) - 3,d3.max(degs_data_ct[ct])])
// 					.range([0,500]);

// 	var transit = canvas.selectAll("#bars_ct rect")
// 					    .data(degs_data_ct[ct])
// 					    .transition()
// 					    .duration(1000) 
// 					    .attr('height', 19)
// 					    .style('fill', '#00768f')
// 					    .attr("width", function(d) {
// 					    	return xscale(d); 
// 					    });
// 	var transitext = d3.select('#bars_ct')
// 						.selectAll('text')
// 						.data(degs_data_ct[ct])
// 						.enter()
// 						.append('text')
// 						.transition()
// 						.delay(1000)
// 						.attr({'x':function(d) {return xscale(d)-100; },'y':function(d,i){ return yscale(i)+35; }})
// 						.text(function(d){ return d + ' tumors'; }).style({'fill':'white','font-size':'14px'});
// }
// //createChart(2);
// createChartCT(1);
var first_background = chart.append('rect')
							.attr('x', 0)
							.attr('y', 17)
							.attr('width', 2000)
							.attr('height', '30px')
							.style('fill', '#3E9583')
							.style('opacity', 0.1);

var firstline = chart.selectAll('text').data(cancer_types)
					.enter().append('text')
						.attr('width', 80)
						.attr('height', 17)
						.attr('y', 14)
						.attr('x', function(d, i) {
							return i * 80;
						})
						.text(function(d) {
							return d;
						})
						.attr('fill', function(d, i) {
							if (i == 0) {
								return 'orange';
							} else {
								return 'black';
							}
						})
						.on('mouseover', function(d) {
							d3.select(this)
								.style('font-size', '20px');
						})
						.on('mouseout', function(d) {
							d3.select(this)
								.style('font-size', '14px')
						})
						.on('click', function(d) {
							var ct = d3.select(this).text();
							var idx = cancer_types.indexOf(ct) + 1;	
							var rects = d3.selectAll('.textbutton');
							rects.attr('fill', 'black');
							d3.select(this)
								.attr('fill', 'orange')
							console.log("click" + idx);
							createChart(idx);
							
						})
//console.log(row_max);


//console.log(rowmap(10));
var column = -1;
for (var item in tp53) {
	if (tp53.hasOwnProperty(item)) {
		if (column == -1) {
			column = column + 1;
			continue;
		}
		var data = tp53[item];
		//console.log(data);
			chart.selectAll('.rect').data(data)
			.enter().append('rect')
			.attr('y', 17)
			.attr('x', function(d,i) {
				if (i == 0) {
					return 80 * column;
				} else {
					//console.log(data[i - 1]);
					return 80 * column + rowmap(data[i - 1]);	
				}			
			})
			.style('height', '30px')
			.style('width',  function(d, i) {
				if (i == 0) {
					return rowmap(data[i]);
				} else {
					return rowmap(data[i] - data[i - 1]);
				}
			})
			.style('fill', function(d, i) {
				return row_colors[i];
			});
	}
	column = column + 1;
}



// degDistribution(1, "KIF20A", 1);
// degDistribution(1, "CENPF", 2);

var row_colors = ['#00cc66', '#ff4f49', '#00768f'];
var maxvalues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


////////////////////
//scatter plot ////
///////////////////

//horizontal_lines = [112,358,527,514,669,747,1126,1145,1149,1189,1378,1488,1757,1802,1882,1923];
horizontal_lines = [0, 132, 333, 561, 644, 656, 663];

//posx = {"Frame_Shift_Ins": [124, 240, 239, 157, 110, 110, 201, 239, 77, 191, 86, 256, 261, 94, 234, 198, 53, 37, 257, 135, 104, 302, 224, 48, 329, 103, 65, 256, 80, 317, 195, 178, 156, 146, 223, 329, 215, 178, 281, 73, 73, 178, 73, 73, 362, 69, 341, 144, 265, 282, 130, 109, 167, 228, 316, 149, 123, 248, 163, 124, 165, 98, 195, 73, 278], "In_Frame_Ins": [176, 147, 241, 274, 274, 162], "Splice_Site": [187, 367, 331, 125, 225, 187, 187, 125, 225, 126, 307, 187, 225, 187, 331, 33, 126, 225, 33, 33, 187, 331, 331, 187, 33, 307, 331, 187, 224, 187, 261, 187, 225, 187, 126, 261, 332, 187, 307, 307, 126, 307, 126, 225, 32, 225, 225, 367, 307, 125, 33, 126, 332, 261, 225, 32, 307, 331, 32, 331, 307, 307, 331, 25, 32, 187, 224, 224, 187, 332, 367, 125, 33, 187, 224, 225, 224, 261, 33, 32, 261, 307, 33, 126, 187, 225, 307, 225, 126, 331, 33, 125, 331, 187, 225, 126, 125, 307, 331, 261, 332, 125, 225, 126, 187, 126, 331, 187, 331, 126, 261, 125, 225, 307, 261, 331, 187, 307, 331, 187, 307, 33, 187, 125, 224, 332, 307, 224, 187, 331, 33, 126, 126, 331, 307, 126, 224, 261, 125, 125, 126, 261, 307, 332], "Translation_Start_Site": [1], "Missense_Mutation": [220, 248, 279, 139, 273, 213, 194, 271, 277, 175, 275, 273, 248, 259, 242, 161, 285, 248, 248, 248, 273, 132, 204, 148, 285, 285, 273, 151, 244, 249, 271, 287, 245, 248, 214, 257, 280, 175, 285, 257, 287, 237, 238, 161, 161, 132, 159, 285, 245, 175, 176, 193, 132, 158, 248, 158, 248, 248, 141, 244, 218, 159, 248, 248, 285, 282, 248, 110, 248, 285, 283, 248, 280, 259, 280, 248, 151, 285, 241, 271, 175, 133, 272, 234, 273, 199, 273, 220, 278, 255, 135, 135, 111, 280, 132, 175, 175, 176, 266, 273, 151, 237, 279, 238, 215, 179, 141, 163, 176, 238, 246, 281, 194, 195, 175, 193, 252, 248, 173, 161, 175, 265, 245, 197, 193, 205, 194, 270, 273, 175, 273, 234, 281, 273, 194, 220, 248, 216, 175, 270, 175, 278, 248, 274, 158, 187, 255, 286, 258, 175, 175, 245, 135, 107, 286, 126, 285, 127, 173, 247, 175, 273, 273, 285, 195, 238, 273, 248, 205, 193, 342, 175, 273, 179, 141, 194, 232, 273, 173, 266, 168, 199, 193, 141, 278, 173, 179, 289, 141, 193, 273, 238, 282, 248, 126, 175, 273, 157, 136, 132, 195, 216, 193, 130, 132, 157, 255, 164, 132, 341, 220, 193, 220, 113, 286, 220, 175, 193, 179, 273, 175, 176, 175, 281, 194, 242, 272, 179, 169, 179, 157, 135, 107, 248, 272, 273, 248, 274, 175, 248, 161, 211, 245, 125, 273, 273, 278, 236, 282, 199, 232, 248, 248, 232, 205, 245, 195, 195, 175, 175, 273, 205, 273, 194, 282, 273, 162, 240, 79, 175, 259, 272, 127, 250, 273, 175, 135, 248, 248, 273, 282, 205, 282, 267, 159, 282, 273, 266, 248, 248, 282, 214, 175, 273, 273, 175, 248, 282, 245, 175, 211, 213, 163, 273, 337, 181, 275, 195, 258, 151, 282, 245, 238, 224, 176, 248, 282, 278, 248, 175, 175, 190, 248, 248, 220, 175, 175, 282, 273, 282, 282, 273, 337, 273, 282, 248, 175, 138, 273, 245, 282, 248, 337, 248, 159, 282, 175, 275, 266, 278, 175, 248, 282, 143, 175, 267, 175, 259, 248, 248, 245, 175, 138, 113, 282, 176, 175, 282, 175, 278, 275, 220, 278, 168, 248, 248, 241, 248, 248, 175, 245, 273, 245, 177, 273, 246, 248, 274, 220, 282, 110, 175, 135, 282, 273, 197, 205, 135, 176, 143, 176, 220, 282, 157, 158, 110, 179, 134, 175, 278, 195, 272, 174, 220, 273, 272, 248, 285, 273, 248, 248, 135, 248, 237, 273, 248, 126, 175, 216, 135, 209, 195, 278, 248, 163, 151, 106, 273, 193, 109, 274, 172, 282, 178, 248, 216, 273, 248, 127, 248, 158, 158, 175, 245, 281, 266, 248, 195, 248, 220, 179, 179, 282, 248, 281, 190, 155, 130, 271, 136, 238, 164, 282, 105, 220, 282, 175, 157, 179, 194, 130, 245, 238, 205, 234, 132, 248, 216, 211, 275, 273, 242, 266, 249, 267, 238, 195, 254, 175, 246, 249, 152, 273, 258, 136, 143, 245, 175, 282, 194, 238, 156, 242, 175, 193, 134, 276, 272, 273, 273, 280, 176, 244, 105, 157, 176, 180, 248, 195, 245, 275, 157, 179, 273, 168, 179, 337, 273, 193, 173, 273, 161, 175, 245, 278, 282, 245, 248, 224, 248, 245, 265, 175, 283, 238, 283, 157, 281, 105, 249, 273, 266, 280, 151, 158, 218, 280, 159, 248, 176, 179, 179, 157, 179, 218, 136, 245, 179, 179, 237, 127, 216, 248, 238, 175, 280, 136, 282, 273, 248, 337, 278, 213, 267, 282, 236, 266, 176, 110, 151, 248, 282, 110, 220, 286, 172, 248, 273, 205, 242, 173, 248, 193, 211, 270, 275, 248, 193, 163, 273, 285, 266, 151, 248, 143, 282, 132, 242, 271, 258, 175, 246, 105, 285, 133, 175, 249, 278, 220, 283, 278, 220, 159, 273, 236, 280, 175, 248, 110, 341, 125, 141, 220, 280, 193, 337, 234, 176, 196, 273, 175, 137, 173, 163, 277, 163, 194, 179, 337, 245, 273, 236, 196, 286, 266, 275, 248, 110, 151, 163, 179, 158, 179, 348, 236, 245, 248, 241, 282, 271, 239, 248, 193, 251, 283, 259, 245, 196, 220, 273, 245, 248, 141, 271, 220, 282, 272, 195, 248, 245, 175, 157, 106, 213, 175, 282, 273, 193, 245, 248, 213, 193, 351, 234, 281, 239, 272, 241, 193, 220, 213, 248, 273, 151, 249, 249, 157, 249, 249, 157, 249, 220, 257, 249, 193, 286, 266, 193, 139, 215, 193, 158, 258, 174, 275, 248, 215, 205, 176, 277, 175, 281, 280, 155, 249, 249, 195, 238, 241, 273, 159, 283, 280, 286, 245, 168, 245, 232, 132, 127, 193, 245, 245, 277, 175, 179, 216, 158, 285, 272, 175, 337, 282, 237, 281, 273, 144, 334, 163, 135, 273, 120, 144, 179, 158, 205, 275, 205, 245, 245, 337, 266, 248, 241, 110, 193, 273, 274, 331, 177, 194, 236, 224, 245, 180, 280, 239, 154, 270, 334, 161, 248, 176, 130, 278, 267, 163, 159, 250, 158, 244, 273, 275, 176, 163, 220, 193, 286, 334, 220, 110, 156, 286, 141, 163, 205, 105, 132, 282, 249, 245, 193, 273, 242, 173, 242, 57, 239, 152, 152, 286, 280, 159, 249, 161, 242, 213, 273, 259, 259, 155, 179, 163, 195, 157, 176, 234, 271, 224, 220, 245, 273, 176, 236, 234, 157, 280, 110, 151, 214, 271, 249, 158, 248, 158, 281, 132, 245, 262, 282, 242, 141, 270, 278, 158, 179, 193, 205, 193, 248, 337, 337, 163, 157, 179, 244, 193, 220, 244, 158, 158, 234, 249, 331, 273, 111, 125, 278, 163, 267, 248, 158, 267, 278, 245, 135, 283, 181, 248, 179, 215, 241, 179, 234, 241, 273, 273, 193, 220, 176, 237, 132, 193, 176, 272, 175, 179, 257, 163, 105, 282, 282, 135, 132, 273, 273, 245, 273, 157, 270, 176, 109, 277, 237, 280, 234, 275, 273, 248, 145, 251, 273, 175, 179, 179, 193, 157, 281, 132, 251, 175, 176, 262, 248, 248, 195, 157, 248, 195, 234, 273, 195, 241, 220, 248, 278, 273, 244, 195, 282, 157, 236, 176, 232, 248, 163, 250, 274, 273, 245, 175, 220, 273, 282, 216, 245, 220, 173, 248, 175, 259, 273, 195, 175, 194, 214, 278, 176, 238, 193, 163, 193, 110, 244, 195, 234, 175, 273, 176, 220, 177, 175, 248, 244, 157, 245, 163, 195, 245, 337, 273, 273, 273, 163, 125, 138, 161, 194, 176, 216, 236, 176, 248, 220, 266, 220, 175, 245, 241, 220, 132, 245, 281, 237, 273, 275, 238, 215, 175, 157, 208, 266, 163, 127, 244, 266, 241, 275, 135, 175, 282, 245, 337, 157, 199, 163, 176, 193, 285, 248, 141, 245, 141, 248, 245, 249, 279, 245, 175, 248, 181, 245, 282, 271, 173, 248, 256, 135, 237, 193, 214, 193, 107, 130, 270, 273, 273, 282, 345, 245, 175, 248, 175, 285, 176, 286, 242, 158, 175, 136, 248, 135, 337, 272, 111, 242, 248, 179, 272, 176, 271, 175, 135, 273, 175, 273, 237, 273, 273, 113, 173, 175, 245, 286, 249, 282, 248, 193, 232, 248, 158, 248, 273, 151, 175, 240, 262, 244, 193, 272, 238, 248, 220, 282, 238, 239, 220, 281, 141, 239, 244, 241, 213, 175, 249, 237, 241, 278], "In_Frame_Del": [336, 162, 113, 110, 177, 177, 250, 255, 239, 238, 265, 255, 239, 155, 177, 139, 274, 177, 268, 155, 173, 202, 282, 238, 156, 218, 252, 177, 254, 191, 178, 252], "Frame_Shift_Del": [154, 44, 229, 377, 382, 22, 294, 73, 204, 162, 333, 242, 304, 211, 209, 128, 328, 209, 251, 174, 108, 171, 211, 242, 167, 110, 342, 90, 122, 209, 303, 110, 147, 102, 131, 242, 308, 339, 115, 292, 209, 164, 203, 209, 128, 238, 391, 164, 139, 258, 249, 122, 252, 229, 64, 275, 242, 42, 154, 313, 139, 212, 194, 282, 264, 219, 199, 271, 58, 209, 283, 79, 139, 330, 297, 195, 383, 32, 342, 229, 85, 211, 37, 41, 90, 206, 302, 203, 111, 99, 27, 151, 135, 240, 135, 118, 137, 294, 191, 128, 320, 178, 58, 260, 250, 200, 238, 84, 97, 263, 248, 251, 194, 173, 36, 73, 158, 54, 154, 339, 305, 35, 294, 220, 143, 152, 148, 115, 154, 333, 212, 49, 315, 35, 154, 73, 320, 158, 209, 224, 124, 140, 330, 272, 345, 261, 284, 47, 218, 122, 277, 229, 141, 122, 342, 86, 203, 319, 209, 90, 86, 301, 103, 226, 82, 339, 229, 35, 281, 284, 266, 35, 152, 43, 242, 167, 61], "Nonsense_Mutation": [277, 204, 183, 192, 221, 192, 144, 171, 192, 287, 53, 331, 286, 180, 167, 331, 331, 294, 317, 183, 331, 342, 342, 213, 306, 213, 342, 196, 124, 196, 114, 196, 342, 331, 56, 213, 196, 280, 306, 167, 213, 196, 196, 213, 176, 342, 196, 91, 192, 213, 294, 331, 51, 198, 285, 213, 213, 91, 306, 100, 342, 196, 287, 136, 306, 342, 306, 196, 171, 196, 213, 213, 213, 146, 196, 306, 306, 91, 167, 317, 342, 124, 294, 204, 294, 306, 325, 91, 343, 94, 342, 196, 196, 342, 201, 196, 144, 171, 331, 136, 294, 201, 298, 205, 298, 136, 306, 266, 298, 166, 101, 213, 294, 196, 196, 306, 213, 91, 56, 342, 213, 331, 266, 196, 171, 38, 196, 52, 306, 103, 104, 306, 213, 298, 298, 342, 286, 68, 336, 56, 196, 204, 306, 196, 213, 192, 163, 306, 205, 144, 192, 68, 213, 199, 213, 204, 91, 136, 192, 277, 221, 306, 292, 196, 146, 196, 286, 354, 213, 68, 171, 349, 53, 213, 331, 209, 285, 183, 166, 346, 141, 52, 331, 317, 339, 343, 213, 144, 198, 167, 351, 196, 192, 236, 192, 343, 258, 298, 343, 198, 298, 298, 91, 196, 306, 221, 298, 305, 183, 65, 68, 271, 213, 103, 213, 204, 287, 306, 65, 136, 348, 342, 146, 196, 306, 342, 144, 198, 271, 192, 349, 146, 321, 196, 51, 213, 53, 331, 192, 305, 221, 204, 204, 342, 306, 213, 94, 306, 91, 213, 306, 213, 192, 342, 331, 144, 146]};
posx = {"Frame_Shift_Ins": [455, 455], "Translation_Start_Site": [1, 1, 1, 1], "Nonstop_Mutation": [1069], "Missense_Mutation": [1047, 726, 1012, 542, 545, 1047, 545, 545, 752, 636, 93, 345, 545, 274, 542, 545, 545, 75, 1047, 546, 545, 791, 453, 1043, 545, 545, 545, 545, 499, 956, 542, 545, 542, 542, 978, 545, 545, 542, 545, 545, 545, 471, 1047, 542, 545, 1047, 365, 66, 1047, 545, 151, 451, 545, 542, 545, 674, 365, 542, 546, 545, 417, 545, 542, 545, 545, 545, 542, 545, 542, 1047, 545, 453, 600, 1047, 542, 546, 545, 1047, 542, 552, 545, 542, 726, 710, 1049, 545, 453, 115, 118, 1004, 542, 545, 545, 542, 88, 726, 1047, 542, 88, 1047, 118, 1047, 726, 1047, 542, 1047, 1049, 542, 1047, 1047, 1047, 1065, 542, 1047, 1047, 546, 545, 118, 545, 1047, 542, 1043, 545, 345, 345, 1047, 1047, 545, 1047, 542, 542, 1047, 1047, 545, 545, 1047, 545, 546, 345, 1047, 545, 1047, 345, 1047, 970, 542, 1047, 545, 1047, 545, 1047, 453, 545, 1047, 1047, 1047, 1047, 545, 1047, 1047, 545, 614, 545, 1047, 1047, 546, 726, 1047, 1047, 1047, 1047, 545, 118, 726, 1047, 546, 1047, 603, 989, 545, 545, 1043, 545, 365, 1047, 118, 545, 1047, 1047, 378, 545, 545, 1047, 1047, 1021, 1047, 629, 1047, 545, 1047, 545, 1047, 453, 542, 545, 545, 345, 1047, 542, 1047, 546, 542, 453, 545, 545, 545, 542, 1004, 1047, 453, 1047, 545, 545, 545, 1047, 1047, 350, 542, 1047, 542, 1047, 345, 1047, 1047, 345, 1047, 545, 546, 545, 1047, 1047, 88, 1047, 1047, 545, 1047, 539, 1047, 542, 1047, 1047, 1047, 546, 345, 542, 542, 545, 1047, 1047, 1047, 345, 345, 345, 1047, 366, 1047, 545, 545, 420, 1047, 1043, 542, 545, 545, 545, 1047, 1047, 766, 1047, 345, 1007, 542, 545, 345, 542, 1047, 726, 1047, 546, 1047, 1037, 542, 545, 542, 1047, 1047, 111, 365, 1047, 1047, 1047, 1049, 1047, 545, 542, 1047, 545, 542, 1047, 1047, 1047, 108, 1047, 545, 1047, 1047, 1047, 1047, 1040, 1047, 1047, 1043, 1047, 545, 545, 726, 1004, 1047, 398, 545, 1047, 1047, 545, 545, 111, 344, 1047, 1047, 420, 542, 542, 545, 545, 542, 545, 1047, 545, 1047, 545, 1047, 1047, 1047, 545, 726, 1047, 542, 1044, 1047, 545, 1047, 542, 1047, 1047, 1047, 1047, 1047, 542, 542, 1047, 1047, 1047, 1047, 542, 901, 542, 1047, 1047, 345, 914, 542, 545, 1047, 542, 545, 1047, 545, 420, 542, 1047, 542, 104, 1047, 345, 1047, 1047, 545, 1047, 546, 1047, 673, 1044, 1047, 545, 726, 81, 939, 1047, 546, 1025, 1047, 545, 453, 1047, 1047, 546, 1007, 542, 345, 545, 1047, 542, 542, 726, 1047, 1047, 542, 1047, 345, 1047, 345, 453, 366, 939, 542, 1047, 545, 726, 545, 600, 542, 545, 545, 726, 545, 545, 545, 545, 542, 81, 93, 545, 542, 545, 1047, 545, 1047, 111, 545, 545, 545, 545, 542, 545, 726, 545, 545, 542, 344, 1047, 339, 545, 546, 106, 542, 1007, 90, 545, 75, 38, 545, 545, 542, 545, 545, 542, 542, 545, 542, 545, 545, 542, 118, 542, 399, 1047, 545, 1047, 542, 545, 88, 88, 88, 1047, 545, 542, 420, 1047, 545, 1047, 542, 545, 88, 345, 88, 350, 542, 81, 106, 545, 88, 364, 1047, 545, 1047, 545, 88, 1043, 357, 1021, 344, 777, 546, 545, 1052, 545, 545, 545, 545, 38, 545, 542, 726, 726, 420, 546, 545, 546, 88, 726, 1047, 224, 1047, 1047, 545, 542, 88, 546, 88, 970, 1015, 88, 1047, 106, 1047, 542, 545, 13, 545, 88, 108, 545, 1021, 542, 545, 81, 545, 545, 542, 545, 88, 545, 546, 545, 970, 545, 542, 545, 545, 1047, 115, 88, 726, 357, 1047, 1007, 108, 1043, 545, 1047, 38, 542, 658, 93, 545, 111, 1047, 88, 108, 542, 545, 111, 1047, 545, 545, 1047, 726, 909, 1047, 970, 1047, 545, 546, 545, 545, 726, 1043, 542, 345, 103, 545, 1043, 545, 453, 542, 39, 545, 88, 108, 118, 344, 111, 90, 545, 1047, 546, 1043, 1047, 90, 545, 81, 38, 1047, 542, 545, 726, 542, 118, 545, 363, 545, 971, 545, 1047, 975, 542, 542, 1047, 545, 1047, 1047, 546, 81, 1047, 542, 545, 1047, 1043, 545, 542, 542, 1043, 88, 545, 545, 1047, 545, 335, 726, 542, 545, 344, 545, 545, 545, 111, 970, 545, 542, 542, 111, 1007, 545, 545, 365, 545, 545, 453, 542, 75, 604, 104, 606, 545, 546, 542, 1040, 1047, 519, 345, 545, 542, 901, 451, 1043, 1047, 1047, 1047, 542, 542, 1047, 545, 545, 545, 545, 1047, 71, 542, 542, 542, 545, 545, 905, 542, 1049, 545, 72, 1044, 545, 81, 1047, 542, 958, 1044, 545, 545, 542, 545, 453, 542, 151, 118, 546, 542, 545, 453, 118, 546, 111, 111, 1005, 11, 1047, 1043, 1047, 118, 1043, 545, 453, 546, 1043, 378, 901, 118, 1047, 370, 88, 345, 914, 106, 420, 1047, 1035, 1043, 1047, 1047, 711, 1047, 471, 545, 542, 1047, 1052, 27, 1047, 471, 545, 545, 350, 545, 1047, 600, 11, 542, 342, 111, 87, 542, 84, 542, 545, 124, 123, 545, 345, 296, 545, 726, 542, 453, 545, 104, 107, 1047, 390, 420, 545, 118, 545, 1047, 545, 542, 65, 545, 726, 545, 38, 1047, 106, 320, 545, 1045, 542, 108, 545, 545, 453, 545, 495, 547, 545, 1047, 115, 539, 979, 1010, 1043, 542, 420, 545, 88, 345, 542, 345, 546, 108, 474, 1047, 542, 546, 886, 1047, 852, 1047, 345, 737, 818, 865, 777, 379, 545, 1047, 773, 545, 746, 38, 542, 546, 345, 1047, 1047, 545, 1047, 243, 179, 547, 412, 1021, 420, 545, 453, 545, 545, 345, 1047, 1047, 542, 546, 1047, 118, 182, 9, 1047, 111, 744, 88, 378, 542, 453, 345, 88, 600, 345, 879, 1047, 545, 1047, 542, 545, 111, 948, 545, 88, 420, 88, 1043, 545, 545, 108, 118, 405, 545, 93, 546, 545, 1047, 542, 93, 1047, 93, 1047, 345, 365, 38, 1021, 93, 545, 1047, 380, 545, 1047, 88, 350, 545, 542, 545, 545, 345, 1043, 118, 38, 108, 359, 38, 542, 546, 88, 118, 542, 378, 1043, 115, 88, 542, 542, 1029, 81, 866, 1043, 88, 1021, 345, 1047, 38, 108, 344, 1047, 364, 546, 170, 279, 350, 454, 818, 545, 93, 1047, 545, 106, 1047, 546, 576, 1025, 344, 604, 542, 111, 88, 38, 1025, 1047, 1047, 542, 12, 449, 522, 345, 93, 378, 108, 545, 1043, 350, 93, 1004, 1049, 546, 39, 1007, 1043, 39, 118, 93, 344, 1047, 118, 365, 471, 39, 545, 107, 542, 93, 1021, 545, 88, 546, 111, 1044, 1043, 545, 345, 93, 420, 1047, 495, 546, 453, 542, 1047, 542, 38, 108, 545, 88, 401, 643, 1016, 546, 1047, 1047, 545, 88, 111, 939, 345, 1047, 118, 546, 542, 542, 1047, 545, 39, 617, 546, 420, 939, 38, 545, 1047, 1047, 88, 546, 1043, 420, 545, 88, 901, 542, 88, 546, 118, 725, 420, 542, 545, 1047, 118, 1047, 88, 901, 345, 1047, 545, 992, 545, 1047, 545, 106, 1047, 1058, 345, 345, 1047, 545, 546, 545, 1047, 106, 1047, 115, 1047, 545, 604, 1021, 108, 545], "In_Frame_Del": [109, 111, 109, 111, 80, 109, 109, 109, 109, 109, 109, 109, 109, 109, 102], "Frame_Shift_Del": [682], "Nonsense_Mutation": [81, 451, 4, 272, 582, 512]};
//posy = {"Frame_Shift_Ins": [20, 32, 161, 175, 206, 220, 228, 237, 244, 320, 324, 328, 350, 389, 415, 438, 498, 530, 532, 567, 577, 709, 763, 773, 781, 787, 823, 829, 887, 911, 967, 995, 1011, 1016, 1036, 1051, 1058, 1098, 1118, 1119, 1127, 1130, 1131, 1133, 1134, 1317, 1336, 1440, 1457, 1503, 1549, 1574, 1590, 1596, 1618, 1624, 1686, 1695, 1734, 1788, 1800, 1823, 1834, 1879, 1894], "In_Frame_Ins": [533, 576, 586, 865, 1057, 1409], "Splice_Site": [62, 68, 83, 127, 132, 137, 154, 156, 176, 181, 212, 225, 252, 258, 292, 311, 318, 348, 387, 396, 407, 413, 431, 448, 461, 467, 477, 490, 549, 551, 560, 572, 600, 601, 608, 610, 623, 630, 639, 645, 654, 681, 722, 729, 736, 743, 750, 766, 785, 790, 800, 813, 821, 825, 841, 846, 849, 864, 889, 893, 905, 936, 951, 989, 994, 996, 1015, 1018, 1025, 1059, 1069, 1072, 1077, 1100, 1105, 1106, 1109, 1110, 1129, 1132, 1140, 1180, 1188, 1208, 1237, 1243, 1273, 1309, 1333, 1344, 1348, 1356, 1359, 1363, 1387, 1408, 1423, 1434, 1473, 1474, 1479, 1482, 1499, 1501, 1512, 1514, 1515, 1524, 1526, 1538, 1542, 1545, 1571, 1579, 1580, 1584, 1588, 1592, 1605, 1616, 1619, 1625, 1628, 1650, 1660, 1668, 1687, 1700, 1709, 1731, 1758, 1772, 1781, 1785, 1787, 1790, 1803, 1812, 1819, 1821, 1852, 1870, 1875, 1910], "Translation_Start_Site": [914], "Missense_Mutation": [0, 1, 3, 4, 5, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 19, 22, 24, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 44, 48, 49, 50, 51, 52, 53, 55, 58, 59, 60, 61, 65, 66, 67, 69, 71, 72, 74, 76, 77, 78, 79, 80, 81, 82, 84, 86, 87, 88, 89, 90, 91, 93, 95, 96, 98, 99, 101, 102, 103, 107, 108, 109, 111, 112, 113, 114, 116, 120, 122, 123, 124, 125, 128, 131, 134, 135, 136, 139, 140, 141, 142, 143, 144, 145, 146, 147, 150, 151, 155, 158, 159, 160, 162, 163, 166, 168, 169, 170, 172, 177, 178, 179, 180, 182, 183, 184, 185, 192, 193, 194, 195, 197, 198, 203, 204, 207, 208, 209, 213, 215, 217, 219, 221, 223, 224, 226, 227, 229, 230, 232, 233, 234, 235, 236, 239, 240, 241, 245, 246, 248, 250, 251, 253, 254, 255, 257, 259, 260, 261, 262, 263, 264, 265, 267, 268, 270, 271, 274, 275, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 293, 294, 295, 297, 298, 299, 303, 304, 306, 308, 310, 312, 313, 314, 315, 316, 319, 321, 322, 323, 325, 326, 327, 330, 331, 332, 334, 336, 338, 340, 342, 344, 345, 347, 351, 353, 354, 355, 357, 358, 360, 361, 362, 364, 365, 366, 367, 368, 369, 370, 371, 372, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 385, 386, 388, 390, 391, 392, 393, 394, 395, 398, 399, 400, 401, 402, 404, 405, 406, 408, 409, 410, 411, 412, 414, 416, 417, 418, 419, 420, 421, 422, 423, 425, 426, 427, 428, 429, 430, 433, 436, 437, 439, 440, 441, 442, 443, 444, 446, 447, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 460, 462, 463, 464, 465, 466, 468, 469, 470, 471, 472, 473, 474, 475, 476, 478, 479, 482, 483, 484, 485, 486, 487, 488, 489, 491, 492, 493, 494, 495, 497, 499, 500, 501, 502, 503, 505, 506, 508, 510, 511, 512, 513, 515, 516, 517, 519, 521, 522, 523, 524, 525, 527, 531, 535, 536, 537, 538, 540, 541, 544, 545, 547, 548, 550, 552, 555, 559, 561, 562, 564, 565, 566, 568, 569, 573, 575, 578, 579, 583, 584, 585, 587, 588, 589, 590, 591, 592, 593, 594, 596, 599, 602, 605, 606, 607, 611, 612, 613, 615, 618, 619, 620, 621, 622, 624, 625, 628, 631, 633, 634, 636, 637, 638, 640, 642, 643, 644, 646, 647, 649, 651, 652, 657, 658, 661, 662, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 678, 679, 680, 682, 683, 684, 685, 686, 688, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 703, 704, 705, 706, 710, 711, 712, 714, 715, 716, 717, 718, 719, 720, 721, 723, 724, 725, 726, 727, 728, 732, 733, 734, 735, 737, 738, 739, 740, 741, 742, 744, 746, 747, 748, 749, 751, 752, 754, 755, 756, 757, 758, 759, 760, 761, 764, 765, 767, 768, 769, 771, 772, 774, 775, 778, 782, 783, 784, 786, 788, 789, 792, 793, 795, 796, 797, 799, 803, 808, 809, 810, 811, 812, 814, 815, 817, 818, 820, 822, 824, 826, 827, 830, 831, 834, 837, 840, 843, 844, 845, 847, 848, 850, 851, 852, 854, 856, 857, 858, 859, 862, 863, 866, 868, 869, 870, 874, 876, 878, 879, 880, 883, 884, 885, 886, 888, 891, 892, 897, 898, 899, 900, 901, 902, 903, 906, 909, 912, 913, 916, 917, 918, 919, 920, 921, 922, 923, 925, 926, 927, 928, 934, 935, 939, 940, 941, 942, 946, 947, 948, 952, 954, 957, 959, 960, 963, 964, 965, 968, 969, 972, 973, 975, 976, 977, 978, 979, 983, 985, 988, 990, 993, 997, 998, 999, 1000, 1001, 1002, 1003, 1005, 1006, 1007, 1008, 1009, 1010, 1013, 1014, 1017, 1020, 1022, 1023, 1024, 1026, 1027, 1028, 1029, 1030, 1031, 1034, 1038, 1041, 1042, 1043, 1044, 1046, 1047, 1048, 1049, 1052, 1053, 1056, 1061, 1062, 1063, 1065, 1067, 1068, 1070, 1074, 1076, 1078, 1081, 1082, 1084, 1085, 1086, 1087, 1090, 1092, 1093, 1094, 1095, 1096, 1097, 1099, 1102, 1104, 1107, 1108, 1112, 1113, 1116, 1121, 1122, 1123, 1124, 1125, 1126, 1128, 1135, 1136, 1138, 1139, 1141, 1142, 1143, 1145, 1146, 1147, 1149, 1151, 1152, 1153, 1155, 1159, 1160, 1161, 1162, 1164, 1165, 1166, 1167, 1169, 1170, 1171, 1173, 1174, 1176, 1177, 1178, 1181, 1182, 1184, 1185, 1186, 1187, 1189, 1190, 1191, 1193, 1194, 1195, 1196, 1197, 1198, 1200, 1201, 1202, 1204, 1205, 1206, 1207, 1209, 1212, 1215, 1216, 1217, 1218, 1219, 1224, 1225, 1226, 1227, 1230, 1231, 1234, 1235, 1236, 1238, 1244, 1245, 1247, 1248, 1249, 1251, 1254, 1256, 1257, 1258, 1259, 1261, 1265, 1266, 1268, 1270, 1274, 1275, 1276, 1277, 1278, 1281, 1282, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1293, 1294, 1296, 1298, 1299, 1300, 1301, 1302, 1303, 1305, 1307, 1308, 1310, 1312, 1313, 1314, 1315, 1319, 1320, 1322, 1323, 1325, 1328, 1329, 1331, 1332, 1334, 1337, 1338, 1340, 1341, 1342, 1345, 1346, 1349, 1350, 1351, 1352, 1353, 1354, 1355, 1357, 1358, 1360, 1364, 1365, 1367, 1368, 1369, 1370, 1371, 1373, 1374, 1375, 1376, 1380, 1381, 1383, 1384, 1385, 1386, 1388, 1389, 1390, 1392, 1393, 1394, 1395, 1396, 1397, 1399, 1400, 1402, 1403, 1404, 1405, 1406, 1407, 1411, 1414, 1415, 1416, 1417, 1418, 1420, 1421, 1422, 1424, 1426, 1427, 1431, 1433, 1435, 1436, 1439, 1441, 1443, 1444, 1445, 1446, 1448, 1449, 1451, 1452, 1453, 1456, 1459, 1460, 1462, 1464, 1465, 1466, 1467, 1468, 1469, 1470, 1471, 1472, 1475, 1476, 1477, 1480, 1484, 1485, 1486, 1487, 1488, 1489, 1490, 1493, 1494, 1495, 1496, 1498, 1500, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1513, 1516, 1517, 1519, 1520, 1521, 1522, 1525, 1529, 1532, 1533, 1534, 1537, 1539, 1541, 1543, 1544, 1546, 1548, 1550, 1551, 1552, 1554, 1556, 1557, 1558, 1559, 1560, 1565, 1566, 1567, 1568, 1569, 1572, 1573, 1575, 1576, 1578, 1582, 1585, 1586, 1591, 1593, 1594, 1597, 1599, 1600, 1601, 1603, 1609, 1610, 1611, 1612, 1613, 1614, 1615, 1617, 1620, 1621, 1623, 1627, 1630, 1631, 1634, 1636, 1638, 1639, 1640, 1641, 1642, 1644, 1645, 1646, 1647, 1649, 1651, 1652, 1654, 1656, 1658, 1659, 1661, 1662, 1663, 1664, 1666, 1667, 1669, 1670, 1671, 1672, 1673, 1674, 1677, 1678, 1680, 1681, 1682, 1684, 1685, 1688, 1689, 1690, 1691, 1692, 1693, 1696, 1698, 1701, 1702, 1704, 1705, 1707, 1708, 1710, 1712, 1714, 1715, 1717, 1718, 1719, 1721, 1723, 1724, 1725, 1726, 1727, 1728, 1730, 1732, 1733, 1738, 1739, 1741, 1742, 1744, 1745, 1748, 1751, 1752, 1753, 1754, 1755, 1756, 1757, 1759, 1760, 1761, 1762, 1764, 1766, 1767, 1768, 1769, 1770, 1771, 1773, 1775, 1776, 1777, 1778, 1779, 1780, 1782, 1783, 1786, 1789, 1791, 1792, 1793, 1794, 1796, 1797, 1798, 1799, 1801, 1802, 1804, 1805, 1807, 1808, 1810, 1811, 1813, 1814, 1815, 1817, 1818, 1820, 1822, 1824, 1829, 1830, 1831, 1832, 1833, 1836, 1838, 1839, 1840, 1842, 1843, 1844, 1847, 1848, 1849, 1851, 1854, 1855, 1856, 1859, 1860, 1861, 1863, 1865, 1866, 1869, 1871, 1872, 1873, 1876, 1877, 1880, 1881, 1883, 1884, 1885, 1887, 1888, 1889, 1890, 1891, 1892, 1893, 1896, 1897, 1898, 1899, 1900, 1901, 1903, 1904, 1905, 1906, 1908, 1909, 1911, 1912, 1913, 1914, 1916, 1918, 1919, 1920, 1921], "In_Frame_Del": [54, 119, 121, 174, 363, 528, 539, 570, 574, 614, 632, 653, 689, 702, 762, 915, 930, 931, 958, 962, 1050, 1120, 1318, 1343, 1362, 1429, 1447, 1518, 1577, 1598, 1846, 1907], "Frame_Shift_Del": [56, 57, 63, 64, 73, 92, 97, 110, 117, 126, 130, 133, 148, 149, 152, 153, 157, 164, 165, 167, 171, 173, 186, 191, 196, 199, 201, 202, 205, 211, 214, 231, 249, 266, 269, 272, 273, 333, 337, 343, 356, 397, 445, 534, 542, 546, 553, 557, 558, 581, 595, 597, 598, 616, 617, 648, 650, 656, 660, 677, 687, 707, 708, 730, 731, 777, 779, 780, 791, 804, 806, 819, 828, 833, 839, 855, 871, 873, 875, 881, 882, 894, 895, 896, 904, 929, 937, 938, 943, 944, 949, 955, 974, 982, 984, 986, 1012, 1019, 1032, 1033, 1037, 1040, 1045, 1064, 1079, 1080, 1091, 1111, 1154, 1157, 1168, 1175, 1179, 1192, 1213, 1239, 1241, 1242, 1252, 1253, 1255, 1264, 1267, 1295, 1297, 1326, 1327, 1330, 1335, 1361, 1379, 1398, 1442, 1454, 1455, 1458, 1463, 1481, 1492, 1497, 1531, 1563, 1564, 1602, 1604, 1606, 1632, 1643, 1665, 1675, 1679, 1716, 1720, 1736, 1737, 1750, 1763, 1765, 1774, 1784, 1795, 1816, 1826, 1828, 1837, 1850, 1853, 1858, 1862, 1864, 1868, 1874, 1878, 1886, 1895, 1915, 1922], "Nonsense_Mutation": [2, 6, 11, 18, 21, 23, 25, 43, 45, 46, 47, 70, 75, 85, 94, 100, 104, 105, 106, 115, 118, 129, 138, 187, 188, 189, 190, 200, 210, 216, 218, 222, 242, 243, 247, 256, 276, 277, 296, 300, 301, 302, 305, 307, 309, 317, 329, 335, 339, 341, 346, 349, 352, 359, 373, 384, 403, 424, 432, 434, 435, 459, 480, 481, 496, 504, 507, 509, 514, 518, 520, 526, 529, 543, 554, 556, 563, 571, 580, 582, 603, 604, 609, 626, 627, 629, 635, 641, 655, 659, 663, 701, 713, 745, 753, 770, 776, 794, 798, 801, 802, 805, 807, 816, 832, 835, 836, 838, 842, 853, 860, 861, 867, 872, 877, 890, 907, 908, 910, 924, 932, 933, 945, 950, 953, 956, 961, 966, 970, 971, 980, 981, 987, 991, 992, 1004, 1021, 1035, 1039, 1054, 1055, 1060, 1066, 1071, 1073, 1075, 1083, 1088, 1089, 1101, 1103, 1114, 1115, 1117, 1137, 1144, 1148, 1150, 1156, 1158, 1163, 1172, 1183, 1199, 1203, 1210, 1211, 1214, 1220, 1221, 1222, 1223, 1228, 1229, 1232, 1233, 1240, 1246, 1250, 1260, 1262, 1263, 1269, 1271, 1272, 1279, 1280, 1283, 1292, 1304, 1306, 1311, 1316, 1321, 1324, 1339, 1347, 1366, 1372, 1377, 1378, 1382, 1391, 1401, 1410, 1412, 1413, 1419, 1425, 1428, 1430, 1432, 1437, 1438, 1450, 1461, 1478, 1483, 1502, 1523, 1530, 1535, 1536, 1547, 1553, 1555, 1570, 1595, 1607, 1608, 1622, 1626, 1633, 1635, 1648, 1676, 1694, 1706, 1711, 1729, 1740, 1743, 1747, 1749, 1806, 1809, 1825, 1827, 1835, 1841, 1845, 1857, 1867, 1882, 1902, 1917, 1923]};
posy = {"Frame_Shift_Ins": [333, 411], "Translation_Start_Site": [644, 658, 786, 1116], "Nonstop_Mutation": [656], "Missense_Mutation": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 645, 646, 648, 649, 651, 652, 653, 654, 655, 657, 659, 660, 661, 662, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 783, 784, 785, 787, 788, 789, 790, 791, 792, 793, 794, 795, 797, 798, 799, 801, 802, 803, 804, 805, 806, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1065, 1066, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185], "In_Frame_Del": [132, 258, 283, 350, 647, 709, 782, 796, 800, 807, 849, 1039, 1064, 1067, 1139], "Frame_Shift_Del": [663], "Nonsense_Mutation": [561, 584, 650, 762, 916, 935]};

variants = ['Missense_Mutation', 'Nonsense_Mutation', 'Frame_Shift_Ins','In_Frame_Del', 'Frame_Shift_Del', 'Nonstop_Mutation','Translation_Start_Site'];

// prepare data for histogram
function countBy(l) {
	var result = {};
	for (var item in l) {
		if (l[item] in result) {
			result[l[item]]++;
		} else {
			result[l[item]] = 1;
		}
	}
	return result;
}
//flatten the position x
tmplist = []
for (var i in variants) {
	var variant = variants[i];
	tmplist.push.apply(tmplist, posx[variant]);
}

var histogram_data = {};
histogram_data = countBy(tmplist);
console.log(histogram_data);
// for (var i in variants) {
// 	var variant = variants[i];
// 	histogram_data[variant] = countBy(posx[variant]);
// }
// console.log(histogram_data);


var scatter = d3.select('#section3').append('svg')
				    .attr('width', '97%')
				    .attr('height', height)
				    .style('position', 'absolute')
				    .style('background-color', 'white');

yscale = d3.scale.linear()
			.domain([0, d3.max(horizontal_lines)])
			.range([0, height - 50])
xmin = 0;
xmax = 0;
// can change to d3.min, d3.max
for (var i in variants) {
	if (xmin > d3.min(posx[variants[i]])) {
		xmin = d3.min(posx[variants[i]]);
	}
	if (xmax < d3.max(posx[variants[i]])) {
		xmax = d3.max(posx[variants[i]]);
	}
}
xscale = d3.scale.linear()
			.domain([xmin, xmax])
			.range([0, width])

// horizontal lines to seperate each cancer type
scatter.selectAll('line').data(horizontal_lines)
		.enter()
		.append('line')
		.attr("transform", "translate(100,50)")
		.attr('x1', 0)
		.attr('x2', width)
		.attr('y1', function(d) {
			return yscale(d);
		})
		.attr('y2', function(d) {
			return yscale(d);
		})
		.attr('width', width)
		.attr('stroke', 'gray')
		.attr('stroke-width', '0.5')

//////////////////////////////
// change to ordinal scale ///
//////////////////////////////
colors = ['#819090', 'red', 'black', 'blue', 'purple', 'green', 'yellow', 'orange'];


// mark of each cancer type
count = 0;
scatter.append('g')
		.attr('transform', 'translate(8, 50)')
		.selectAll('text').data(cancer_types)
		.enter().append('text')
		.style("text-anchor", "start")
		.attr('x', 0)
		// .attr('y', function(d, i) {
		// 	if (i == 0) {
		// 		return 0;
		// 	} else {
		// 		return yscale(horizontal_lines[i]);
		// 	}
		// })
		.attr('y', function(d, i) {
			return yscale(horizontal_lines[i]);
		})
		.text(function(d) {
			return d;
		})
		.style('font-size', '7px')
		//.attr('transform', 'translate(0, 50)')
		.attr('transform', function(d, i) {
			if (i == 0) {
				return "translate(0,0)";
			} else {
				return "translate(0," + yscale(horizontal_lines[i]) + ")";
			}
		})
		.attr('transform', function(d, i) {
			return "rotate(-15, 0, " + yscale(horizontal_lines[i]) +")";
			
		});

for (var i in variants) {
	var variant = variants[i];
	//console.log('get to ' + variant)
	scatter.selectAll(variant).data(posx[variant])
		.enter().append('circle')
		.attr('class', variant)
		.attr("transform", "translate(100,50)")
		.attr('r', 3)
		.attr('cx', function(d) {
			return xscale(d);
		})
		.attr('cy', function(d, i) {
			return yscale(posy[variant][i]);
		})
		.style('fill', function(d) {
			//console.log(colors[i]);
			return colors[i];
		})
}


// button for enable/disable dots on scatter plot
scatter.selectAll('button').data(variants)
		.enter().append('text')
		.attr('class', 'button')
		.attr("transform", "translate(0, 30)")
		.attr('x', function(d, i) {
			return 150 * i;
		})
		.attr('y', 0)
		.text(function(d) {
			console.log(d);
			return d;
		})
		.style('fill', function(d, i) {
			return colors[i];
		})
		.on('mouseover', function(d) {
			tempColor = this.style.fill;
			d3.select(this)
				.style('opacity', 0.5)
		})
		.on('mouseout', function(d) {
			d3.select(this)
				.style('opacity', 1)
		})
		.on('click',  function(d) {
			console.log(scatter.selectAll('.' + d));
			//var visible = true;
			if (scatter.selectAll('.' + d).classed('change0') == true) {
				scatter.selectAll('.' + d).classed('change0', false);
				scatter.selectAll('.' + d).attr('r', 3);
			} else {
				//console.log('false');
				scatter.selectAll('.' + d).classed('change0', true);
				scatter.selectAll('.' + d).attr('r', 1);
			}

		});

