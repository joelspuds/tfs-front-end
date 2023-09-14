import { megaApplications1200v2Reversed } from './test_applications';

let generalData = require('./data');
let genericFunctions = require('./generic');
//const megaApplications = require('./realApplications');
//const megaApplications1200 = require('./realApplications1200');
//const megaApplications1200v2 = require('./realApplications1200_v2');
//const megaReversed = require('./test_applications');
//let applicationsListv2 = megaApplications1200v2.megaApplications1200v2;

let genericPeopleOne = generalData.genericPeople;
let genericPeopleTwo = generalData.genericPeople;
let genericPeople;

let prototypeData = {
  applicationTitle: '',
  oppTitle: 'OPP147: Innovation in environmental monitoring',
  applicant1: '',
  summary1: '',
  summary2:
    '<p class="govuk-body">Trypanosoma brucei, the causative agent of African trypanosomiasis (&ldquo;sleeping sickness&rdquo;), causes more than 50,000 deaths annually. Related trypanosomatid pathogens, including <em>Trypanosoma cruzi </em>(the causative agent of Chagas&rsquo; disease) and numerous <em>Leishmania </em>species (which cause a diverse spectrum of visceral, mucocutaneous, and cutaneous disease), cause even more morbidity and mortality worldwide. Each of these parasites undergoes a complex developmental cycle, alternating between mammalian and insect hosts, as well as proliferating and non-proliferating stages. Exactly how trypanosomatid gene expression gives rise to the different phenotypes at each stage is currently not well understood, but the relative contribution of gene-specific transcriptional control is low.</p>\r\n' +
    '<p class="govuk-body"<strong> [TO ADD REFERENCE]</strong> Differences in post-transcriptional mRNA processing and stability undoubtedly play major roles but the poor correlation between mRNA and protein abundance during parasite development indicates that translational and/or post-translational controls are also important. </p>\r\n' +
    '<p class="govuk-body"This project seeks to globally and quantitatively assess the rate at which each mRNA is actively translated at any particular time by applying a recently-described technology that couples the ability to isolate the specific &ldquo;footprints&rdquo; of mRNAs that are occupied by ribosomes (an indicator of translation) with the depth and breadth of next generation sequencing. </p>\r\n' +
    '<p class="govuk-body"Aim 1 will establish the ribosome protection technology in <em>T. brucei</em>, using readily cultured non-pathogenic insect stage forms. It will optimize conditions for nuclease treatment to preserve mRNA fragments protected by ribosomes and for the generation of unbiased libraries from the RNA samples for next generation sequencing. It will also include maturation of the bioinformatics pipeline to analyze resulting sequence data. </p>\r\n' +
    '<p class="govuk-body"Aim 2 will expand into the pathogenic, mammalian stages of the parasite, and identify genes that are regulated at the level of translation during <em>T. brucei </em>development in infective as compared to non-infective forms. The proposed work will provide an important new tool for studying trypanosomatid gene expression, yielding a comprehensive view of the role of translational control in <em>T. brucei </em>and clues to it mechanisms, as well as new information on the extent of translation of individual gene products, such as potential drug targets. </p>\r\n' +
    '<p class="govuk-body"In addition, it should resolve the current debate over the function of the numerous recently identified RNAs that contain only short open-reading frames, and has the potential to identify non-canonical protein-coding open-reading frames, thus significantly enhancing the ongoing genome annotation.</p>',
  detailsMarkAsComplete: false,
  oppTitle2: 'OPP147: African sleeping sickness - pathways to treatment',
  applicationTitle2: 'Ribosome profiling of Trypanosoma brucei',
  detailsMarkAsComplete2: true,
  resourcesAndCostsIsComplete: true,
  submitText:
    'The applicant has marked this as 100% complete and sent it to your Research Office to be checked. If revisions need to be made, it must be returned to the applicant for editing. Otherwise, it can be submitted to UKRI for assessment.',
  detailsGuidance:
    'Summarise your project giving details of how you intend to conduct your research, and how this is relevant to the original Opportunity brief. This summary should provide a sound overview allowing assessors and reviewers to understand your intended approach. You can give fuller details in subsequent sections.',
  detailsIsComplete2: true,
  resourcesAndCostJustification:
    '<p class="govuk-body">There are multiple equipment costs to cover the lab testing equipment and infrastrcture; including industrial manufacturing kit for bulk testing. This is hired some Mega Lab Stuff Ltd and is currently set at £850,000. </p><p class="govuk-body">Staffing costs are also expensive as we need specialist technicians to support the researchers. </p><p class="govuk-body">Cras a tincidunt felis. Vivamus convallis, velit et pulvinar mollis, mauris massa luctus arcu, cursus tristique nulla mi non justo. Mauris porttitor augue id magna suscipit fermentum. Nunc dui sapien, commodo commodo purus ac, accumsan luctus felis. Nullam id turpis quis velit auctor blandit. Morbi congue velit tincidunt enim pharetra scelerisque. Integer vulputate convallis rutrum. Vestibulum eleifend convallis cursus. Integer hendrerit tellus ac metus tincidunt, sit amet lobortis arcu dapibus.</p><p class="govuk-body">Vivamus libero nisi, iaculis id metus id, commodo fringilla elit. Nulla vestibulum nisl ut eros consectetur, fringilla volutpat lectus commodo. Morbi pulvinar massa non ex placerat vulputate. Praesent arcu dui, tristique eu lorem lobortis, dignissim tincidunt odio. Curabitur consequat turpis vel pharetra pulvinar. Donec semper vel ex a lobortis. Ut scelerisque cursus tellus sit amet commodo. Phasellus in ipsum massa. Curabitur ullamcorper purus at elementum sagittis.</p><p class="govuk-body">Aliquam sed nisi nisl. Integer ac neque arcu. Etiam semper felis et purus interdum, ut condimentum neque malesuada. Maecenas malesuada, ex vitae consequat volutpat, nisi ex viverra mi, ac imperdiet ex tellus ac sapien. Nunc vitae sagittis justo. Maecenas fermentum, lectus at gravida dapibus, ligula leo interdum purus, at aliquam urna ex ac metus. Donec non mattis leo. Morbi sodales id leo ac feugiat. Vivamus quis est in erat mollis tincidunt et ac eros. Donec faucibus mi sit amet risus tincidunt, a interdum risus elementum. Ut pellentesque aliquam aliquet. Morbi varius augue at felis cursus dictum.</p>',
};

/* **************

    Index

*************** */
export function editv3IndexGet(req, res) {
  let viewData;

  let clearSession = req.param('clearSession');
  if (clearSession === 'true') {
    req.session.destroy();
    prototypeData = {
      applicationTitle: '',
      oppTitle: 'OPP147: Innovation in environmental monitoring',
      applicant1: '',
      summary1: '',
      summary2:
        '<p class="govuk-body">Trypanosoma brucei, the causative agent of African trypanosomiasis (&ldquo;sleeping sickness&rdquo;), causes more than 50,000 deaths annually. Related trypanosomatid pathogens, including <em>Trypanosoma cruzi </em>(the causative agent of Chagas&rsquo; disease) and numerous <em>Leishmania </em>species (which cause a diverse spectrum of visceral, mucocutaneous, and cutaneous disease), cause even more morbidity and mortality worldwide. Each of these parasites undergoes a complex developmental cycle, alternating between mammalian and insect hosts, as well as proliferating and non-proliferating stages. Exactly how trypanosomatid gene expression gives rise to the different phenotypes at each stage is currently not well understood, but the relative contribution of gene-specific transcriptional control is low.</p>\r\n' +
        '<p class="govuk-body"<strong> [TO ADD REFERENCE]</strong> Differences in post-transcriptional mRNA processing and stability undoubtedly play major roles but the poor correlation between mRNA and protein abundance during parasite development indicates that translational and/or post-translational controls are also important. </p>\r\n' +
        '<p class="govuk-body"This project seeks to globally and quantitatively assess the rate at which each mRNA is actively translated at any particular time by applying a recently-described technology that couples the ability to isolate the specific &ldquo;footprints&rdquo; of mRNAs that are occupied by ribosomes (an indicator of translation) with the depth and breadth of next generation sequencing. </p>\r\n' +
        '<p class="govuk-body"Aim 1 will establish the ribosome protection technology in <em>T. brucei</em>, using readily cultured non-pathogenic insect stage forms. It will optimize conditions for nuclease treatment to preserve mRNA fragments protected by ribosomes and for the generation of unbiased libraries from the RNA samples for next generation sequencing. It will also include maturation of the bioinformatics pipeline to analyze resulting sequence data. </p>\r\n' +
        '<p class="govuk-body"Aim 2 will expand into the pathogenic, mammalian stages of the parasite, and identify genes that are regulated at the level of translation during <em>T. brucei </em>development in infective as compared to non-infective forms. The proposed work will provide an important new tool for studying trypanosomatid gene expression, yielding a comprehensive view of the role of translational control in <em>T. brucei </em>and clues to it mechanisms, as well as new information on the extent of translation of individual gene products, such as potential drug targets. </p>\r\n' +
        '<p class="govuk-body"In addition, it should resolve the current debate over the function of the numerous recently identified RNAs that contain only short open-reading frames, and has the potential to identify non-canonical protein-coding open-reading frames, thus significantly enhancing the ongoing genome annotation.</p>',
      detailsMarkAsComplete: false,
      oppTitle2: 'OPP147: African sleeping sickness - pathways to treatment',
      applicationTitle2: 'Ribosome profiling of Trypanosoma brucei',
      detailsMarkAsComplete2: true,
      resourcesAndCostsIsComplete: true,
      submitText:
        'The applicant has marked this as 100% complete and sent it to your Research Office to be checked. If revisions need to be made, it must be returned to the applicant for editing. Otherwise, it can be submitted to UKRI for assessment.',
      detailsGuidance:
        'Summarise your project giving details of how you intend to conduct your research, and how this is relevant to the original Opportunity brief. This summary should provide a sound overview allowing assessors and reviewers to understand your intended approach. You can give fuller details in subsequent sections.',
      detailsIsComplete2: true,
      resourcesAndCostJustification:
        '<p class="govuk-body">There are multiple equipment costs to cover the lab testing equipment and infrastrcture; including industrial manufacturing kit for bulk testing. This is hired from Mega Lab Stuff Ltd and is currently set at £850,000. </p><p class="govuk-body">Staffing costs are also expensive as we need specialist technicians to support the researchers. </p><p class="govuk-body">Cras a tincidunt felis. Vivamus convallis, velit et pulvinar mollis, mauris massa luctus arcu, cursus tristique nulla mi non justo. Mauris porttitor augue id magna suscipit fermentum. Nunc dui sapien, commodo commodo purus ac, accumsan luctus felis. Nullam id turpis quis velit auctor blandit. Morbi congue velit tincidunt enim pharetra scelerisque. Integer vulputate convallis rutrum. Vestibulum eleifend convallis cursus. Integer hendrerit tellus ac metus tincidunt, sit amet lobortis arcu dapibus.</p><p class="govuk-body">Vivamus libero nisi, iaculis id metus id, commodo fringilla elit. Nulla vestibulum nisl ut eros consectetur, fringilla volutpat lectus commodo. Morbi pulvinar massa non ex placerat vulputate. Praesent arcu dui, tristique eu lorem lobortis, dignissim tincidunt odio. Curabitur consequat turpis vel pharetra pulvinar. Donec semper vel ex a lobortis. Ut scelerisque cursus tellus sit amet commodo. Phasellus in ipsum massa. Curabitur ullamcorper purus at elementum sagittis.</p><p class="govuk-body">Aliquam sed nisi nisl. Integer ac neque arcu. Etiam semper felis et purus interdum, ut condimentum neque malesuada. Maecenas malesuada, ex vitae consequat volutpat, nisi ex viverra mi, ac imperdiet ex tellus ac sapien. Nunc vitae sagittis justo. Maecenas fermentum, lectus at gravida dapibus, ligula leo interdum purus, at aliquam urna ex ac metus. Donec non mattis leo. Morbi sodales id leo ac feugiat. Vivamus quis est in erat mollis tincidunt et ac eros. Donec faucibus mi sit amet risus tincidunt, a interdum risus elementum. Ut pellentesque aliquam aliquet. Morbi varius augue at felis cursus dictum.</p>',
    };
    return res.redirect('/prototypes/editv3/index');
  }

  console.log(prototypeData);

  viewData = {
    prototypeData,
  };
  return res.render('prototypes/editv3/index', viewData);
}

export function editv3IndexPost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/editv3/index');
}
/* **************

    Opportunity / start

*************** */
export function editv3OpportunityGet(req, res) {
  let viewData;

  viewData = {
    prototypeData,
  };
  return res.render('prototypes/editv3/opportunity', viewData);
}

export function editv3OpportunityPost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/editv3/opportunity');
}

/* **************

    Organisation

*************** */
export function editv3OrganisationGet(req, res) {
  let viewData;

  const allOrgs = generalData.allOrgs2;

  /*let organisationNameError = req.session.organisationNameError;
  req.session.organisationNameError = null;*/

  viewData = {
    allOrgs,
    prototypeData,
  };
  return res.render('prototypes/editv3/organisation', viewData);
}

export function editv3OrganisationPost(req, res) {
  const { organisation } = req.body;

  prototypeData.organisation = organisation;

  return res.redirect('/prototypes/editv3/role');
}

/* **************

    Role

*************** */
export function editv3RoleGet(req, res) {
  let viewData;

  let confirmationError = req.session.confirmationError;
  req.session.confirmationError = null;

  viewData = {
    prototypeData,
    confirmationError,
  };
  return res.render('prototypes/editv3/role', viewData);
}

export function editv3RolePost(req, res) {
  const { confirmation } = req.body;

  console.log(confirmation);

  let redirectURL = '';
  if (confirmation !== 'confirmation') {
    redirectURL = '/prototypes/editv3/role';
    req.session.confirmationError = true;
  } else {
    redirectURL = '/prototypes/editv3/group';
    req.session.confirmationError = false;
  }

  return res.redirect(redirectURL);
}

/* **************

    Groups

*************** */
export function editv3GroupGet(req, res) {
  let viewData;

  viewData = {
    prototypeData,
  };

  return res.render('prototypes/editv3/group', viewData);
}

export function editv3GroupPost(req, res) {
  const { groups } = req.body;

  prototypeData.groups = groups;

  return res.redirect('/prototypes/editv3/application-name');
}

/* **************

    Title of application

*************** */
export function editv3TitleGet(req, res) {
  let viewData;

  viewData = {
    prototypeData,
  };
  return res.render('prototypes/editv3/application-name', viewData);
}

export function editv3TitlePost(req, res) {
  const { title } = req.body;

  prototypeData.title = title;

  return res.redirect('/prototypes/editv3/application');
}

/* **************

    Application NEW ONE

*************** */
export function editv3ApplicationGet(req, res) {
  let viewData;

  viewData = {
    prototypeData,
  };
  return res.render('prototypes/editv3/application', viewData);
}

export function editv3ApplicationPost(req, res) {
  const { title } = req.body;

  prototypeData.title = title;

  return res.redirect('/prototypes/editv3/application');
}

/* **************

    Application NEW ONE DETAILS

*************** */
export function editv3DetailsGet(req, res) {
  let viewData;

  viewData = {
    prototypeData,
  };
  return res.render('prototypes/editv3/details-and-summary', viewData);
}

export function editv3DetailsPost(req, res) {
  const { projectName, isComplete, projectSummary } = req.body;

  prototypeData.title = projectName;
  prototypeData.summary1 = projectSummary;
  prototypeData.detailsJustBeenUpdated = true;

  if (isComplete === 'on') {
    prototypeData.detailsIsComplete1 = true;
  } else {
    prototypeData.detailsIsComplete1 = false;
  }

  return res.redirect('/prototypes/editv3/application');
}

/* **************

    Application Existing TWO

*************** */
export function editv3Application2Get(req, res) {
  let viewData;

  viewData = {
    prototypeData,
  };
  return res.render('prototypes/editv3/application2', viewData);
}

export function editv3Application2Post(req, res) {
  const { title } = req.body;

  prototypeData.title = title;

  return res.redirect('/prototypes/editv3/application2');
}

/* **************

    Application Existing TWO DETAILS

*************** */
export function editv3Details2Get(req, res) {
  let viewData;

  console.log(prototypeData);

  if (prototypeData.applicationTitle2COPY && prototypeData.applicationTitle2COPY !== prototypeData.applicationTitle2) {
    prototypeData.title2ToUse = prototypeData.applicationTitle2COPY;
  } else {
    prototypeData.title2ToUse = prototypeData.applicationTitle2;
  }

  if (prototypeData.summary2COPY && prototypeData.summary2COPY !== prototypeData.summary2) {
    prototypeData.summary2ToUse = prototypeData.summary2COPY;
  } else {
    prototypeData.summary2ToUse = prototypeData.summary2;
  }

  prototypeData.applicationTitle2COPY = null;
  prototypeData.summary2COPY = null;

  let cannotSaveDetails2 = req.session.cannotSaveDetails2;
  req.session.cannotSaveDetails2 = null;

  let reloadDetails2 = req.param('reloadDetails2');
  if (reloadDetails2 === 'true') {
    prototypeData.title2ToUse = prototypeData.applicationTitle2;
    prototypeData.summary2ToUse = prototypeData.summary2;
  }

  viewData = {
    prototypeData,
    cannotSaveDetails2,
  };

  return res.render('prototypes/editv3/details-and-summary2', viewData);
}

export function editv3Details2Post(req, res) {
  const { projectName, isComplete, projectSummary } = req.body;

  prototypeData.applicationTitle2COPY = projectName;
  prototypeData.summary2COPY = projectSummary;

  if (isComplete === 'on') {
    prototypeData.detailsIsComplete2 = true;
  } else {
    prototypeData.detailsIsComplete2 = false;
  }

  prototypeData.details2RecentChange = true;

  req.session.cannotSaveDetails2 = true;

  return res.redirect('/prototypes/editv3/details-and-summary2');
}

/* **************

    Applications LIST

*************** */
export function editv3ApplicationsGet(req, res) {
  let viewData;

  viewData = {
    prototypeData,
  };
  return res.render('prototypes/editv3/applications', viewData);
}

export function editv3ApplicationsPost(req, res) {
  const { title } = req.body;

  prototypeData.title = title;

  return res.redirect('/prototypes/editv3/applications');
}

/* **************

    Home

*************** */
export function editv3HomeGet(req, res) {
  let viewData;

  viewData = {};
  return res.render('prototypes/editv3/home', viewData);
}

export function editv3HomePost(req, res) {
  const {} = req.body;

  return res.redirect('/prototypes/editv3/home');
}

/* **************

    Manage users

*************** */
export function editv3ManageUsersGet(req, res) {
  let viewData;

  // genericPeopleOne
  // genericPeopleTwo

  let whichApplication = req.param('whichApplication');
  if (whichApplication === '1') {
    prototypeData.redirctFromManageUsers = '/prototypes/editv3/application';
    prototypeData.whichAppForManageUsers = 'one';
    genericPeople = genericPeopleOne;
  } else if (whichApplication === '2') {
    prototypeData.redirctFromManageUsers = '/prototypes/editv3/application2';
    prototypeData.whichAppForManageUsers = 'two';
    genericPeople = genericPeopleTwo;
  } else {
    prototypeData.redirctFromManageUsers = '/prototypes/editv3/application';
    prototypeData.whichAppForManageUsers = 'one';
  }

  viewData = {
    prototypeData,
    genericPeople,
  };

  return res.render('prototypes/editv3/manage-users', viewData);
}

export function editv3ManageUsersPost(req, res) {
  const { whichApplicationManageUsers } = req.body;

  let formStuff = req.body;
  let allowedEditors = [];
  for (const [key, value] of Object.entries(formStuff)) {
    if (key.includes('editor')) {
      allowedEditors.push(value);
    }
    // prototypeData.allowedEditors = allowedEditors;
  }

  console.log(genericPeople);
  // console.log(genericPeople.length);

  /*for(let i = 0; i < genericPeople.length; i++) {
    let tempName = genericPeople[i].firstName + ' ' + genericPeople[i].lastName;
    if(tempName = allowedEditors[i]) {
      genericPeople[i].selected.push(true);
    } else {
      genericPeople[i].selected.push(false);
    }
  }*/

  let redirectURL = '';
  if (prototypeData.whichAppForManageUsers === 'two') {
    redirectURL = '/prototypes/editv3/application2';
    genericPeopleTwo = genericPeople;
  } else if (prototypeData.whichAppForManageUsers === 'one') {
    genericPeopleOne = genericPeople;
    redirectURL = '/prototypes/editv3/application';
  }

  console.log(prototypeData.allowedEditors);
  req.session.manageUsersHasBeenUpdated = true;

  return res.redirect(redirectURL);
}

/* **************

    Resources and costs

*************** */
export function editv3ResourcesGet(req, res) {
  let viewData;

  let resourcesAndCostsNoSave = req.session.resourcesAndCostsNoSave;
  req.session.resourcesAndCostsNoSave = null;

  viewData = {
    prototypeData,
    resourcesAndCostsNoSave,
  };
  return res.render('prototypes/editv3/resources-and-costs', viewData);
}

export function editv3ResourcesPost(req, res) {
  const { justification } = req.body;

  prototypeData.resourcesAndCostJustification = justification;
  req.session.resourcesAndCostsNoSave = true;
  prototypeData.resourcesAndCostsNoSave = true;

  return res.redirect('/prototypes/editv3/resources-and-costs');
}

/* **************

    Edit log

*************** */
export function editv3EditLogGet(req, res) {
  let viewData;

  viewData = {
    prototypeData,
  };
  return res.render('prototypes/editv3/edit-log', viewData);
}

/* **************

    Edit log 2

*************** */
export function editv3EditLog2Get(req, res) {
  let viewData;

  viewData = {
    prototypeData,
  };
  return res.render('prototypes/editv3/edit-log2', viewData);
}