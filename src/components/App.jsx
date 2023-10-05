import { CardProfile } from './profile/profile';
import user from '../data/user.json';

import { Statistics } from './statistics/statistics';
import data from '../data/data.json';

import { FriendList } from './friendslist/friendList';
import friendlist from '../data/friends.json';

import { TransactionHistory } from './transactions/transactionHistory';
import transactions from '../data/transactions.json';

export const App = props => {
  return (
    <div>
      <CardProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friendlist} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
