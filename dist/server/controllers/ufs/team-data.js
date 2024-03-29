'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const allTeamMembersFull = [{
  id: '1',
  firstName: 'Manolo',
  lastName: 'Bauer',
  role: '',
  roleType: 'Directly allocated',
  organisation: 'University of Wales',
  email: 'manolo.bauer@wales.ac.uk',
  timeSpent: '',
  averageHours: '',
  isComplete: true
}, {
  id: '2',
  firstName: 'Tina',
  lastName: 'Smollins',
  role: 'Researcher',
  roleType: 'Directly allocated',
  organisation: 'University of Bristol',
  email: 'tina.smollins@bristol.ac.uk',
  timeSpent: '100',
  averageHours: '40',
  isComplete: true
}, {
  id: '3',
  firstName: 'Bingo',
  lastName: 'Smithers',
  role: 'Postdoctoral research associate',
  roleType: 'Exception',
  organisation: 'University of Bristol',
  email: 'bingo.smithers@bristol.ac.uk',
  timeSpent: '75',
  averageHours: '40',
  startDay: '12',
  startMonth: '1',
  startYear: '2023',
  endDay: '1',
  endMonth: '1',
  endYear: '2024',
  isComplete: true
}, {
  id: '4',
  firstName: 'Wallace',
  lastName: 'Trumpton',
  role: 'Technician',
  roleType: 'Directly incurred',
  organisation: 'University of Wales',
  email: 'bingo.smithers@wales.ac.uk',
  timeSpent: '100',
  averageHours: '40',
  startDay: '12',
  startMonth: '1',
  startYear: '2023',
  endDay: '12',
  endMonth: '1',
  endYear: '2024',
  isComplete: true
}, {
  id: '5',
  firstName: 'Daphne',
  lastName: 'Willis',
  role: 'Postdoctoral research associate',
  roleType: 'Directly allocated',
  organisation: 'University of Wales',
  email: 'daphne.willis@wales.ac.uk',
  timeSpent: '100',
  averageHours: '40',
  startDay: '',
  startMonth: '',
  startYear: '',
  endDay: '',
  endMonth: '',
  endYear: '',
  isComplete: true
}, {
  id: '6',
  firstName: '',
  lastName: '',
  role: '',
  roleType: '',
  organisation: '',
  email: '',
  timeSpent: '',
  averageHours: '',
  startDay: '',
  startMonth: '',
  startYear: '',
  endDay: '',
  endMonth: '',
  endYear: '',
  isComplete: false
}, {
  id: '7',
  firstName: '',
  lastName: '',
  role: '',
  roleType: '',
  organisation: '',
  email: '',
  timeSpent: '',
  averageHours: '',
  startDay: '',
  startMonth: '',
  startYear: '',
  endDay: '',
  endMonth: '',
  endYear: '',
  isComplete: false
}, {
  id: '8',
  firstName: '',
  lastName: '',
  role: '',
  roleType: '',
  organisation: '',
  email: '',
  timeSpent: '',
  averageHours: '',
  startDay: '',
  startMonth: '',
  startYear: '',
  endDay: '',
  endMonth: '',
  endYear: '',
  isComplete: false
}, {
  id: '9',
  firstName: '',
  lastName: '',
  role: '',
  roleType: '',
  organisation: '',
  email: '',
  timeSpent: '',
  averageHours: '',
  startDay: '',
  startMonth: '',
  startYear: '',
  endDay: '',
  endMonth: '',
  endYear: '',
  isComplete: false
}, {
  id: '10',
  firstName: '',
  lastName: '',
  role: '',
  roleType: '',
  organisation: '',
  email: '',
  timeSpent: '',
  averageHours: '',
  startDay: '',
  startMonth: '',
  startYear: '',
  endDay: '',
  endMonth: '',
  endYear: '',
  isComplete: false
}];

const teamDataFull = exports.teamDataFull = allTeamMembersFull;

const allTeamMembersEmpty = [{
  id: '1',
  firstName: 'Manolo',
  lastName: 'Bauer',
  role: '',
  roleType: 'Directly allocated',
  organisation: 'University of Wales',
  email: 'manolo.bauer@wales.ac.uk',
  timeSpent: '',
  averageHours: '',
  isComplete: true
}, {
  id: '2',
  firstName: '',
  lastName: '',
  role: '',
  roleType: '',
  organisation: '',
  email: '',
  timeSpent: '',
  averageHours: '',
  startDay: '',
  startMonth: '',
  startYear: '',
  endDay: '',
  endMonth: '',
  endYear: '',
  isComplete: false
}, {
  id: '3',
  firstName: '',
  lastName: '',
  role: '',
  roleType: '',
  organisation: '',
  email: '',
  timeSpent: '',
  averageHours: '',
  startDay: '',
  startMonth: '',
  startYear: '',
  endDay: '',
  endMonth: '',
  endYear: '',
  isComplete: false
}, {
  id: '4',
  firstName: '',
  lastName: '',
  role: '',
  roleType: '',
  organisation: '',
  email: '',
  timeSpent: '',
  averageHours: '',
  startDay: '',
  startMonth: '',
  startYear: '',
  endDay: '',
  endMonth: '',
  endYear: '',
  isComplete: true
}, {
  id: '5',
  firstName: '',
  lastName: '',
  role: '',
  roleType: '',
  organisation: '',
  email: '',
  timeSpent: '',
  averageHours: '',
  startDay: '',
  startMonth: '',
  startYear: '',
  endDay: '',
  endMonth: '',
  endYear: '',
  isComplete: false
}, {
  id: '6',
  firstName: '',
  lastName: '',
  role: '',
  roleType: '',
  organisation: '',
  email: '',
  timeSpent: '',
  averageHours: '',
  startDay: '',
  startMonth: '',
  startYear: '',
  endDay: '',
  endMonth: '',
  endYear: '',
  isComplete: false
}, {
  id: '7',
  firstName: '',
  lastName: '',
  role: '',
  roleType: '',
  organisation: '',
  email: '',
  timeSpent: '',
  averageHours: '',
  startDay: '',
  startMonth: '',
  startYear: '',
  endDay: '',
  endMonth: '',
  endYear: '',
  isComplete: false
}, {
  id: '8',
  firstName: '',
  lastName: '',
  role: '',
  roleType: '',
  organisation: '',
  email: '',
  timeSpent: '',
  averageHours: '',
  startDay: '',
  startMonth: '',
  startYear: '',
  endDay: '',
  endMonth: '',
  endYear: '',
  isComplete: false
}, {
  id: '9',
  firstName: '',
  lastName: '',
  role: '',
  roleType: '',
  organisation: '',
  email: '',
  timeSpent: '',
  averageHours: '',
  startDay: '',
  startMonth: '',
  startYear: '',
  endDay: '',
  endMonth: '',
  endYear: '',
  isComplete: false
}, {
  id: '10',
  firstName: '',
  lastName: '',
  role: '',
  roleType: '',
  organisation: '',
  email: '',
  timeSpent: '',
  averageHours: '',
  startDay: '',
  startMonth: '',
  startYear: '',
  endDay: '',
  endMonth: '',
  endYear: '',
  isComplete: false
}];

const teamDataEmpty = exports.teamDataEmpty = allTeamMembersEmpty;