'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
let councils = [{
  name: 'Arts and Humanities Research Council',
  short: 'AHRC',
  value: 'AHRC',
  index: 0
}, {
  name: 'Biotechnology and Biological Sciences Research Council',
  short: 'BBSRC',
  value: 'BBSRC',
  index: 1
}, {
  name: 'Economic and Social Research Council',
  short: 'ESRC',
  value: 'ESRC',
  index: 2
}, {
  name: 'Engineering and Physical Sciences Research Council',
  short: 'EPSRC',
  value: 'EPSRC',
  index: 3
}, {
  name: 'Innovate UK',
  short: '',
  value: 'Innovate UK',
  index: 4
}, {
  name: 'Medical Research Council',
  short: 'MRC',
  value: 'MRC',
  index: 5
}, {
  name: 'Natural Environment Research Council',
  short: 'NERC',
  value: 'NERC',
  index: 6
}, {
  name: 'Research England',
  short: '',
  value: 'Research England',
  index: 7
}, {
  name: 'Science and Technology Facilities Council',
  short: 'STFC',
  value: 'STFC',
  index: 8
}, {
  name: 'UK Research and Innovation',
  short: 'UKRI',
  value: 'UKRI',
  index: 9
}];

const allCouncils = exports.allCouncils = councils;

let ethical = [{
  name: 'Animals',
  index: 0
}, {
  name: 'Human participants',
  index: 1
}, {
  name: 'Stem cells',
  index: 2
}, {
  name: 'Travel to hostile countries',
  index: 3
}, {
  name: 'Work with developing/ODA countries ',
  index: 4
}, {
  name: 'Responsible Innovation considerations',
  index: 5
}, {
  name: 'Other',
  index: 6
}, {
  name: 'Not applicable',
  index: 7
}];
const ethicalReasons = exports.ethicalReasons = ethical;

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const shortMonths = exports.shortMonths = months;

let applicantTypes = [{
  name: 'Lead applicant',
  index: 0
}, {
  name: 'Principal investigator',
  index: 1
}, {
  name: 'Co-investigator',
  index: 2
}, {
  name: 'Researcher',
  index: 3
}, {
  name: 'Business partner',
  index: 4
}, {
  name: 'Technician',
  index: 5
}, {
  name: 'Fellow',
  index: 6
}, {
  name: 'Student',
  index: 7
}, {
  name: 'Admin staff',
  index: 8
}];

const allApplicantTypes = exports.allApplicantTypes = applicantTypes;

let allOrganisations = [{
  name: 'Lead applicant',
  index: 0
}, {
  name: 'Principal investigator',
  index: 1
}, {
  name: 'Co-investigator',
  index: 2
}, {
  name: 'Researcher',
  index: 3
}, {
  name: 'Business partner',
  index: 4
}, {
  name: 'Technician',
  index: 5
}, {
  name: 'Fellow',
  index: 6
}, {
  name: 'Student',
  index: 7
}, {
  name: 'Admin staff',
  index: 8
}];

const allOrgs = exports.allOrgs = allOrganisations;

let allEductionalOrgs = [{ name: 'Abertay University in Dundee' }, { name: 'Aberystwyth University (Prifysgol Aberystwyth)' }, { name: 'Anglia Ruskin University' }, { name: 'Anglo-European College of Chiropractic' }, { name: 'Archbishop of Canterbury College, The' }, { name: 'Arden University' }, { name: 'Arts University Bournemouth' }, { name: 'Ashridge Business School' }, { name: 'Aston University' }, { name: 'Bangor University (Prifysgol Bangor)' }, { name: 'Bath Spa University' }, { name: 'Birkbeck, London' }, { name: 'Birmingham City University' }, { name: 'Bishop Grossteste University' }, { name: 'Blackpool and the Fylde College' }, { name: 'Bournemouth University' }, { name: 'BPP University' }, { name: 'Brunel University London' }, { name: 'Buckinghamshire New University' }, { name: 'Canterbury Christ Church University' }, { name: 'Cardiff Metropolitan University (Prifysgol Metropolitan Caerdydd)' }, { name: 'Cardiff University (Prifysgol Caerdydd)' }, { name: 'City University London' }, { name: 'Cornwall College Group' }, { name: 'Courtauld Institute of Art' }, { name: 'Coventry University' }, { name: 'Cranfield University' }, { name: 'De Montfort University' }, { name: 'Durham University' }, { name: 'Edge Hill University' }, { name: 'Edinburgh Napier University' }, { name: 'Falmouth University' }, { name: 'Foundation degrees' }, { name: 'Glasgow Caledonian University' }, { name: 'Glyndŵr University (Prifysgol Glyndŵr)' }, { name: 'Goldsmiths, London' }, { name: 'Grimsby Institute of Higher Education' }, { name: 'Guildhall School of Music and Drama' }, { name: 'Harper Adams University' }, { name: 'Hartpury University' }, { name: 'Heriot-Watt University' }, { name: 'Heythrop College (degrees awarded by University of London)' }, { name: 'Hull College' }, { name: 'Imperial College of Science, Technology and Medicine' }, { name: 'Institute of Cancer Research' }, { name: 'Institute of Education, London' }, { name: 'Keele University' }, { name: 'King’s College London' }, { name: 'Kingston University' }, { name: 'Lancaster University' }, { name: 'Leeds Arts University' }, { name: 'Leeds Beckett University' }, { name: 'Leeds City College' }, { name: 'Leeds Trinity University' }, { name: 'Liverpool Hope University' }, { name: 'Liverpool John Moores University' }, { name: 'Liverpool School of Tropical Medicine' }, { name: 'London Business School' }, { name: 'London Institute of Banking and Finance, The' }, { name: 'London Metropolitan University' }, { name: 'London School of Economics and Political Science, LSE' }, { name: 'London School of Hygiene and Tropical Medicine' }, { name: 'London South Bank University' }, { name: 'Loughborough University' }, { name: 'Manchester Metropolitan University' }, { name: 'Middlesex University' }, { name: 'NCG' }, { name: 'New College Durham' }, { name: 'Newcastle College' }, { name: 'Newcastle University' }, { name: 'Newman University, Birmingham' }, { name: 'Northumbria University Newcastle' }, { name: 'Norwich University of the Arts' }, { name: 'Nottingham Trent University' }, { name: 'Open University, The' }, { name: 'Oxford Brookes University' }, { name: 'Plymouth University' }, { name: 'Queen Margaret University,Edinburgh' }, { name: 'Queen Mary, London' }, { name: 'Queen’s University Belfast' }, { name: 'Ravensbourne' }, { name: "Regent's University, London" }, { name: 'Richmond, The American International University in London' }, { name: 'Robert Gordon University, Aberdeen' }, { name: 'Rose Bruford, College of Theatre and Performance' }, { name: 'Royal Academy of Music' }, { name: 'Royal Agricultural University' }, { name: 'Royal Central School of Speech and Drama' }, { name: 'Royal College of Art' }, { name: 'Royal College of Music' }, { name: 'Royal College of Nursing' }, { name: 'Royal Conservatoire of Scotland' }, { name: 'Royal Holloway, London' }, { name: 'Royal Northern College of Music' }, { name: 'Royal Veterinary College, The' }, { name: 'School of Oriental and African Studies (SOAS), London' }, { name: 'Sheffield Hallam University' }, { name: 'Solent University' }, { name: 'St George’s, London' }, { name: 'St Mary’s University, Twickenham' }, { name: 'Staffordshire University' }, { name: 'Swansea University (Prifysgol Abertawe)' }, { name: 'Teesside University' }, { name: 'Trinity Laban Conservatoire of Music and Dance' }, { name: 'University College Birmingham' }, { name: 'University College London UCL' }, { name: 'University College of Estate Management' }, { name: 'University College of Osteopathy' }, { name: 'University for the Creative Arts' }, { name: 'University of Aberdeen' }, { name: 'University of Bath' }, { name: 'University of Bedfordshire' }, { name: 'University of Birmingham' }, { name: 'University of Bolton' }, { name: 'University of Bradford' }, { name: 'University of Brighton' }, { name: 'University of Bristol' }, { name: 'University of Buckingham' }, { name: 'University of Cambridge' }, { name: 'University of Central Lancashire' }, { name: 'University of Chester' }, { name: 'University of Chichester' }, { name: 'University of Cumbria' }, { name: 'University of Derby' }, { name: 'University of Dundee' }, { name: 'University of East Anglia, UEA' }, { name: 'University of East London, UEL' }, { name: 'University of Edinburgh' }, { name: 'University of Essex' }, { name: 'University of Exeter' }, { name: 'University of Glasgow' }, { name: 'University of Gloucestershire' }, { name: 'University of Greenwich' }, { name: 'University of Hertfordshire' }, { name: 'University of Huddersfield' }, { name: 'University of Hull' }, { name: 'University of Kent' }, { name: 'University of Law' }, { name: 'University of Leeds' }, { name: 'University of Leicester' }, { name: 'University of Lincoln' }, { name: 'University of Liverpool' }, { name: 'University of London' }, { name: 'University of Manchester' }, { name: 'University of Northampton, The' }, { name: 'University of Nottingham' }, { name: 'University of Oxford' }, { name: 'University of Portsmouth' }, { name: 'University of Reading' }, { name: 'University of Roehampton' }, { name: 'University of Salford' }, { name: 'University of Sheffield' }, { name: 'University of South Wales (Prifysgol De Cymru)' }, { name: 'University of Southampton' }, { name: 'University of St Andrews' }, { name: 'University of St Mark and St John, Plymouth' }, { name: 'University of Stirling' }, { name: 'University of Strathclyde' }, { name: 'University of Suffolk' }, { name: 'University of Sunderland' }, { name: 'University of Surrey' }, { name: 'University of Sussex' }, { name: 'University of the Arts, London' }, { name: 'University of the Highlands and Islands' }, { name: 'University of the West of England, Bristol' }, { name: 'University of the West of Scotland' }, { name: 'University of Ulster' }, { name: 'University of Wales (Prifysgol Cymru)' }, { name: 'University of Wales Trinity Saint David (Prifysgol Cymru Y Drindod Dewi Sant)' }, { name: 'University of Warwick' }, { name: 'University of West London' }, { name: 'University of Westminster' }, { name: 'University of Winchester, The' }, { name: 'University of Wolverhampton' }, { name: 'University of Worcester' }, { name: 'University of York' }, { name: 'Warwickshire College' }, { name: 'Writtle University College' }, { name: 'York St John University' }];

const allOrgs2 = exports.allOrgs2 = allEductionalOrgs;

let megaDataList = [{
  id: 'OPP124',
  name: 'UK-Canada Social Research Team Grants',
  funder: 'AHRC',
  org: 'University of Cardiff',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'overdue'
}, {
  id: 'OPP125',
  name: 'Strength in places Round 3',
  funder: 'EPSRC',
  org: 'Oxford University',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'ready'
}, {
  id: 'OPP131',
  name: 'Public transport infrastructure development: tariff reduction and inter-connectivity Part III',
  funder: 'AHRC',
  org: 'Bristol University',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'change'
}, {
  id: 'OPP132',
  name: 'Responsive mode',
  funder: 'AHRC',
  org: 'University of Hardknocks',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'progress'
}, {
  id: 'OPP134',
  name: 'UK-Canada Diabetes Research Team Grants',
  funder: 'AHRC',
  org: 'Birmingham University',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'progress'
}, {
  id: 'OPP135',
  name: 'UK social research for the next decade Part III',
  funder: 'Innovate UK',
  org: 'Swindon Polytechnic',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'progress'
}, {
  id: 'OPP137',
  name: 'Electric battery innovation for land-based travel',
  funder: 'AHRC',
  org: 'Imperial College London',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'ready'
}, {
  id: 'OPP138',
  name: 'Entomophagy - acceptable levels of crunchiness for a post-apocalyptic world',
  funder: 'BBSRC',
  org: 'Queen Mary College',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'complete'
}, {
  id: 'OPP139',
  name: 'Salt-water gill adaptations in special transmorphogenic augementation',
  funder: 'MRC',
  org: 'King College, University of London',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'complete'
}, {
  id: 'OPP140',
  name: 'Re-icing polar regions feasibility Part IV',
  funder: 'STFC',
  org: 'Newport University',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'progress'
}, {
  id: 'OPP141',
  name: 'Reforestation and carbon capture',
  funder: 'NERC',
  org: 'East Anglia University',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'progress'
}, {
  id: 'OPP143',
  name: 'Hydro-batteries and green energy storage in the environment',
  funder: 'AHRC',
  org: 'UWE, Bristol',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'progress'
}, {
  id: 'OPP145',
  name: 'Public transport infrastructure development: green power Part IV',
  funder: 'Research England',
  org: 'Fulchester University',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'progress'
}, {
  id: 'OPP124',
  name: 'UK-Canada Social Research Team Grants',
  funder: 'AHRC',
  org: 'University of Cardiff',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'overdue'
}, {
  id: 'OPP125',
  name: 'Strength in places Round 3',
  funder: 'EPSRC',
  org: 'Oxford University',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'ready'
}, {
  id: 'OPP131',
  name: 'Public transport infrastructure development: tariff reduction and inter-connectivity Part III',
  funder: 'AHRC',
  org: 'Bristol University',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'change'
}, {
  id: 'OPP132',
  name: 'Responsive mode',
  funder: 'AHRC',
  org: 'University of Hardknocks',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'progress'
}, {
  id: 'OPP134',
  name: 'UK-Canada Diabetes Research Team Grants',
  funder: 'AHRC',
  org: 'Birmingham University',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'progress'
}, {
  id: 'OPP135',
  name: 'UK social research for the next decade Part III',
  funder: 'Innovate UK',
  org: 'Swindon Polytechnic',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'change'
}, {
  id: 'OPP137',
  name: 'Electric battery innovation for land-based travel',
  funder: 'AHRC',
  org: 'Imperial College London',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'ready'
}];

const megaData = exports.megaData = megaDataList;

let megaDataAwardsList = [{
  id: 'OPP124',
  name: 'UK-Canada Social Research Team Grants',
  funder: 'MRC',
  org: 'University of Cardiff',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'overdue'
}, {
  id: 'OPP125',
  name: 'Strength in places Round 3',
  funder: 'EPSRC',
  org: 'Oxford University',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'ready'
}, {
  id: 'OPP131',
  name: 'Public transport infrastructure development: tariff reduction and inter-connectivity Part III',
  funder: 'AHRC',
  org: 'Bristol University',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'change'
}, {
  id: 'OPP132',
  name: 'Responsive mode',
  funder: 'MRC',
  org: 'University of Hardknocks',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'progress'
}, {
  id: 'OPP134',
  name: 'UK-Canada Diabetes Research Team Grants',
  funder: 'MRC',
  org: 'Birmingham University',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'progress'
}, {
  id: 'OPP135',
  name: 'UK social research for the next decade Part III',
  funder: 'Innovate UK',
  org: 'Swindon Polytechnic',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'progress'
}, {
  id: 'OPP137',
  name: 'Electric battery innovation for land-based travel',
  funder: 'MRC',
  org: 'Imperial College London',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'ready'
}, {
  id: 'OPP138',
  name: 'Entomophagy - acceptable levels of crunchiness for a post-apocalyptic world',
  funder: 'MRC',
  org: 'Queen Mary College',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'complete'
}, {
  id: 'OPP139',
  name: 'Salt-water gill adaptations in special transmorphogenic augementation',
  funder: 'MRC',
  org: 'King College, University of London',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'complete'
}, {
  id: 'OPP140',
  name: 'Re-icing polar regions feasibility Part IV',
  funder: 'STFC',
  org: 'Newport University',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'progress'
}, {
  id: 'OPP141',
  name: 'Reforestation and carbon capture',
  funder: 'NERC',
  org: 'East Anglia University',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'progress'
}, {
  id: 'OPP143',
  name: 'Hydro-batteries and green energy storage in the environment',
  funder: 'AHRC',
  org: 'UWE, Bristol',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'progress'
}, {
  id: 'OPP145',
  name: 'Public transport infrastructure development: green power Part IV',
  funder: 'Research England',
  org: 'Fulchester University',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'progress'
}, {
  id: 'OPP124',
  name: 'UK-Canada Medical Research Team Grants',
  funder: 'MRC',
  org: 'University of Cardiff',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'overdue'
}, {
  id: 'OPP125',
  name: 'Strength in places Round 3',
  funder: 'EPSRC',
  org: 'Oxford University',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'ready'
}, {
  id: 'OPP131',
  name: 'Public transport infrastructure development: tariff reduction and inter-connectivity Part III',
  funder: 'AHRC',
  org: 'Bristol University',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'change'
}, {
  id: 'OPP132',
  name: 'Responsive mode',
  funder: 'MRC',
  org: 'University of Hardknocks',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'progress'
}, {
  id: 'OPP134',
  name: 'UK-Canada Diabetes Research Team Grants',
  funder: 'AHRC',
  org: 'Birmingham University',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'progress'
}, {
  id: 'OPP135',
  name: 'UK social research for the next decade Part III',
  funder: 'Innovate UK',
  org: 'Swindon Polytechnic',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'change'
}, {
  id: 'OPP137',
  name: 'Electric battery innovation for land-based travel',
  funder: 'AHRC',
  org: 'Imperial College London',
  numberOfAwards: '3',
  numberOfProjects: '12',
  awardAmount: '308,500',
  status: 'ready'
}];

const megaDataAwards = exports.megaDataAwards = megaDataAwardsList;

let megaDataApplicationsList = [{
  id: '29',
  // name: 'Bio-detoxification of Ricin in castor bean',
  name: 'Culture wars of early naughties Part II',
  awardName: 'Bio-detoxification of Ricin in castor bean',
  oppName: 'Development of a Novel Inhibitor of Ricin',
  funder: 'MRC',
  // awardURL: '/prototypes/post-decision/award-start',
  org: 'University of Cardiff',
  daysLeft: '5',
  progressMessage: 'Deadline 14 May 2021',
  action: '',
  awardAmount: '1,000,000',
  status: 'In progress',
  awardStatus: 'In progress',
  completeness: '100% complete',
  active: true,
  period: '0 of 8',
  imminent: false,
  altStatus: 'Active',
  altTask: ''
}, {
  id: '102',
  name: 'Historical influences of macrodynamics in entomyphagy ',
  oppName: 'Electromagnetic waves in liquids',
  funder: 'ESPRC',
  org: 'University of Cardiff',
  daysLeft: '5',
  progressMessage: 'Deadline 14 May 2021',
  action: '',
  awardAmount: '',
  // awardURL: '/prototypes/post-decision/award-change-start',
  status: 'Ready to submit',
  awardStatus: 'In progress',
  completeness: '100% complete',
  active: true,
  imminent: true,
  altStatus: 'Active',
  altTask: ''
}, {
  id: '124',
  name: 'Viral pandemic: distributed societal issues and news shaping',
  oppName: 'Electric battery innovation for land-based travel',
  funder: 'MRC',
  org: 'University of Cardiff',
  daysLeft: '1',
  progressMessage: 'Deadline 21 May 2021',
  action: '',
  status: 'Ready to submit',
  awardStatus: 'In progress',
  completeness: '100% complete',
  active: true,
  imminent: true,
  altStatus: 'Announced',
  altTask: 'Information'
}, {
  id: '204',
  name: 'Recovery strategies from pollution in freshwater ecosystems',
  oppName: 'Freshwater ecology Part III, Where have all the invertebrates gone?',
  funder: 'NERC',
  org: 'Bath University',
  daysLeft: '34',
  progressMessage: 'Deadline 14 May 2021',
  action: '',
  status: 'In progress',
  awardStatus: 'In progress',
  completeness: '75% complete',
  active: true,
  imminent: false,
  altStatus: 'Active',
  altTask: 'Waiting on'
}, {
  id: '398',
  name: 'Effluent filtering in pre-treated brown water overflows',
  oppName: 'Freshwater ecology Part III, Where have all the invertebrates gone?',
  funder: 'NERC',
  org: 'Bath University',
  daysLeft: '34',
  progressMessage: 'Awaiting assessment',
  action: '',
  status: 'Completed',
  awardStatus: 'RECEIVED',
  completeness: '',
  active: true,
  altStatus: 'Active',
  altTask: ''
}, {
  id: '401',
  name: 'Jet propulsion systems in underwater environments',
  oppName: 'Freshwater ecology Part I, Sub aquatic travel and investigation methods?',
  funder: 'NERC',
  org: 'Abberllangeverybrewybethy University',
  daysLeft: '',
  progressMessage: 'Deadline 20 Jan 2021',
  finalMessage: 'Closed',
  action: '',
  status: 'Completed',
  awardStatus: 'In progress',
  completeness: '',
  active: false,
  altStatus: 'Suspended',
  altTask: ''
}, {
  id: '417',
  name: 'Dimensional transmogrification methodology in domesticated urban felines.',
  oppName: 'Preservation of distributed and diverse avian populations in tendered and semi-wild non-rural environments',
  funder: 'NERC',
  org: 'Bristol University',
  daysLeft: '',
  progressMessage: 'Deadline 20 Jan 2021',
  finalMessage: 'Closed',
  action: 'Remove application',
  status: 'Incomplete',
  awardStatus: 'In progress',
  completeness: '',
  active: false,
  altStatus: 'Active',
  altTask: 'Attention'
}, {
  id: '488',
  name: 'A natural anti-bacterial solution using rainwater and persimmon caly',
  oppName: 'Innovative water supplies for the 21st century ',
  funder: 'MRC',
  org: 'Fulchester University',
  daysLeft: '',
  progressMessage: 'Deadline 20 Jan 2021',
  finalMessage: 'Closed',
  action: 'Remove application',
  status: 'Incomplete',
  awardStatus: 'In progress',
  completeness: '',
  active: false,
  altStatus: 'Finished',
  altTask: ''
}, {
  id: '501',
  name: 'Making the road safer with Computer Vision Algorithms',
  oppName: 'Safer urban transport, Part III',
  funder: 'BBSRC',
  org: 'Frome University',
  daysLeft: '',
  progressMessage: 'Deadline 20 Jan 2021',
  finalMessage: 'Closed',
  action: 'Remove application',
  status: 'Incomplete',
  awardStatus: 'Complete',
  completeness: '',
  active: false
}, {
  id: '504',
  name: 'Averrhoa Bilimbi – A Natural Coagulant For Rubber Latex',
  oppName: 'Modern renewables - organic vehicles and recyling',
  funder: 'BBSRC',
  org: 'Yeovil Technical Labs',
  daysLeft: '',
  progressMessage: 'Deadline 20 Jan 2021',
  finalMessage: 'Closed',
  action: 'Remove application',
  status: 'Incomplete',
  awardStatus: 'RECEIVED',
  completeness: '',
  active: false
}, {
  id: '516',
  name: ' A convolutional neural network based approach to plant disease diagnosis',
  oppName: 'Future Feeding - getting the most out of our agricultural spaces',
  funder: 'EPSRC',
  org: 'University of Somerset',
  daysLeft: '',
  progressMessage: 'Deadline 20 Jan 2021',
  finalMessage: 'Closed',
  action: 'Remove application',
  status: 'Incomplete',
  awardStatus: 'In progress',
  completeness: '',
  active: false
}, {
  id: '518',
  name: 'Cheap production of nitrogen pesticides and fertilizers through hydrolysis of plant protein',
  oppName: 'Future Feeding - getting the most out of our agricultural spaces',
  funder: 'EPSRC',
  org: 'Newport Univeristy',
  daysLeft: '',
  progressMessage: 'Deadline 20 Jan 2021',
  finalMessage: 'Closed',
  action: 'Remove application',
  status: 'Incomplete',
  awardStatus: 'In progress',
  completeness: '',
  active: false
}, {
  id: '529',
  name: 'Combatting drought with orange peels',
  oppName: 'Future Feeding - getting the most out of our agricultural spaces',
  funder: 'EPSRC',
  org: 'University of Chester',
  daysLeft: '',
  progressMessage: 'Deadline 20 Jan 2021',
  finalMessage: 'Closed',
  action: 'Remove application',
  status: 'Incomplete',
  awardStatus: 'Terminated',
  completeness: '',
  active: false
}];
const megaDataApplications = exports.megaDataApplications = megaDataApplicationsList;

let megaDataApplicationsReviewersList = [{
  id: '97',
  name: 'Viral pandemic: distributed societal issues and news shaping',
  oppName: 'Electric battery innovation for land-based travel',
  status: 'Ready to submit',
  completeness: '100% complete',
  active: true,
  imminent: true
}];
const megaDataApplicationsReviews = exports.megaDataApplicationsReviews = megaDataApplicationsReviewersList;

let megaDataApplicationNamesList = [{
  name: 'Viral pandemic: distributed societal issues and news shaping',
  status: 'progress',
  style: 'plain'
}, {
  name: 'Dimensional transmogrification methodology in domesticated urban felines.',
  status: 'complete',
  style: 'success'
}, {
  name: 'Jet propulsion systems in underwater environments',
  status: 'progress',
  style: 'info'
}, {
  name: 'Effluent filtering in pre-treated brown water overflows',
  status: 'complete',
  style: 'success'
}, {
  name: 'Recovery strategies from pollution in freshwater ecosystems',
  status: 'progress',
  style: 'info'
}, {
  name: 'Viral pandemic: distributed societal issues and news shaping',
  status: 'complete',
  style: 'success'
}, {
  name: 'Viral pandemic: distributed societal issues and news shaping',
  status: 'progress',
  style: 'plain'
}, {
  name: 'Electric battery innovation for land-based travel',
  status: 'progress',
  style: 'plain'
}, {
  name: 'Meaningful entities in a post-apocalyptic world',
  status: 'progress',
  style: 'plain'
}, {
  name: 'Searching the abyss for meaning',
  status: 'progress',
  style: 'info'
}, {
  name: 'Far red light in the seed germination of Buddleja davidii',
  status: 'complete',
  style: 'success'
}, {
  name: 'Long term effects of lockdown on mental health',
  status: 'complete',
  style: 'success'
}, {
  name: 'Hats, and why we should embrace them',
  status: 'progress',
  style: 'info'
}, {
  name: 'Me and my lunch: post-parandial dipping',
  status: 'progress',
  style: 'plain'
}, {
  name: 'The importance of progressive enhancement in modern web development techniques',
  status: 'complete',
  style: 'success'
}, {
  name: '4 lessons the pandemic taught us about work, life and balance',
  status: 'progress',
  style: 'plain'
}, {
  name: 'How does artificial intelligence learn?',
  status: 'progress',
  style: 'danger'
}, {
  name: 'What is deep tech? A look at how it could shape the future',
  status: 'complete',
  style: 'success'
}, {
  name: 'Never tell your parents you know anything about IT - a lifetime of support',
  status: 'not',
  style: 'plain'
}, {
  name: 'How much electricity does it take to power the world?',
  status: 'not',
  style: 'plain'
}, {
  name: 'Who were Las Mariposas, and why were they murdered?',
  status: 'complete',
  style: 'success'
}, {
  name: 'The myth of bringing your full, authentic self to work',
  status: 'progress',
  style: 'plain'
}, {
  name: 'Should we cry at work?',
  status: 'not',
  style: 'danger'
}, {
  name: 'How would you finish the sentence, "Imagine if..."?',
  status: 'progress',
  style: 'plain'
}, {
  name: "Climate change is our reality. Here's how we're taking action",
  status: 'not',
  style: 'danger'
}];
const megaDataApplicationNames = exports.megaDataApplicationNames = megaDataApplicationNamesList;

let firstNames = ['Aaran', 'Aaren', 'Aarez', 'Aarman', 'Aaron', 'Aaron-James', 'Aarron', 'Aaryan', 'Aaryn', 'Aayan', 'Aazaan', 'Abaan', 'Abbas', 'Abdallah', 'Abdalroof', 'Abdihakim', 'Abdirahman', 'Abdisalam', 'Abdul', 'Abdul-Aziz', 'Abdulbasir', 'Abdulkadir', 'Abdulkarem', 'Abdulkhader', 'Abdullah', 'Abdul-Majeed', 'Abdulmalik', 'Abdul-Rehman', 'Abdur', 'Abdurraheem', 'Abdur-Rahman', 'Abdur-Rehmaan', 'Abel', 'Abhinav', 'Abhisumant', 'Abid', 'Abir', 'Abraham', 'Abu', 'Abubakar', 'Ace', 'Adain', 'Adam', 'Adam-James', 'Addison', 'Addisson', 'Adegbola', 'Adegbolahan', 'Aden', 'Adenn', 'Adie', 'Adil', 'Aditya', 'Adnan', 'Adrian', 'Adrien', 'Aedan', 'Aedin', 'Aedyn', 'Aeron', 'Afonso', 'Ahmad', 'Ahmed', 'Ahmed-Aziz', 'Ahoua', 'Ahtasham', 'Aiadan', 'Aidan', 'Aiden', 'Aiden-Jack', 'Aiden-Vee', 'Aidian', 'Aidy', 'Ailin', 'Aiman', 'Ainsley', 'Ainslie', 'Airen', 'Airidas', 'Airlie', 'AJ', 'Ajay', 'A-Jay', 'Ajayraj', 'Akan', 'Akram', 'Al', 'Ala', 'Alan', 'Alanas', 'Alasdair', 'Alastair', 'Alber', 'Albert', 'Albie', 'Aldred', 'Alec', 'Aled', 'Aleem', 'Aleksandar', 'Aleksander', 'Aleksandr', 'Aleksandrs', 'Alekzander', 'Alessandro', 'Alessio', 'Alex', 'Alexander', 'Alexei', 'Alexx', 'Alexzander', 'Alf', 'Alfee', 'Alfie', 'Alfred', 'Alfy', 'Alhaji', 'Al-Hassan', 'Ali', 'Aliekber', 'Alieu', 'Alihaider', 'Alisdair', 'Alishan', 'Alistair', 'Alistar', 'Alister', 'Aliyaan', 'Allan', 'Allan-Laiton', 'Allen', 'Allesandro', 'Allister', 'Ally', 'Alphonse', 'Altyiab', 'Alum', 'Alvern', 'Alvin', 'Alyas', 'Amaan', 'Aman', 'Amani', 'Ambanimoh', 'Ameer', 'Amgad', 'Ami', 'Amin', 'Amir', 'Ammaar', 'Ammar', 'Ammer', 'Amolpreet', 'Amos', 'Amrinder', 'Amrit', 'Amro', 'Anay', 'Andrea', 'Andreas', 'Andrei', 'Andrejs', 'Andrew', 'Andy', 'Anees', 'Anesu', 'Angel', 'Angelo', 'Angus', 'Anir', 'Anis', 'Anish', 'Anmolpreet', 'Annan', 'Anndra', 'Anselm', 'Anthony', 'Anthony-John', 'Antoine', 'Anton', 'Antoni', 'Antonio', 'Antony', 'Antonyo', 'Anubhav', 'Aodhan', 'Aon', 'Aonghus', 'Apisai', 'Arafat', 'Aran', 'Arandeep', 'Arann', 'Aray', 'Arayan', 'Archibald', 'Archie', 'Arda', 'Ardal', 'Ardeshir', 'Areeb', 'Areez', 'Aref', 'Arfin', 'Argyle', 'Argyll', 'Ari', 'Aria', 'Arian', 'Arihant', 'Aristomenis', 'Aristotelis', 'Arjuna', 'Arlo', 'Armaan', 'Arman', 'Armen', 'Arnab', 'Arnav', 'Arnold', 'Aron', 'Aronas', 'Arran', 'Arrham', 'Arron', 'Arryn', 'Arsalan', 'Artem', 'Arthur', 'Artur', 'Arturo', 'Arun', 'Arunas', 'Arved', 'Arya', 'Aryan', 'Aryankhan', 'Aryian', 'Aryn', 'Asa', 'Asfhan', 'Ash', 'Ashlee-jay', 'Ashley', 'Ashton', 'Ashton-Lloyd', 'Ashtyn', 'Ashwin', 'Asif', 'Asim', 'Aslam', 'Asrar', 'Ata', 'Atal', 'Atapattu', 'Ateeq', 'Athol', 'Athon', 'Athos-Carlos', 'Atli', 'Atom', 'Attila', 'Aulay', 'Aun', 'Austen', 'Austin', 'Avani', 'Averon', 'Avi', 'Avinash', 'Avraham', 'Awais', 'Awwal', 'Axel', 'Ayaan', 'Ayan', 'Aydan', 'Ayden', 'Aydin', 'Aydon', 'Ayman', 'Ayomide', 'Ayren', 'Ayrton', 'Aytug', 'Ayub', 'Ayyub', 'Azaan', 'Azedine', 'Azeem', 'Azim', 'Aziz', 'Azlan', 'Azzam', 'Azzedine', 'Babatunmise', 'Babur', 'Bader', 'Badr', 'Badsha', 'Bailee', 'Bailey', 'Bailie', 'Bailley', 'Baillie', 'Baley', 'Balian', 'Banan', 'Barath', 'Barkley', 'Barney', 'Baron', 'Barrie', 'Barry', 'Bartlomiej', 'Bartosz', 'Basher', 'Basile', 'Baxter', 'Baye', 'Bayley', 'Beau', 'Beinn', 'Bekim', 'Believe', 'Ben', 'Bendeguz', 'Benedict', 'Benjamin', 'Benjamyn', 'Benji', 'Benn', 'Bennett', 'Benny', 'Benoit', 'Bentley', 'Berkay', 'Bernard', 'Bertie', 'Bevin', 'Bezalel', 'Bhaaldeen', 'Bharath', 'Bilal', 'Bill', 'Billy', 'Binod', 'Bjorn', 'Blaike', 'Blaine', 'Blair', 'Blaire', 'Blake', 'Blazej', 'Blazey', 'Blessing', 'Blue', 'Blyth', 'Bo', 'Boab', 'Bob', 'Bobby', 'Bobby-Lee', 'Bodhan', 'Boedyn', 'Bogdan', 'Bohbi', 'Bony', 'Bowen', 'Bowie', 'Boyd', 'Bracken', 'Brad', 'Bradan', 'Braden', 'Bradley', 'Bradlie', 'Bradly', 'Brady', 'Bradyn', 'Braeden', 'Braiden', 'Brajan', 'Brandan', 'Branden', 'Brandon', 'Brandonlee', 'Brandon-Lee', 'Brandyn', 'Brannan', 'Brayden', 'Braydon', 'Braydyn', 'Breandan', 'Brehme', 'Brendan', 'Brendon', 'Brendyn', 'Breogan', 'Bret', 'Brett', 'Briaddon', 'Brian', 'Brodi', 'Brodie', 'Brody', 'Brogan', 'Broghan', 'Brooke', 'Brooklin', 'Brooklyn', 'Bruce', 'Bruin', 'Bruno', 'Brunon', 'Bryan', 'Bryce', 'Bryden', 'Brydon', 'Brydon-Craig', 'Bryn', 'Brynmor', 'Bryson', 'Buddy', 'Bully', 'Burak', 'Burhan', 'Butali', 'Butchi', 'Byron', 'Cabhan', 'Cadan', 'Cade', 'Caden', 'Cadon', 'Cadyn', 'Caedan', 'Caedyn', 'Cael', 'Caelan', 'Caelen', 'Caethan', 'Cahl', 'Cahlum', 'Cai', 'Caidan', 'Caiden', 'Caiden-Paul', 'Caidyn', 'Caie', 'Cailaen', 'Cailean', 'Caileb-John', 'Cailin', 'Cain', 'Caine', 'Cairn', 'Cal', 'Calan', 'Calder', 'Cale', 'Calean', 'Caleb', 'Calen', 'Caley', 'Calib', 'Calin', 'Callahan', 'Callan', 'Callan-Adam', 'Calley', 'Callie', 'Callin', 'Callum', 'Callun', 'Callyn', 'Calum', 'Calum-James', 'Calvin', 'Cambell', 'Camerin', 'Cameron', 'Campbel', 'Campbell', 'Camron', 'Caolain', 'Caolan', 'Carl', 'Carlo', 'Carlos', 'Carrich', 'Carrick', 'Carson', 'Carter', 'Carwyn', 'Casey', 'Casper', 'Cassy', 'Cathal', 'Cator', 'Cavan', 'Cayden', 'Cayden-Robert', 'Cayden-Tiamo', 'Ceejay', 'Ceilan', 'Ceiran', 'Ceirin', 'Ceiron', 'Cejay', 'Celik', 'Cephas', 'Cesar', 'Cesare', 'Chad', 'Chaitanya', 'Chang-Ha', 'Charles', 'Charley', 'Charlie', 'Charly', 'Chase', 'Che', 'Chester', 'Chevy', 'Chi', 'Chibudom', 'Chidera', 'Chimsom', 'Chin', 'Chintu', 'Chiqal', 'Chiron', 'Chris', 'Chris-Daniel', 'Chrismedi', 'Christian', 'Christie', 'Christoph', 'Christopher', 'Christopher-Lee', 'Christy', 'Chu', 'Chukwuemeka', 'Cian', 'Ciann', 'Ciar', 'Ciaran', 'Ciarian', 'Cieran', 'Cillian', 'Cillin', 'Cinar', 'CJ', 'C-Jay', 'Clark', 'Clarke', 'Clayton', 'Clement', 'Clifford', 'Clyde', 'Cobain', 'Coban', 'Coben', 'Cobi', 'Cobie', 'Coby', 'Codey', 'Codi', 'Codie', 'Cody', 'Cody-Lee', 'Coel', 'Cohan', 'Cohen', 'Colby', 'Cole', 'Colin', 'Coll', 'Colm', 'Colt', 'Colton', 'Colum', 'Colvin', 'Comghan', 'Conal', 'Conall', 'Conan', 'Conar', 'Conghaile', 'Conlan', 'Conley', 'Conli', 'Conlin', 'Conlly', 'Conlon', 'Conlyn', 'Connal', 'Connall', 'Connan', 'Connar', 'Connel', 'Connell', 'Conner', 'Connolly', 'Connor', 'Connor-David', 'Conor', 'Conrad', 'Cooper', 'Copeland', 'Coray', 'Corben', 'Corbin', 'Corey', 'Corey-James', 'Corey-Jay', 'Cori', 'Corie', 'Corin', 'Cormac', 'Cormack', 'Cormak', 'Corran', 'Corrie', 'Cory', 'Cosmo', 'Coupar', 'Craig', 'Craig-James', 'Crawford', 'Creag', 'Crispin', 'Cristian', 'Crombie', 'Cruiz', 'Cruz', 'Cuillin', 'Cullen', 'Cullin', 'Curtis', 'Cyrus', 'Daanyaal', 'Daegan', 'Daegyu', 'Dafydd', 'Dagon', 'Dailey', 'Daimhin', 'Daithi', 'Dakota', 'Daksh', 'Dale', 'Dalong', 'Dalton', 'Damian', 'Damien', 'Damon', 'Dan', 'Danar', 'Dane', 'Danial', 'Daniel', 'Daniele', 'Daniel-James', 'Daniels', 'Daniil', 'Danish', 'Daniyal', 'Danniel', 'Danny', 'Dante', 'Danyal', 'Danyil', 'Danys', 'Daood', 'Dara', 'Darach', 'Daragh', 'Darcy', "D'arcy", 'Dareh', 'Daren', 'Darien', 'Darius', 'Darl', 'Darn', 'Darrach', 'Darragh', 'Darrel', 'Darrell', 'Darren', 'Darrie', 'Darrius', 'Darroch', 'Darryl', 'Darryn', 'Darwyn', 'Daryl', 'Daryn', 'Daud', 'Daumantas', 'Davi', 'David', 'David-Jay', 'David-Lee', 'Davie', 'Davis', 'Davy', 'Dawid', 'Dawson', 'Dawud', 'Dayem', 'Daymian', 'Deacon', 'Deagan', 'Dean', 'Deano', 'Decklan', 'Declain', 'Declan', 'Declyan', 'Declyn', 'Dedeniseoluwa', 'Deecan', 'Deegan', 'Deelan', 'Deklain-Jaimes', 'Del', 'Demetrius', 'Denis', 'Deniss', 'Dennan', 'Dennin', 'Dennis', 'Denny', 'Dennys', 'Denon', 'Denton', 'Denver', 'Denzel', 'Deon', 'Derek', 'Derick', 'Derin', 'Dermot', 'Derren', 'Derrie', 'Derrin', 'Derron', 'Derry', 'Derryn', 'Deryn', 'Deshawn', 'Desmond', 'Dev', 'Devan', 'Devin', 'Devlin', 'Devlyn', 'Devon', 'Devrin', 'Devyn', 'Dex', 'Dexter', 'Dhani', 'Dharam', 'Dhavid', 'Dhyia', 'Diarmaid', 'Diarmid', 'Diarmuid', 'Didier', 'Diego', 'Diesel', 'Diesil', 'Digby', 'Dilan', 'Dilano', 'Dillan', 'Dillon', 'Dilraj', 'Dimitri', 'Dinaras', 'Dion', 'Dissanayake', 'Dmitri', 'Doire', 'Dolan', 'Domanic', 'Domenico', 'Domhnall', 'Dominic', 'Dominick', 'Dominik', 'Donald', 'Donnacha', 'Donnie', 'Dorian', 'Dougal', 'Douglas', 'Dougray', 'Drakeo', 'Dre', 'Dregan', 'Drew', 'Dugald', 'Duncan', 'Duriel', 'Dustin', 'Dylan', 'Dylan-Jack', 'Dylan-James', 'Dylan-John', 'Dylan-Patrick', 'Dylin', 'Dyllan', 'Dyllan-James', 'Dyllon', 'Eadie', 'Eagann', 'Eamon', 'Eamonn', 'Eason', 'Eassan', 'Easton', 'Ebow', 'Ed', 'Eddie', 'Eden', 'Ediomi', 'Edison', 'Eduardo', 'Eduards', 'Edward', 'Edwin', 'Edwyn', 'Eesa', 'Efan', 'Efe', 'Ege', 'Ehsan', 'Ehsen', 'Eiddon', 'Eidhan', 'Eihli', 'Eimantas', 'Eisa', 'Eli', 'Elias', 'Elijah', 'Eliot', 'Elisau', 'Eljay', 'Eljon', 'Elliot', 'Elliott', 'Ellis', 'Ellisandro', 'Elshan', 'Elvin', 'Elyan', 'Emanuel', 'Emerson', 'Emil', 'Emile', 'Emir', 'Emlyn', 'Emmanuel', 'Emmet', 'Eng', 'Eniola', 'Enis', 'Ennis', 'Enrico', 'Enrique', 'Enzo', 'Eoghain', 'Eoghan', 'Eoin', 'Eonan', 'Erdehan', 'Eren', 'Erencem', 'Eric', 'Ericlee', 'Erik', 'Eriz', 'Ernie-Jacks', 'Eroni', 'Eryk', 'Eshan', 'Essa', 'Esteban', 'Ethan', 'Etienne', 'Etinosa', 'Euan', 'Eugene', 'Evan', 'Evann', 'Ewan', 'Ewen', 'Ewing', 'Exodi', 'Ezekiel', 'Ezra', 'Fabian', 'Fahad', 'Faheem', 'Faisal', 'Faizaan', 'Famara', 'Fares', 'Farhaan', 'Farhan', 'Farren', 'Farzad', 'Fauzaan', 'Favour', 'Fawaz', 'Fawkes', 'Faysal', 'Fearghus', 'Feden', 'Felix', 'Fergal', 'Fergie', 'Fergus', 'Ferre', 'Fezaan', 'Fiachra', 'Fikret', 'Filip', 'Filippo', 'Finan', 'Findlay', 'Findlay-James', 'Findlie', 'Finlay', 'Finley', 'Finn', 'Finnan', 'Finnean', 'Finnen', 'Finnlay', 'Finnley', 'Fintan', 'Fionn', 'Firaaz', 'Fletcher', 'Flint', 'Florin', 'Flyn', 'Flynn', 'Fodeba', 'Folarinwa', 'Forbes', 'Forgan', 'Forrest', 'Fox', 'Francesco', 'Francis', 'Francisco', 'Franciszek', 'Franco', 'Frank', 'Frankie', 'Franklin', 'Franko', 'Fraser', 'Frazer', 'Fred', 'Freddie', 'Frederick', 'Fruin', 'Fyfe', 'Fyn', 'Fynlay', 'Fynn', 'Gabriel', 'Gallagher', 'Gareth', 'Garren', 'Garrett', 'Garry', 'Gary', 'Gavin', 'Gavin-Lee', 'Gene', 'Geoff', 'Geoffrey', 'Geomer', 'Geordan', 'Geordie', 'George', 'Georgia', 'Georgy', 'Gerard', 'Ghyll', 'Giacomo', 'Gian', 'Giancarlo', 'Gianluca', 'Gianmarco', 'Gideon', 'Gil', 'Gio', 'Girijan', 'Girius', 'Gjan', 'Glascott', 'Glen', 'Glenn', 'Gordon', 'Grady', 'Graeme', 'Graham', 'Grahame', 'Grant', 'Grayson', 'Greg', 'Gregor', 'Gregory', 'Greig', 'Griffin', 'Griffyn', 'Grzegorz', 'Guang', 'Guerin', 'Guillaume', 'Gurardass', 'Gurdeep', 'Gursees', 'Gurthar', 'Gurveer', 'Gurwinder', 'Gus', 'Gustav', 'Guthrie', 'Guy', 'Gytis', 'Habeeb', 'Hadji', 'Hadyn', 'Hagun', 'Haiden', 'Haider', 'Hamad', 'Hamid', 'Hamish', 'Hamza', 'Hamzah', 'Han', 'Hansen', 'Hao', 'Hareem', 'Hari', 'Harikrishna', 'Haris', 'Harish', 'Harjeevan', 'Harjyot', 'Harlee', 'Harleigh', 'Harley', 'Harman', 'Harnek', 'Harold', 'Haroon', 'Harper', 'Harri', 'Harrington', 'Harris', 'Harrison', 'Harry', 'Harvey', 'Harvie', 'Harvinder', 'Hasan', 'Haseeb', 'Hashem', 'Hashim', 'Hassan', 'Hassanali', 'Hately', 'Havila', 'Hayden', 'Haydn', 'Haydon', 'Haydyn', 'Hcen', 'Hector', 'Heddle', 'Heidar', 'Heini', 'Hendri', 'Henri', 'Henry', 'Herbert', 'Heyden', 'Hiro', 'Hirvaansh', 'Hishaam', 'Hogan', 'Honey', 'Hong', 'Hope', 'Hopkin', 'Hosea', 'Howard', 'Howie', 'Hristomir', 'Hubert', 'Hugh', 'Hugo', 'Humza', 'Hunter', 'Husnain', 'Hussain', 'Hussan', 'Hussnain', 'Hussnan', 'Hyden', 'I', 'Iagan', 'Iain', 'Ian', 'Ibraheem', 'Ibrahim', 'Idahosa', 'Idrees', 'Idris', 'Iestyn', 'Ieuan', 'Igor', 'Ihtisham', 'Ijay', 'Ikechukwu', 'Ikemsinachukwu', 'Ilyaas', 'Ilyas', 'Iman', 'Immanuel', 'Inan', 'Indy', 'Ines', 'Innes', 'Ioannis', 'Ireayomide', 'Ireoluwa', 'Irvin', 'Irvine', 'Isa', 'Isaa', 'Isaac', 'Isaiah', 'Isak', 'Isher', 'Ishwar', 'Isimeli', 'Isira', 'Ismaeel', 'Ismail', 'Israel', 'Issiaka', 'Ivan', 'Ivar', 'Izaak', 'J', 'Jaay', 'Jac', 'Jace', 'Jack', 'Jacki', 'Jackie', 'Jack-James', 'Jackson', 'Jacky', 'Jacob', 'Jacques', 'Jad', 'Jaden', 'Jadon', 'Jadyn', 'Jae', 'Jagat', 'Jago', 'Jaheim', 'Jahid', 'Jahy', 'Jai', 'Jaida', 'Jaiden', 'Jaidyn', 'Jaii', 'Jaime', 'Jai-Rajaram', 'Jaise', 'Jak', 'Jake', 'Jakey', 'Jakob', 'Jaksyn', 'Jakub', 'Jamaal', 'Jamal', 'Jameel', 'Jameil', 'James', 'James-Paul', 'Jamey', 'Jamie', 'Jan', 'Jaosha', 'Jardine', 'Jared', 'Jarell', 'Jarl', 'Jarno', 'Jarred', 'Jarvi', 'Jasey-Jay', 'Jasim', 'Jaskaran', 'Jason', 'Jasper', 'Jaxon', 'Jaxson', 'Jay', 'Jaydan', 'Jayden', 'Jayden-James', 'Jayden-Lee', 'Jayden-Paul', 'Jayden-Thomas', 'Jaydn', 'Jaydon', 'Jaydyn', 'Jayhan', 'Jay-Jay', 'Jayke', 'Jaymie', 'Jayse', 'Jayson', 'Jaz', 'Jazeb', 'Jazib', 'Jazz', 'Jean', 'Jean-Lewis', 'Jean-Pierre', 'Jebadiah', 'Jed', 'Jedd', 'Jedidiah', 'Jeemie', 'Jeevan', 'Jeffrey', 'Jensen', 'Jenson', 'Jensyn', 'Jeremy', 'Jerome', 'Jeronimo', 'Jerrick', 'Jerry', 'Jesse', 'Jesuseun', 'Jeswin', 'Jevan', 'Jeyun', 'Jez', 'Jia', 'Jian', 'Jiao', 'Jimmy', 'Jincheng', 'JJ', 'Joaquin', 'Joash', 'Jock', 'Jody', 'Joe', 'Joeddy', 'Joel', 'Joey', 'Joey-Jack', 'Johann', 'Johannes', 'Johansson', 'John', 'Johnathan', 'Johndean', 'Johnjay', 'John-Michael', 'Johnnie', 'Johnny', 'Johnpaul', 'John-Paul', 'John-Scott', 'Johnson', 'Jole', 'Jomuel', 'Jon', 'Jonah', 'Jonatan', 'Jonathan', 'Jonathon', 'Jonny', 'Jonothan', 'Jon-Paul', 'Jonson', 'Joojo', 'Jordan', 'Jordi', 'Jordon', 'Jordy', 'Jordyn', 'Jorge', 'Joris', 'Jorryn', 'Josan', 'Josef', 'Joseph', 'Josese', 'Josh', 'Joshiah', 'Joshua', 'Josiah', 'Joss', 'Jostelle', 'Joynul', 'Juan', 'Jubin', 'Judah', 'Jude', 'Jules', 'Julian', 'Julien', 'Jun', 'Junior', 'Jura', 'Justan', 'Justin', 'Justinas', 'Kaan', 'Kabeer', 'Kabir', 'Kacey', 'Kacper', 'Kade', 'Kaden', 'Kadin', 'Kadyn', 'Kaeden', 'Kael', 'Kaelan', 'Kaelin', 'Kaelum', 'Kai', 'Kaid', 'Kaidan', 'Kaiden', 'Kaidinn', 'Kaidyn', 'Kaileb', 'Kailin', 'Kain', 'Kaine', 'Kainin', 'Kainui', 'Kairn', 'Kaison', 'Kaiwen', 'Kajally', 'Kajetan', 'Kalani', 'Kale', 'Kaleb', 'Kaleem', 'Kal-el', 'Kalen', 'Kalin', 'Kallan', 'Kallin', 'Kalum', 'Kalvin', 'Kalvyn', 'Kameron', 'Kames', 'Kamil', 'Kamran', 'Kamron', 'Kane', 'Karam', 'Karamvir', 'Karandeep', 'Kareem', 'Karim', 'Karimas', 'Karl', 'Karol', 'Karson', 'Karsyn', 'Karthikeya', 'Kasey', 'Kash', 'Kashif', 'Kasim', 'Kasper', 'Kasra', 'Kavin', 'Kayam', 'Kaydan', 'Kayden', 'Kaydin', 'Kaydn', 'Kaydyn', 'Kaydyne', 'Kayleb', 'Kaylem', 'Kaylum', 'Kayne', 'Kaywan', 'Kealan', 'Kealon', 'Kean', 'Keane', 'Kearney', 'Keatin', 'Keaton', 'Keavan', 'Keayn', 'Kedrick', 'Keegan', 'Keelan', 'Keelin', 'Keeman', 'Keenan', 'Keenan-Lee', 'Keeton', 'Kehinde', 'Keigan', 'Keilan', 'Keir', 'Keiran', 'Keiren', 'Keiron', 'Keiryn', 'Keison', 'Keith', 'Keivlin', 'Kelam', 'Kelan', 'Kellan', 'Kellen', 'Kelso', 'Kelum', 'Kelvan', 'Kelvin', 'Ken', 'Kenan', 'Kendall', 'Kendyn', 'Kenlin', 'Kenneth', 'Kensey', 'Kenton', 'Kenyon', 'Kenzeigh', 'Kenzi', 'Kenzie', 'Kenzo', 'Kenzy', 'Keo', 'Ker', 'Kern', 'Kerr', 'Kevan', 'Kevin', 'Kevyn', 'Kez', 'Khai', 'Khalan', 'Khaleel', 'Khaya', 'Khevien', 'Khizar', 'Khizer', 'Kia', 'Kian', 'Kian-James', 'Kiaran', 'Kiarash', 'Kie', 'Kiefer', 'Kiegan', 'Kienan', 'Kier', 'Kieran', 'Kieran-Scott', 'Kieren', 'Kierin', 'Kiern', 'Kieron', 'Kieryn', 'Kile', 'Killian', 'Kimi', 'Kingston', 'Kinneil', 'Kinnon', 'Kinsey', 'Kiran', 'Kirk', 'Kirwin', 'Kit', 'Kiya', 'Kiyonari', 'Kjae', 'Klein', 'Klevis', 'Kobe', 'Kobi', 'Koby', 'Koddi', 'Koden', 'Kodi', 'Kodie', 'Kody', 'Kofi', 'Kogan', 'Kohen', 'Kole', 'Konan', 'Konar', 'Konnor', 'Konrad', 'Koray', 'Korben', 'Korbyn', 'Korey', 'Kori', 'Korrin', 'Kory', 'Koushik', 'Kris', 'Krish', 'Krishan', 'Kriss', 'Kristian', 'Kristin', 'Kristofer', 'Kristoffer', 'Kristopher', 'Kruz', 'Krzysiek', 'Krzysztof', 'Ksawery', 'Ksawier', 'Kuba', 'Kurt', 'Kurtis', 'Kurtis-Jae', 'Kyaan', 'Kyan', 'Kyde', 'Kyden', 'Kye', 'Kyel', 'Kyhran', 'Kyie', 'Kylan', 'Kylar', 'Kyle', 'Kyle-Derek', 'Kylian', 'Kym', 'Kynan', 'Kyral', 'Kyran', 'Kyren', 'Kyrillos', 'Kyro', 'Kyron', 'Kyrran', 'Lachlainn', 'Lachlan', 'Lachlann', 'Lael', 'Lagan', 'Laird', 'Laison', 'Lakshya', 'Lance', 'Lancelot', 'Landon', 'Lang', 'Lasse', 'Latif', 'Lauchlan', 'Lauchlin', 'Laughlan', 'Lauren', 'Laurence', 'Laurie', 'Lawlyn', 'Lawrence', 'Lawrie', 'Lawson', 'Layne', 'Layton', 'Lee', 'Leigh', 'Leigham', 'Leighton', 'Leilan', 'Leiten', 'Leithen', 'Leland', 'Lenin', 'Lennan', 'Lennen', 'Lennex', 'Lennon', 'Lennox', 'Lenny', 'Leno', 'Lenon', 'Lenyn', 'Leo', 'Leon', 'Leonard', 'Leonardas', 'Leonardo', 'Lepeng', 'Leroy', 'Leven', 'Levi', 'Levon', 'Levy', 'Lewie', 'Lewin', 'Lewis', 'Lex', 'Leydon', 'Leyland', 'Leylann', 'Leyton', 'Liall', 'Liam', 'Liam-Stephen', 'Limo', 'Lincoln', 'Lincoln-John', 'Lincon', 'Linden', 'Linton', 'Lionel', 'Lisandro', 'Litrell', 'Liyonela-Elam', 'LLeyton', 'Lliam', 'Lloyd', 'Lloyde', 'Loche', 'Lochlan', 'Lochlann', 'Lochlan-Oliver', 'Lock', 'Lockey', 'Logan', 'Logann', 'Logan-Rhys', 'Loghan', 'Lokesh', 'Loki', 'Lomond', 'Lorcan', 'Lorenz', 'Lorenzo', 'Lorne', 'Loudon', 'Loui', 'Louie', 'Louis', 'Loukas', 'Lovell', 'Luc', 'Luca', 'Lucais', 'Lucas', 'Lucca', 'Lucian', 'Luciano', 'Lucien', 'Lucus', 'Luic', 'Luis', 'Luk', 'Luka', 'Lukas', 'Lukasz', 'Luke', 'Lukmaan', 'Luqman', 'Lyall', 'Lyle', 'Lyndsay', 'Lysander', 'Maanav', 'Maaz', 'Mac', 'Macallum', 'Macaulay', 'Macauley', 'Macaully', 'Machlan', 'Maciej', 'Mack', 'Mackenzie', 'Mackenzy', 'Mackie', 'Macsen', 'Macy', 'Madaki', 'Maddison', 'Maddox', 'Madison', 'Madison-Jake', 'Madox', 'Mael', 'Magnus', 'Mahan', 'Mahdi', 'Mahmoud', 'Maias', 'Maison', 'Maisum', 'Maitlind', 'Majid', 'Makensie', 'Makenzie', 'Makin', 'Maksim', 'Maksymilian', 'Malachai', 'Malachi', 'Malachy', 'Malakai', 'Malakhy', 'Malcolm', 'Malik', 'Malikye', 'Malo', "Ma'moon", 'Manas', 'Maneet', 'Manmohan', 'Manolo', 'Manson', 'Mantej', 'Manuel', 'Manus', 'Marc', 'Marc-Anthony', 'Marcel', 'Marcello', 'Marcin', 'Marco', 'Marcos', 'Marcous', 'Marcquis', 'Marcus', 'Mario', 'Marios', 'Marius', 'Mark', 'Marko', 'Markus', 'Marley', 'Marlin', 'Marlon', 'Maros', 'Marshall', 'Martin', 'Marty', 'Martyn', 'Marvellous', 'Marvin', 'Marwan', 'Maryk', 'Marzuq', 'Mashhood', 'Mason', 'Mason-Jay', 'Masood', 'Masson', 'Matas', 'Matej', 'Mateusz', 'Mathew', 'Mathias', 'Mathu', 'Mathuyan', 'Mati', 'Matt', 'Matteo', 'Matthew', 'Matthew-William', 'Matthias', 'Max', 'Maxim', 'Maximilian', 'Maximillian', 'Maximus', 'Maxwell', 'Maxx', 'Mayeul', 'Mayson', 'Mazin', 'Mcbride', 'McCaulley', 'McKade', 'McKauley', 'McKay', 'McKenzie', 'McLay', 'Meftah', 'Mehmet', 'Mehraz', 'Meko', 'Melville', 'Meshach', 'Meyzhward', 'Micah', 'Michael', 'Michael-Alexander', 'Michael-James', 'Michal', 'Michat', 'Micheal', 'Michee', 'Mickey', 'Miguel', 'Mika', 'Mikael', 'Mikee', 'Mikey', 'Mikhail', 'Mikolaj', 'Miles', 'Millar', 'Miller', 'Milo', 'Milos', 'Milosz', 'Mir', 'Mirza', 'Mitch', 'Mitchel', 'Mitchell', 'Moad', 'Moayd', 'Mobeen', 'Modoulamin', 'Modu', 'Mohamad', 'Mohamed', 'Mohammad', 'Mohammad-Bilal', 'Mohammed', 'Mohanad', 'Mohd', 'Momin', 'Momooreoluwa', 'Montague', 'Montgomery', 'Monty', 'Moore', 'Moosa', 'Moray', 'Morgan', 'Morgyn', 'Morris', 'Morton', 'Moshy', 'Motade', 'Moyes', 'Msughter', 'Mueez', 'Muhamadjavad', 'Muhammad', 'Muhammed', 'Muhsin', 'Muir', 'Munachi', 'Muneeb', 'Mungo', 'Munir', 'Munmair', 'Munro', 'Murdo', 'Murray', 'Murrough', 'Murry', 'Musa', 'Musse', 'Mustafa', 'Mustapha', 'Muzammil', 'Muzzammil', 'Mykie', 'Myles', 'Mylo', 'Nabeel', 'Nadeem', 'Nader', 'Nagib', 'Naif', 'Nairn', 'Narvic', 'Nash', 'Nasser', 'Nassir', 'Natan', 'Nate', 'Nathan', 'Nathanael', 'Nathanial', 'Nathaniel', 'Nathan-Rae', 'Nawfal', 'Nayan', 'Neco', 'Neil', 'Nelson', 'Neo', 'Neshawn', 'Nevan', 'Nevin', 'Ngonidzashe', 'Nial', 'Niall', 'Nicholas', 'Nick', 'Nickhill', 'Nicki', 'Nickson', 'Nicky', 'Nico', 'Nicodemus', 'Nicol', 'Nicolae', 'Nicolas', 'Nidhish', 'Nihaal', 'Nihal', 'Nikash', 'Nikhil', 'Niki', 'Nikita', 'Nikodem', 'Nikolai', 'Nikos', 'Nilav', 'Niraj', 'Niro', 'Niven', 'Noah', 'Noel', 'Nolan', 'Noor', 'Norman', 'Norrie', 'Nuada', 'Nyah', 'Oakley', 'Oban', 'Obieluem', 'Obosa', 'Odhran', 'Odin', 'Odynn', 'Ogheneochuko', 'Ogheneruno', 'Ohran', 'Oilibhear', 'Oisin', 'Ojima-Ojo', 'Okeoghene', 'Olaf', 'Ola-Oluwa', 'Olaoluwapolorimi', 'Ole', 'Olie', 'Oliver', 'Olivier', 'Oliwier', 'Ollie', 'Olurotimi', 'Oluwadamilare', 'Oluwadamiloju', 'Oluwafemi', 'Oluwafikunayomi', 'Oluwalayomi', 'Oluwatobiloba', 'Oluwatoni', 'Omar', 'Omri', 'Oran', 'Orin', 'Orlando', 'Orley', 'Orran', 'Orrick', 'Orrin', 'Orson', 'Oryn', 'Oscar', 'Osesenagha', 'Oskar', 'Ossian', 'Oswald', 'Otto', 'Owain', 'Owais', 'Owen', 'Owyn', 'Oz', 'Ozzy', 'Pablo', 'Pacey', 'Padraig', 'Paolo', 'Pardeepraj', 'Parkash', 'Parker', 'Pascoe', 'Pasquale', 'Patrick', 'Patrick-John', 'Patrikas', 'Patryk', 'Paul', 'Pavit', 'Pawel', 'Pawlo', 'Pearce', 'Pearse', 'Pearsen', 'Pedram', 'Pedro', 'Peirce', 'Peiyan', 'Pele', 'Peni', 'Peregrine', 'Peter', 'Phani', 'Philip', 'Philippos', 'Phinehas', 'Phoenix', 'Phoevos', 'Pierce', 'Pierre-Antoine', 'Pieter', 'Pietro', 'Piotr', 'Porter', 'Prabhjoit', 'Prabodhan', 'Praise', 'Pranav', 'Pravin', 'Precious', 'Prentice', 'Presley', 'Preston', 'Preston-Jay', 'Prinay', 'Prince', 'Prithvi', 'Promise', 'Puneetpaul', 'Pushkar', 'Qasim', 'Qirui', 'Quinlan', 'Quinn', 'Radmiras', 'Raees', 'Raegan', 'Rafael', 'Rafal', 'Rafferty', 'Rafi', 'Raheem', 'Rahil', 'Rahim', 'Rahman', 'Raith', 'Raithin', 'Raja', 'Rajab-Ali', 'Rajan', 'Ralfs', 'Ralph', 'Ramanas', 'Ramit', 'Ramone', 'Ramsay', 'Ramsey', 'Rana', 'Ranolph', 'Raphael', 'Rasmus', 'Rasul', 'Raul', 'Raunaq', 'Ravin', 'Ray', 'Rayaan', 'Rayan', 'Rayane', 'Rayden', 'Rayhan', 'Raymond', 'Rayne', 'Rayyan', 'Raza', 'Reace', 'Reagan', 'Reean', 'Reece', 'Reed', 'Reegan', 'Rees', 'Reese', 'Reeve', 'Regan', 'Regean', 'Reggie', 'Rehaan', 'Rehan', 'Reice', 'Reid', 'Reigan', 'Reilly', 'Reily', 'Reis', 'Reiss', 'Remigiusz', 'Remo', 'Remy', 'Ren', 'Renars', 'Reng', 'Rennie', 'Reno', 'Reo', 'Reuben', 'Rexford', 'Reynold', 'Rhein', 'Rheo', 'Rhett', 'Rheyden', 'Rhian', 'Rhoan', 'Rholmark', 'Rhoridh', 'Rhuairidh', 'Rhuan', 'Rhuaridh', 'Rhudi', 'Rhy', 'Rhyan', 'Rhyley', 'Rhyon', 'Rhys', 'Rhys-Bernard', 'Rhyse', 'Riach', 'Rian', 'Ricards', 'Riccardo', 'Ricco', 'Rice', 'Richard', 'Richey', 'Richie', 'Ricky', 'Rico', 'Ridley', 'Ridwan', 'Rihab', 'Rihan', 'Rihards', 'Rihonn', 'Rikki', 'Riley', 'Rio', 'Rioden', 'Rishi', 'Ritchie', 'Rivan', 'Riyadh', 'Riyaj', 'Roan', 'Roark', 'Roary', 'Rob', 'Robbi', 'Robbie', 'Robbie-lee', 'Robby', 'Robert', 'Robert-Gordon', 'Robertjohn', 'Robi', 'Robin', 'Rocco', 'Roddy', 'Roderick', 'Rodrigo', 'Roen', 'Rogan', 'Roger', 'Rohaan', 'Rohan', 'Rohin', 'Rohit', 'Rokas', 'Roman', 'Ronald', 'Ronan', 'Ronan-Benedict', 'Ronin', 'Ronnie', 'Rooke', 'Roray', 'Rori', 'Rorie', 'Rory', 'Roshan', 'Ross', 'Ross-Andrew', 'Rossi', 'Rowan', 'Rowen', 'Roy', 'Ruadhan', 'Ruaidhri', 'Ruairi', 'Ruairidh', 'Ruan', 'Ruaraidh', 'Ruari', 'Ruaridh', 'Ruben', 'Rubhan', 'Rubin', 'Rubyn', 'Rudi', 'Rudy', 'Rufus', 'Rui', 'Ruo', 'Rupert', 'Ruslan', 'Russel', 'Russell', 'Ryaan', 'Ryan', 'Ryan-Lee', 'Ryden', 'Ryder', 'Ryese', 'Ryhs', 'Rylan', 'Rylay', 'Rylee', 'Ryleigh', 'Ryley', 'Rylie', 'Ryo', 'Ryszard', 'Saad', 'Sabeen', 'Sachkirat', 'Saffi', 'Saghun', 'Sahaib', 'Sahbian', 'Sahil', 'Saif', 'Saifaddine', 'Saim', 'Sajid', 'Sajjad', 'Salahudin', 'Salman', 'Salter', 'Salvador', 'Sam', 'Saman', 'Samar', 'Samarjit', 'Samatar', 'Sambrid', 'Sameer', 'Sami', 'Samir', 'Sami-Ullah', 'Samual', 'Samuel', 'Samuela', 'Samy', 'Sanaullah', 'Sandro', 'Sandy', 'Sanfur', 'Sanjay', 'Santiago', 'Santino', 'Satveer', 'Saul', 'Saunders', 'Savin', 'Sayad', 'Sayeed', 'Sayf', 'Scot', 'Scott', 'Scott-Alexander', 'Seaan', 'Seamas', 'Seamus', 'Sean', 'Seane', 'Sean-James', 'Sean-Paul', 'Sean-Ray', 'Seb', 'Sebastian', 'Sebastien', 'Selasi', 'Seonaidh', 'Sephiroth', 'Sergei', 'Sergio', 'Seth', 'Sethu', 'Seumas', 'Shaarvin', 'Shadow', 'Shae', 'Shahmir', 'Shai', 'Shane', 'Shannon', 'Sharland', 'Sharoz', 'Shaughn', 'Shaun', 'Shaunpaul', 'Shaun-Paul', 'Shaun-Thomas', 'Shaurya', 'Shaw', 'Shawn', 'Shawnpaul', 'Shay', 'Shayaan', 'Shayan', 'Shaye', 'Shayne', 'Shazil', 'Shea', 'Sheafan', 'Sheigh', 'Shenuk', 'Sher', 'Shergo', 'Sheriff', 'Sherwyn', 'Shiloh', 'Shiraz', 'Shreeram', 'Shreyas', 'Shyam', 'Siddhant', 'Siddharth', 'Sidharth', 'Sidney', 'Siergiej', 'Silas', 'Simon', 'Sinai', 'Skye', 'Sofian', 'Sohaib', 'Sohail', 'Soham', 'Sohan', 'Sol', 'Solomon', 'Sonneey', 'Sonni', 'Sonny', 'Sorley', 'Soul', 'Spencer', 'Spondon', 'Stanislaw', 'Stanley', 'Stefan', 'Stefano', 'Stefin', 'Stephen', 'Stephenjunior', 'Steve', 'Steven', 'Steven-lee', 'Stevie', 'Stewart', 'Stewarty', 'Strachan', 'Struan', 'Stuart', 'Su', 'Subhaan', 'Sudais', 'Suheyb', 'Suilven', 'Sukhi', 'Sukhpal', 'Sukhvir', 'Sulayman', 'Sullivan', 'Sultan', 'Sung', 'Sunny', 'Suraj', 'Surien', 'Sweyn', 'Syed', 'Sylvain', 'Symon', 'Szymon', 'Tadd', 'Taddy', 'Tadhg', 'Taegan', 'Taegen', 'Tai', 'Tait', 'Taiwo', 'Talha', 'Taliesin', 'Talon', 'Talorcan', 'Tamar', 'Tamiem', 'Tammam', 'Tanay', 'Tane', 'Tanner', 'Tanvir', 'Tanzeel', 'Taonga', 'Tarik', 'Tariq-Jay', 'Tate', 'Taylan', 'Taylar', 'Tayler', 'Taylor', 'Taylor-Jay', 'Taylor-Lee', 'Tayo', 'Tayyab', 'Tayye', 'Tayyib', 'Teagan', 'Tee', 'Teejay', 'Tee-jay', 'Tegan', 'Teighen', 'Teiyib', 'Te-Jay', 'Temba', 'Teo', 'Teodor', 'Teos', 'Terry', 'Teydren', 'Theo', 'Theodore', 'Thiago', 'Thierry', 'Thom', 'Thomas', 'Thomas-Jay', 'Thomson', 'Thorben', 'Thorfinn', 'Thrinei', 'Thumbiko', 'Tiago', 'Tian', 'Tiarnan', 'Tibet', 'Tieran', 'Tiernan', 'Timothy', 'Timucin', 'Tiree', 'Tisloh', 'Titi', 'Titus', 'Tiylar', 'TJ', 'Tjay', 'T-Jay', 'Tobey', 'Tobi', 'Tobias', 'Tobie', 'Toby', 'Todd', 'Tokinaga', 'Toluwalase', 'Tom', 'Tomas', 'Tomasz', 'Tommi-Lee', 'Tommy', 'Tomson', 'Tony', 'Torin', 'Torquil', 'Torran', 'Torrin', 'Torsten', 'Trafford', 'Trai', 'Travis', 'Tre', 'Trent', 'Trey', 'Tristain', 'Tristan', 'Troy', 'Tubagus', 'Turki', 'Turner', 'Ty', 'Ty-Alexander', 'Tye', 'Tyelor', 'Tylar', 'Tyler', 'Tyler-James', 'Tyler-Jay', 'Tyllor', 'Tylor', 'Tymom', 'Tymon', 'Tymoteusz', 'Tyra', 'Tyree', 'Tyrnan', 'Tyrone', 'Tyson', 'Ubaid', 'Ubayd', 'Uchenna', 'Uilleam', 'Umair', 'Umar', 'Umer', 'Umut', 'Urban', 'Uri', 'Usman', 'Uzair', 'Uzayr', 'Valen', 'Valentin', 'Valentino', 'Valery', 'Valo', 'Vasyl', 'Vedantsinh', 'Veeran', 'Victor', 'Victory', 'Vinay', 'Vince', 'Vincent', 'Vincenzo', 'Vinh', 'Vinnie', 'Vithujan', 'Vladimir', 'Vladislav', 'Vrishin', 'Vuyolwethu', 'Wabuya', 'Wai', 'Walid', 'Wallace', 'Walter', 'Waqaas', 'Warkhas', 'Warren', 'Warrick', 'Wasif', 'Wayde', 'Wayne', 'Wei', 'Wen', 'Wesley', 'Wesley-Scott', 'Wiktor', 'Wilkie', 'Will', 'William', 'William-John', 'Willum', 'Wilson', 'Windsor', 'Wojciech', 'Woyenbrakemi', 'Wyatt', 'Wylie', 'Wynn', 'Xabier', 'Xander', 'Xavier', 'Xiao', 'Xida', 'Xin', 'Xue', 'Yadgor', 'Yago', 'Yahya', 'Yakup', 'Yang', 'Yanick', 'Yann', 'Yannick', 'Yaseen', 'Yasin', 'Yasir', 'Yassin', 'Yoji', 'Yong', 'Yoolgeun', 'Yorgos', 'Youcef', 'Yousif', 'Youssef', 'Yu', 'Yuanyu', 'Yuri', 'Yusef', 'Yusuf', 'Yves', 'Zaaine', 'Zaak', 'Zac', 'Zach', 'Zachariah', 'Zacharias', 'Zacharie', 'Zacharius', 'Zachariya', 'Zachary', 'Zachary-Marc', 'Zachery', 'Zack', 'Zackary', 'Zaid', 'Zain', 'Zaine', 'Zaineddine', 'Zainedin', 'Zak', 'Zakaria', 'Zakariya', 'Zakary', 'Zaki', 'Zakir', 'Zakk', 'Zamaar', 'Zander', 'Zane', 'Zarran', 'Zayd', 'Zayn', 'Zayne', 'Ze', 'Zechariah', 'Zeek', 'Zeeshan', 'Zeid', 'Zein', 'Zen', 'Zendel', 'Zenith', 'Zennon', 'Zeph', 'Zerah', 'Zhen', 'Zhi', 'Zhong', 'Zhuo', 'Zi', 'Zidane', 'Zijie', 'Zinedine', 'Zion', 'Zishan', 'Ziya', 'Ziyaan', 'Zohaib', 'Zohair', 'Zoubaeir', 'Zubair', 'Zubayr', 'Zuriel'];

const firstNamesList = exports.firstNamesList = firstNames;

let lastNamesArray = ['Abbott', 'Acevedo', 'Acosta', 'Adams', 'Adkins', 'Aguilar', 'Aguirre', 'Albert', 'Alexander', 'Alford', 'Allen', 'Allison', 'Alston', 'Alvarado', 'Alvarez', 'Anderson', 'Andrews', 'Anthony', 'Armstrong', 'Arnold', 'Ashley', 'Atkins', 'Atkinson', 'Austin', 'Avery', 'Avila', 'Ayala', 'Ayers', 'Bailey', 'Baird', 'Baker', 'Baldwin', 'Ball', 'Ballard', 'Banks', 'Barber', 'Barker', 'Barlow', 'Barnes', 'Barnett', 'Barr', 'Barrera', 'Barrett', 'Barron', 'Barry', 'Bartlett', 'Barton', 'Bass', 'Bates', 'Battle', 'Bauer', 'Baxter', 'Beach', 'Bean', 'Beard', 'Beasley', 'Beck', 'Becker', 'Bell', 'Bender', 'Benjamin', 'Bennett', 'Benson', 'Bentley', 'Benton', 'Berg', 'Berger', 'Bernard', 'Berry', 'Best', 'Bird', 'Bishop', 'Black', 'Blackburn', 'Blackwell', 'Blair', 'Blake', 'Blanchard', 'Blankenship', 'Blevins', 'Bolton', 'Bond', 'Bonner', 'Booker', 'Boone', 'Booth', 'Bowen', 'Bowers', 'Bowman', 'Boyd', 'Boyer', 'Boyle', 'Bradford', 'Bradley', 'Bradshaw', 'Brady', 'Branch', 'Bray', 'Brennan', 'Brewer', 'Bridges', 'Briggs', 'Bright', 'Britt', 'Brock', 'Brooks', 'Brown', 'Browning', 'Bruce', 'Bryan', 'Bryant', 'Buchanan', 'Buck', 'Buckley', 'Buckner', 'Bullock', 'Burch', 'Burgess', 'Burke', 'Burks', 'Burnett', 'Burns', 'Burris', 'Burt', 'Burton', 'Bush', 'Butler', 'Byers', 'Byrd', 'Cabrera', 'Cain', 'Calderon', 'Caldwell', 'Calhoun', 'Callahan', 'Camacho', 'Cameron', 'Campbell', 'Campos', 'Cannon', 'Cantrell', 'Cantu', 'Cardenas', 'Carey', 'Carlson', 'Carney', 'Carpenter', 'Carr', 'Carrillo', 'Carroll', 'Carson', 'Carter', 'Carver', 'Case', 'Casey', 'Cash', 'Castaneda', 'Castillo', 'Castro', 'Cervantes', 'Chambers', 'Chan', 'Chandler', 'Chaney', 'Chang', 'Chapman', 'Charles', 'Chase', 'Chavez', 'Chen', 'Cherry', 'Christensen', 'Christian', 'Church', 'Clark', 'Clarke', 'Clay', 'Clayton', 'Clements', 'Clemons', 'Cleveland', 'Cline', 'Cobb', 'Cochran', 'Coffey', 'Cohen', 'Cole', 'Coleman', 'Collier', 'Collins', 'Colon', 'Combs', 'Compton', 'Conley', 'Conner', 'Conrad', 'Contreras', 'Conway', 'Cook', 'Cooke', 'Cooley', 'Cooper', 'Copeland', 'Cortez', 'Cote', 'Cotton', 'Cox', 'Craft', 'Craig', 'Crane', 'Crawford', 'Crosby', 'Cross', 'Cruz', 'Cummings', 'Cunningham', 'Curry', 'Curtis', 'Dale', 'Dalton', 'Daniel', 'Daniels', 'Daugherty', 'Davenport', 'David', 'Davidson', 'Davis', 'Dawson', 'Day', 'Dean', 'Decker', 'Dejesus', 'Delacruz', 'Delaney', 'Deleon', 'Delgado', 'Dennis', 'Diaz', 'Dickerson', 'Dickson', 'Dillard', 'Dillon', 'Dixon', 'Dodson', 'Dominguez', 'Donaldson', 'Donovan', 'Dorsey', 'Dotson', 'Douglas', 'Downs', 'Doyle', 'Drake', 'Dudley', 'Duffy', 'Duke', 'Duncan', 'Dunlap', 'Dunn', 'Duran', 'Durham', 'Dyer', 'Eaton', 'Edwards', 'Elliott', 'Ellis', 'Ellison', 'Emerson', 'England', 'English', 'Erickson', 'Espinoza', 'Estes', 'Estrada', 'Evans', 'Everett', 'Ewing', 'Farley', 'Farmer', 'Farrell', 'Faulkner', 'Ferguson', 'Fernandez', 'Ferrell', 'Fields', 'Figueroa', 'Finch', 'Finley', 'Fischer', 'Fisher', 'Fitzgerald', 'Fitzpatrick', 'Fleming', 'Fletcher', 'Flores', 'Flowers', 'Floyd', 'Flynn', 'Foley', 'Forbes', 'Ford', 'Foreman', 'Foster', 'Fowler', 'Fox', 'Francis', 'Franco', 'Frank', 'Franklin', 'Franks', 'Frazier', 'Frederick', 'Freeman', 'French', 'Frost', 'Fry', 'Frye', 'Fuentes', 'Fuller', 'Fulton', 'Gaines', 'Gallagher', 'Gallegos', 'Galloway', 'Gamble', 'Garcia', 'Gardner', 'Garner', 'Garrett', 'Garrison', 'Garza', 'Gates', 'Gay', 'Gentry', 'George', 'Gibbs', 'Gibson', 'Gilbert', 'Giles', 'Gill', 'Gillespie', 'Gilliam', 'Gilmore', 'Glass', 'Glenn', 'Glover', 'Goff', 'Golden', 'Gomez', 'Gonzales', 'Gonzalez', 'Good', 'Goodman', 'Goodwin', 'Gordon', 'Gould', 'Graham', 'Grant', 'Graves', 'Gray', 'Green', 'Greene', 'Greer', 'Gregory', 'Griffin', 'Griffith', 'Grimes', 'Gross', 'Guerra', 'Guerrero', 'Guthrie', 'Gutierrez', 'Guy', 'Guzman', 'Hahn', 'Hale', 'Haley', 'Hall', 'Hamilton', 'Hammond', 'Hampton', 'Hancock', 'Haney', 'Hansen', 'Hanson', 'Hardin', 'Harding', 'Hardy', 'Harmon', 'Harper', 'Harrell', 'Harrington', 'Harris', 'Harrison', 'Hart', 'Hartman', 'Harvey', 'Hatfield', 'Hawkins', 'Hayden', 'Hayes', 'Haynes', 'Hays', 'Head', 'Heath', 'Hebert', 'Henderson', 'Hendricks', 'Hendrix', 'Henry', 'Hensley', 'Henson', 'Herman', 'Hernandez', 'Herrera', 'Herring', 'Hess', 'Hester', 'Hewitt', 'Hickman', 'Hicks', 'Higgins', 'Hill', 'Hines', 'Hinton', 'Hobbs', 'Hodge', 'Hodges', 'Hoffman', 'Hogan', 'Holcomb', 'Holden', 'Holder', 'Holland', 'Holloway', 'Holman', 'Holmes', 'Holt', 'Hood', 'Hooper', 'Hoover', 'Hopkins', 'Hopper', 'Horn', 'Horne', 'Horton', 'House', 'Houston', 'Howard', 'Howe', 'Howell', 'Hubbard', 'Huber', 'Hudson', 'Huff', 'Huffman', 'Hughes', 'Hull', 'Humphrey', 'Hunt', 'Hunter', 'Hurley', 'Hurst', 'Hutchinson', 'Hyde', 'Ingram', 'Irwin', 'Jackson', 'Jacobs', 'Jacobson', 'James', 'Jarvis', 'Jefferson', 'Jenkins', 'Jennings', 'Jensen', 'Jimenez', 'Johns', 'Johnson', 'Johnston', 'Jones', 'Jordan', 'Joseph', 'Joyce', 'Joyner', 'Juarez', 'Justice', 'Kane', 'Kaufman', 'Keith', 'Keller', 'Kelley', 'Kelly', 'Kemp', 'Kennedy', 'Kent', 'Kerr', 'Key', 'Kidd', 'Kim', 'King', 'Kinney', 'Kirby', 'Kirk', 'Kirkland', 'Klein', 'Kline', 'Knapp', 'Knight', 'Knowles', 'Knox', 'Koch', 'Kramer', 'Lamb', 'Lambert', 'Lancaster', 'Landry', 'Lane', 'Lang', 'Langley', 'Lara', 'Larsen', 'Larson', 'Lawrence', 'Lawson', 'Le', 'Leach', 'Leblanc', 'Lee', 'Leon', 'Leonard', 'Lester', 'Levine', 'Levy', 'Lewis', 'Lindsay', 'Lindsey', 'Little', 'Livingston', 'Lloyd', 'Logan', 'Long', 'Lopez', 'Lott', 'Love', 'Lowe', 'Lowery', 'Lucas', 'Luna', 'Lynch', 'Lynn', 'Lyons', 'Macdonald', 'Macias', 'Mack', 'Madden', 'Maddox', 'Maldonado', 'Malone', 'Mann', 'Manning', 'Marks', 'Marquez', 'Marsh', 'Marshall', 'Martin', 'Martinez', 'Mason', 'Massey', 'Mathews', 'Mathis', 'Matthews', 'Maxwell', 'May', 'Mayer', 'Maynard', 'Mayo', 'Mays', 'Mcbride', 'Mccall', 'Mccarthy', 'Mccarty', 'Mcclain', 'Mcclure', 'Mcconnell', 'Mccormick', 'Mccoy', 'Mccray', 'Mccullough', 'Mcdaniel', 'Mcdonald', 'Mcdowell', 'Mcfadden', 'Mcfarland', 'Mcgee', 'Mcgowan', 'Mcguire', 'Mcintosh', 'Mcintyre', 'Mckay', 'Mckee', 'Mckenzie', 'Mckinney', 'Mcknight', 'Mclaughlin', 'Mclean', 'Mcleod', 'Mcmahon', 'Mcmillan', 'Mcneil', 'Mcpherson', 'Meadows', 'Medina', 'Mejia', 'Melendez', 'Melton', 'Mendez', 'Mendoza', 'Mercado', 'Mercer', 'Merrill', 'Merritt', 'Meyer', 'Meyers', 'Michael', 'Middleton', 'Miles', 'Miller', 'Mills', 'Miranda', 'Mitchell', 'Molina', 'Monroe', 'Montgomery', 'Montoya', 'Moody', 'Moon', 'Mooney', 'Moore', 'Morales', 'Moran', 'Moreno', 'Morgan', 'Morin', 'Morris', 'Morrison', 'Morrow', 'Morse', 'Morton', 'Moses', 'Mosley', 'Moss', 'Mueller', 'Mullen', 'Mullins', 'Munoz', 'Murphy', 'Murray', 'Myers', 'Nash', 'Navarro', 'Neal', 'Nelson', 'Newman', 'Newton', 'Nguyen', 'Nichols', 'Nicholson', 'Nielsen', 'Nieves', 'Nixon', 'Noble', 'Noel', 'Nolan', 'Norman', 'Norris', 'Norton', 'Nunez', 'Obrien', 'Ochoa', 'Oconnor', 'Odom', 'Odonnell', 'Oliver', 'Olsen', 'Olson', 'Oneal', 'Oneil', 'Oneill', 'Orr', 'Ortega', 'Ortiz', 'Osborn', 'Osborne', 'Owen', 'Owens', 'Pace', 'Pacheco', 'Padilla', 'Page', 'Palmer', 'Park', 'Parker', 'Parks', 'Parrish', 'Parsons', 'Pate', 'Patel', 'Patrick', 'Patterson', 'Patton', 'Paul', 'Payne', 'Pearson', 'Peck', 'Pena', 'Pennington', 'Perez', 'Perkins', 'Perry', 'Peters', 'Petersen', 'Peterson', 'Petty', 'Phelps', 'Phillips', 'Pickett', 'Pierce', 'Pittman', 'Pitts', 'Pollard', 'Poole', 'Pope', 'Porter', 'Potter', 'Potts', 'Powell', 'Powers', 'Pratt', 'Preston', 'Price', 'Prince', 'Pruitt', 'Puckett', 'Pugh', 'Quinn', 'Ramirez', 'Ramos', 'Ramsey', 'Randall', 'Randolph', 'Rasmussen', 'Ratliff', 'Ray', 'Raymond', 'Reed', 'Reese', 'Reeves', 'Reid', 'Reilly', 'Reyes', 'Reynolds', 'Rhodes', 'Rice', 'Rich', 'Richard', 'Richards', 'Richardson', 'Richmond', 'Riddle', 'Riggs', 'Riley', 'Rios', 'Rivas', 'Rivera', 'Rivers', 'Roach', 'Robbins', 'Roberson', 'Roberts', 'Robertson', 'Robinson', 'Robles', 'Rocha', 'Rodgers', 'Rodriguez', 'Rodriquez', 'Rogers', 'Rojas', 'Rollins', 'Roman', 'Romero', 'Rosa', 'Rosales', 'Rosario', 'Rose', 'Ross', 'Roth', 'Rowe', 'Rowland', 'Roy', 'Ruiz', 'Rush', 'Russell', 'Russo', 'Rutledge', 'Ryan', 'Salas', 'Salazar', 'Salinas', 'Sampson', 'Sanchez', 'Sanders', 'Sandoval', 'Sanford', 'Santana', 'Santiago', 'Santos', 'Sargent', 'Saunders', 'Savage', 'Sawyer', 'Schmidt', 'Schneider', 'Schroeder', 'Schultz', 'Schwartz', 'Scott', 'Sears', 'Sellers', 'Serrano', 'Sexton', 'Shaffer', 'Shannon', 'Sharp', 'Sharpe', 'Shaw', 'Shelton', 'Shepard', 'Shepherd', 'Sheppard', 'Sherman', 'Shields', 'Short', 'Silva', 'Simmons', 'Simon', 'Simpson', 'Sims', 'Singleton', 'Skinner', 'Slater', 'Sloan', 'Small', 'Smith', 'Snider', 'Snow', 'Snyder', 'Solis', 'Solomon', 'Sosa', 'Soto', 'Sparks', 'Spears', 'Spence', 'Spencer', 'Stafford', 'Stanley', 'Stanton', 'Stark', 'Steele', 'Stein', 'Stephens', 'Stephenson', 'Stevens', 'Stevenson', 'Stewart', 'Stokes', 'Stone', 'Stout', 'Strickland', 'Strong', 'Stuart', 'Suarez', 'Sullivan', 'Summers', 'Sutton', 'Swanson', 'Sweeney', 'Sweet', 'Sykes', 'Talley', 'Tanner', 'Tate', 'Taylor', 'Terrell', 'Terry', 'Thomas', 'Thompson', 'Thornton', 'Tillman', 'Todd', 'Torres', 'Townsend', 'Tran', 'Travis', 'Trevino', 'Trujillo', 'Tucker', 'Turner', 'Tyler', 'Tyson', 'Underwood', 'Valdez', 'Valencia', 'Valentine', 'Valenzuela', 'Vance', 'Vang', 'Vargas', 'Vasquez', 'Vaughan', 'Vaughn', 'Vazquez', 'Vega', 'Velasquez', 'Velazquez', 'Velez', 'Villarreal', 'Vincent', 'Vinson', 'Wade', 'Wagner', 'Walker', 'Wall', 'Wallace', 'Waller', 'Walls', 'Walsh', 'Walter', 'Walters', 'Walton', 'Ward', 'Ware', 'Warner', 'Warren', 'Washington', 'Waters', 'Watkins', 'Watson', 'Watts', 'Weaver', 'Webb', 'Weber', 'Webster', 'Weeks', 'Weiss', 'Welch', 'Wells', 'West', 'Wheeler', 'Whitaker', 'White', 'Whitehead', 'Whitfield', 'Whitley', 'Whitney', 'Wiggins', 'Wilcox', 'Wilder', 'Wiley', 'Wilkerson', 'Wilkins', 'Wilkinson', 'William', 'Williams', 'Williamson', 'Willis', 'Wilson', 'Winters', 'Wise', 'Witt', 'Wolf', 'Wolfe', 'Wong', 'Wood', 'Woodard', 'Woods', 'Woodward', 'Wooten', 'Workman', 'Wright', 'Wyatt', 'Wynn', 'Yang', 'Yates', 'York', 'Young', 'Zamora', 'Zimmerman'];

const lastNamesList = exports.lastNamesList = lastNamesArray;

let examplePeople = ['', 'Dr. Johann Aaron-James', 'Prof Wendy Richards', 'Dr. Barbara Vickers', 'Dr. Everrard Chumney-Warner'];

const examplePeopleList = exports.examplePeopleList = examplePeople;

let megaDataReviewsList = [{
  id: '24',
  name: 'Bio-detoxification of Ricin in castor bean',
  oppName: 'Development of a Novel Inhibitor of Ricin',
  funder: 'MRC',
  org: 'University of Cardiff',
  daysLeft: '21',
  progressMessage: 'Deadline 14 May 2021',
  action: '',
  status: 'Incomplete',
  /*status: 'In progress',*/
  /*status: 'Invitation to review',*/
  /*completeness: '100% complete',*/
  active: true,
  imminent: false,
  isNew: true
}, {
  id: '97',
  name: 'Linear field waves in liquids',
  oppName: 'Electromagnetic waves in liquids',
  funder: 'MRC',
  org: 'University of Cardiff',
  daysLeft: '48',
  progressMessage: 'Deadline 9 June 2021',
  action: '',
  status: 'Incomplete',
  completeness: '75% complete',
  active: true,
  imminent: false
}, {
  id: '124',
  name: 'Viral pandemic: distributed societal issues and news shaping',
  oppName: 'Electric battery innovation for land-based travel',
  funder: 'MRC',
  org: 'University of Cardiff',
  daysLeft: '12',
  progressMessage: 'Deadline 21 May 2021',
  action: '',
  status: 'Incomplete',
  completeness: '25% complete',
  active: true,
  imminent: false
}, {
  id: '204',
  name: 'Recovery strategies from pollution in freshwater ecosystems',
  oppName: 'Freshwater ecology Part III, Where have all the invertebrates gone?',
  funder: 'NERC',
  org: 'Bath University',
  daysLeft: '34',
  progressMessage: 'Deadline 14 May 2021',
  action: '',
  status: 'Incomplete',
  completeness: '75% complete',
  active: true,
  imminent: false
}, {
  id: '398',
  name: 'Effluent filtering in pre-treated brown water overflows',
  oppName: 'Freshwater ecology Part III, Where have all the invertebrates gone?',
  funder: 'NERC',
  org: 'Bath University',
  daysLeft: '34',
  progressMessage: 'Awaiting assessment',
  action: '',
  status: 'Incomplete',
  completeness: '',
  active: true
}, {
  id: '401',
  name: 'Jet propulsion systems in underwater environments',
  oppName: 'Freshwater ecology Part I, Sub aquatic travel and investigation methods?',
  funder: 'NERC',
  org: 'Abberllangeverybrewybethy University',
  daysLeft: '',
  progressMessage: 'Deadline 20 Jan 2021',
  finalMessage: 'Closed',
  action: '',
  status: 'Completed',
  completeness: '',
  active: false
}, {
  id: '417',
  name: 'Dimensional transmogrification methodology in domesticated urban felines.',
  oppName: 'Preservation of distributed and diverse avian populations in tendered and semi-wild non-rural environments',
  funder: 'NERC',
  org: 'Bristol University',
  daysLeft: '',
  progressMessage: 'Deadline 20 Jan 2021',
  finalMessage: 'Closed',
  action: 'Remove application',
  status: 'Incomplete',
  completeness: '',
  active: false
}, {
  id: '420',
  name: 'CBD and THC efficacy in blocking poison-infected protein pathways',
  oppName: 'Modern poisons research opportunity',
  funder: 'NERC',
  org: 'Blaze University',
  daysLeft: '',
  progressMessage: 'Deadline 20 Jan 2021',
  finalMessage: 'Closed',
  action: 'Remove application',
  status: 'Incomplete',
  completeness: '',
  active: false
}, {
  id: '455',
  name: 'Dihydrogen Monoxide in living environments, an investigation of dangers and toxicity',
  oppName: 'Modern poisons research opportunity',
  funder: 'NERC',
  org: 'Fulchester University',
  daysLeft: '',
  progressMessage: 'Deadline 20 Jan 2023',
  finalMessage: 'Closed',
  action: 'Remove application',
  status: 'Incomplete',
  completeness: '',
  active: false
}, {
  id: '468',
  name: 'Vaccines - Ivermectin and Ketamin, that wonder chemicals that keep on giving',
  oppName: 'Modern poisons research opportunity',
  funder: 'NERC',
  org: 'Trump University, NYC',
  daysLeft: '',
  progressMessage: 'Deadline 20 Jan 2023',
  finalMessage: 'Closed',
  action: 'Remove application',
  status: 'Incomplete',
  completeness: '',
  active: false
}, {
  id: '501',
  name: 'Genes, jeans and jeggings, and their role in Gen Y toxicity',
  oppName: 'Modern poisons research opportunity',
  funder: 'NERC',
  org: 'JNCO Millennial Institute of Research',
  daysLeft: '',
  progressMessage: 'Deadline 20 Jan 2023',
  finalMessage: 'Closed',
  action: 'Remove application',
  status: 'Incomplete',
  completeness: '',
  active: false
}, {
  id: '503',
  name: 'Error handling in computational research networks',
  oppName: 'Modern poisons research opportunity',
  funder: 'NERC',
  org: 'Enginecks University',
  daysLeft: '',
  progressMessage: 'Deadline 20 Jan 2023',
  finalMessage: 'Closed',
  action: 'Remove application',
  status: 'Incomplete',
  completeness: '',
  active: false
}];
const megaDataReviews = exports.megaDataReviews = megaDataReviewsList;

// let reviewValues = ['', 'Unfundable', 'Uncompetitive', 'Good', 'Very good', 'Excellent', 'Exceptional'];
let reviewValues = ['', 'Unviable', 'Unsuitable', 'Un-recommendable', 'Viable', 'Suitable', 'Recommendable'];
const reviewRatingValues = exports.reviewRatingValues = reviewValues;

let allColours = [{
  'govuk-colour-red': '#D4351C',
  'govuk-colour-green': '#00703C',
  'govuk-colour-dark-blue': '#003078',
  'govuk-colour-purple': '#4C2C92',
  'govuk-colour-dark-grey': '#6F777B',
  'govuk-colour-light-grey': '#F3F2F1',
  'govuk-colour-light-purple': '#6F72AF',
  'govuk-colour-pink': '#D53880',
  'govuk-colour-orange': '#F47738',
  'govuk-colour-light-green': '#85994B',
  'govuk-colour-yellow': '#FFDD00',
  'govuk-colour-blue': '#1D70B8',
  'govuk-colour-light-blue': '#5694CA',
  'govuk-colour-black': '#0B0C0C',
  'govuk-colour-mid-grey': '#B1B4B6',
  'govuk-colour-white': '#FFFFFF',
  'govuk-colour-bright-purple': '#912B88',
  'govuk-colour-light-pink': '#F499BE',
  'govuk-colour-brown': '#B58840',
  'govuk-colour-turquoise': '#28A197'
}];
const colourPalette = exports.colourPalette = allColours;

let panelistPeople = [{
  panelistID: 'CZYPTL9QR216GT21',
  firstName: 'Clare',
  lastName: 'Bess',
  organisation: 'Bath',
  role: 'Panel chair'
}, {
  panelistID: '3DX29D9OZ2ZBQ052',
  firstName: 'Burt',
  lastName: 'Keeton',
  organisation: 'Southampton',
  role: 'Panel chair'
}, {
  panelistID: 'DJGBA5EHA9303PQ2',
  firstName: 'Mariann',
  lastName: 'Herbert',
  organisation: 'Nottingham',
  role: 'Deputy chair'
}, {
  panelistID: 'JRFJIJ8RV9O1I69M',
  firstName: 'Lina',
  lastName: 'Ramos',
  organisation: 'Leicester',
  role: 'Deputy chair'
}, {
  panelistID: 'U8K5X27Q8MUAC7R2',
  firstName: 'Lorean',
  lastName: 'Roderick',
  organisation: 'Liverpool',
  role: 'Panelist'
}, {
  panelistID: 'J0KFCBTZR59US0US',
  firstName: 'Mistie',
  lastName: 'Pennington',
  organisation: 'Swansea',
  role: 'Panelist'
}, {
  panelistID: '5TI4D8BX64NQ48A0',
  firstName: 'Sherrill',
  lastName: 'Reiter',
  organisation: 'Cardiff',
  role: 'Panelist'
}, {
  panelistID: '26DFBYMHCH2UNQZH',
  firstName: 'Hayley',
  lastName: 'Sam',
  organisation: 'Hayward',
  role: 'Panelist'
}, {
  panelistID: 'VUHUF7Q9PV8ZULIM',
  firstName: 'Megan',
  lastName: 'Noonan',
  organisation: 'Kings',
  role: 'Panelist'
}, {
  panelistID: 'DNRMSUB907C3UFS2',
  firstName: 'Virgilio',
  lastName: 'Barnhill',
  organisation: 'Manchester',
  role: 'Panelist'
}, {
  panelistID: 'HMY3UTFN4QMN1VS5',
  firstName: 'Sunni',
  lastName: 'Haag',
  organisation: 'Imperial',
  role: 'Panelist'
}, {
  panelistID: 'E5Q1NZQ4THHD3BX3',
  firstName: 'Ariel',
  lastName: 'Edge',
  organisation: 'Glasgow',
  role: 'Panelist'
}, {
  panelistID: 'U6YLG27RUQNU4O7B',
  firstName: 'Williemae',
  lastName: 'Coggins',
  organisation: 'Barnstable',
  role: 'Panelist'
}, {
  panelistID: '893CJLI4OQRMONJP',
  firstName: 'Charlsie',
  lastName: 'Stringer',
  organisation: 'Cambridge',
  role: 'Panelist'
}, {
  panelistID: 'NUEURXTN1REDLV4A',
  firstName: 'Angelic',
  lastName: 'Pedigo',
  organisation: 'Leeds',
  role: 'Panelist'
}, {
  panelistID: '9YULNP3F7QJC0IXD',
  firstName: 'June',
  lastName: 'Coates',
  organisation: 'Green Bay',
  role: 'Panelist'
}, {
  panelistID: 'PZP5HCAZ2UXH9JHU',
  firstName: 'Natividad',
  lastName: 'Schmitt',
  organisation: 'Oxford',
  role: 'Panelist'
}, {
  panelistID: 'J806IQDP91GGXZVQ',
  firstName: 'Christiana',
  lastName: 'Venegas',
  organisation: 'Bristol',
  role: 'Panelist'
}, {
  panelistID: '1VHNQS0RV9ABDFRL',
  firstName: 'Hanh',
  lastName: 'Daly',
  organisation: 'Waterloo',
  role: 'Panelist'
}, {
  panelistID: '036DKXQM19FIN0RY',
  firstName: 'Johana',
  lastName: 'Carmichael',
  organisation: 'Birmingham',
  role: 'Panelist'
}];

const panelists = exports.panelists = panelistPeople;

let genericPeopleList = [{
  firstName: 'Clare',
  lastName: 'Bess',
  roGroup: 'Science and engineering',
  organisation: 'University of Wales',
  selected: true
}, {
  firstName: 'Dan',
  lastName: 'Keegan',
  roGroup: 'Science and engineering',
  organisation: 'University of Wales',
  selected: true
}, {
  firstName: 'Renata',
  lastName: 'Minchin',
  roGroup: 'Science and engineering',
  organisation: 'University of Wales',
  selected: true
}, {
  firstName: 'Bernice',
  lastName: 'Stallone',
  roGroup: 'Science and engineering',
  organisation: 'University of Wales',
  selected: true
}, {
  firstName: 'Adam',
  lastName: 'Andrews',
  roGroup: 'Arts and Humanities',
  organisation: 'University of Wales',
  selected: true
}, {
  firstName: 'Brian',
  lastName: 'Beltham',
  roGroup: 'Arts and Humanities',
  organisation: 'University of Wales',
  selected: true
}, {
  firstName: 'Chritine',
  lastName: 'Christofferson',
  roGroup: 'Arts and Humanities',
  organisation: 'University of Wales',
  selected: true
}, {
  firstName: 'Donna',
  lastName: 'Winter',
  roGroup: 'Arts and Humanities',
  organisation: 'University of Wales',
  selected: true
}, {
  firstName: 'Griselda',
  lastName: 'Feelgood',
  roGroup: 'Languages',
  organisation: 'University of Wales',
  selected: true
}, {
  firstName: 'David',
  lastName: 'Trussel',
  roGroup: 'Languages',
  organisation: 'University of Wales',
  selected: true
}, {
  firstName: 'Roger',
  lastName: 'Less',
  roGroup: 'Law, politics, philosophy and economics',
  organisation: 'University of Wales',
  selected: true
}, {
  firstName: 'Bernadette',
  lastName: 'Starr',
  roGroup: 'Law, politics, philosophy and economics',
  organisation: 'University of Wales',
  selected: true
}, {
  firstName: 'Martha',
  lastName: 'Bell',
  roGroup: 'Mathematics',
  organisation: 'University of Wales',
  selected: true
}, {
  firstName: 'Humphrey',
  lastName: 'Cushion',
  roGroup: 'Mathematics',
  organisation: 'University of Wales',
  selected: true
}, {
  firstName: 'Fernando',
  lastName: 'Badenoch',
  roGroup: 'Medicine',
  organisation: 'University of Wales',
  selected: true
}, {
  firstName: 'Florence',
  lastName: 'Escalope',
  roGroup: 'Medicine',
  organisation: 'University of Wales',
  selected: true
}, {
  firstName: 'Percival',
  lastName: 'Summers',
  roGroup: 'Medicine',
  organisation: 'University of Wales',
  selected: true
}, {
  firstName: 'Geraldine',
  lastName: 'Escobar',
  roGroup: 'None',
  organisation: 'University of Wales',
  selected: true
}, {
  firstName: 'Dennis',
  lastName: 'Ho',
  roGroup: 'None',
  organisation: 'University of Wales',
  selected: true
}, {
  firstName: 'Robert',
  lastName: 'Ng',
  roGroup: 'None',
  organisation: 'University of Wales',
  selected: true
}];

const genericPeople = exports.genericPeople = genericPeopleList;

let awardStatusesList = ['Active', 'Announced', 'Awaiting completion', 'Awaiting offer response', 'Finished', 'Suspended', 'UKRI Preparing Award', 'Waiting for UKRI Authorisation'];

const awardStatuses = exports.awardStatuses = awardStatusesList;

let awardTaskList = ['', '', 'FES Overdue', 'FES Recieved', 'Fes Due', '', '', ''];

const awardTasks = exports.awardTasks = awardTaskList;

let randomCatsList = ['Managed landscapes', 'Biodiversity', 'Traffic Assignment', 'Road Transport Operations', 'Automotive Manufacturing', 'Manufacturing Quality Control ', 'Silicon Micromachinery', 'Static Random Access Memory', 'Seismic waves', 'Antiferromagnetic materials', 'Carbon nanotubes', 'The World Bank', 'Ground Characteristics', 'Contaminated clay', 'Food appearance', 'Nutrients', 'Imitation', 'Social cognition', 'Attention', 'Cognitive Psychology'];

const randomCats = exports.randomCats = randomCatsList;