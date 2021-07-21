import React, { useState } from 'react';
import { Button } from 'reactstrap';
import PenIcon from 'mdi-react/PenIcon';
import InboxArrowDownIcon from 'mdi-react/InboxArrowDownIcon';
import EmailIcon from 'mdi-react/EmailIcon';
import TooltipEditIcon from 'mdi-react/TooltipEditIcon';
import StarIcon from 'mdi-react/StarIcon';
import DeleteIcon from 'mdi-react/DeleteIcon';
import MenuIcon from 'mdi-react/MenuIcon';
import { EmailsProps } from '@/shared/prop-types/EmailProps';
import MailBox from './MailBox';
import ComposeEmail from './ComposeEmail';
import Email from './Email';
import showResults from '../../Form/Show';
import InboxTable from './InboxTable';

const mailboxes = [
  { icon: <InboxArrowDownIcon />, title: 'Inbox', amount: 21 },
  { icon: <EmailIcon />, title: 'Sent Mail' },
  { icon: <TooltipEditIcon />, title: 'Drafts', amount: 2 },
  { icon: <StarIcon />, title: 'Tagged' },
  { icon: <DeleteIcon />, title: 'Deleted' },
];

const labels = [
  { color: 'green', title: 'Freelance' },
  { color: 'red', title: 'Work' },
  { color: 'blue', title: 'Travel' },
  { color: 'yellow', title: 'Clients' },
];

const Inbox = ({ emails }) => {
  const [isComposed, setIsComposed] = useState(false);
  const [email, setEmail] = useState(false);
  const [mailbox, setMailbox] = useState(0);
  const [label, setLabel] = useState(0);
  const [isOpenedMailboxes, setIsOpenedMailboxes] = useState(false);

  const mailboxesWithID = mailboxes.map((item, index) => ({ ...item, id: index }));
  const labelsWithID = labels.map((item, index) => ({ ...item, id: index }));

  const onCompose = () => {
    setIsComposed(true);
    setEmail(false);
  };

  const onMailBox = (index) => {
    setMailbox(index);
    setIsComposed(false);
    setEmail(false);
  };

  const onLabel = (index) => {
    setLabel(index);
    setIsComposed(false);
    setEmail(false);
  };

  const onLetter = () => {
    setEmail(true);
  };

  const onOpenMailboxes = () => {
    setIsOpenedMailboxes(!isOpenedMailboxes);
  };

  return (
    <div
      className={`inbox${isOpenedMailboxes ? ' inbox--show-mailboxes' : ''}`}
      onClick={isOpenedMailboxes ? onOpenMailboxes : null}
      role="presentation"
    >
      <div className="inbox__mailbox-list">
        <Button
          color="primary"
          className="icon inbox__mailbox-list-btn"
          size="sm"
          onClick={onCompose}
        >
          <PenIcon />Compose
        </Button>
        {mailboxesWithID.map((item, index) => (
          <button
            type="button"
            className="inbox__list-button"
            key={item.id}
            onClick={() => onMailBox(index)}
          >
            <MailBox title={item.title} amount={item.amount} selected={index === mailbox}>
              {item.icon}
            </MailBox>
          </button>
        ))}
        <p className="inbox__labels">Labels</p>
        {labelsWithID.map((item, index) => (
          <button
            type="button"
            key={item.id}
            onClick={() => onLabel(index)}
            className={`inbox__list-button inbox__label${label === index ? ' active' : ''}`}
          >
            <span className={`inbox__label-color inbox__label-color--${item.color}`} />{item.title}
          </button>
        ))}
      </div>
      <div className="inbox__container">
        <div className={`inbox__topbar${email ? ' inbox__topbar--hide' : ''}`}>
          <button className="inbox__topbar-button" type="button" onClick={onOpenMailboxes}>
            <MenuIcon className="inbox__topbar-button-icon" />
          </button>
        </div>
        {!isComposed
          ? (
            <div>
              {email
                ? (
                  <Email
                    email={emailExample[0]}
                    onReply={onCompose}
                    onSubmit
                    onBack={() => onMailBox(mailbox)}
                  />
                )
                : <InboxTable emails={emails} onLetter={onLetter} />}
            </div>
          )
          : <ComposeEmail onSubmit={showResults} />}
      </div>
    </div>
  );
};

Inbox.propTypes = {
  emails: EmailsProps.isRequired,
};

export default Inbox;
