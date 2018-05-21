import {connect} from 'react-redux';

import {pop} from '@navigator/NavigationService';
import {getRemindersByContact} from '@redux/reminders';
import {Reminders} from './Reminders';

export const mapStateToProps = (state, {navigation}) => {
  const contact = state.contacts[navigation.state.params];
  return {
    reminders: (contact.reminders || []).map(
      reminderId => state.reminders[reminderId]
    ),
    isFetching: state.getRemindersByContact.isFetching,
  };
};

export const mapDispatchToProps = (dispatch, {navigation}) => ({
  pop,
  getRemindersByContact: () =>
    dispatch(getRemindersByContact(navigation.state.params)),
});

export const RemindersScreen = connect(mapStateToProps, mapDispatchToProps)(
  Reminders
);
