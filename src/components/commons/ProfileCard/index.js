import React from 'react';
import PropTypes from 'prop-types';
import ProfileCardWrapper from './style/ProfileCardWrapper';
import Box from '../../foundations/layout/Box';
import Text from '../../foundations/Text';

export default function ProfileCard({ item, main }) {
  const isCardMain = Boolean(main);
  return (
    <ProfileCardWrapper main={isCardMain}>
      <Box
        display="flex"
        alignItems="center"
      >
        <img src={item.avatar} className="profiles__card__pic" alt={`perfil de${item.name}`} />
        <div className="profiles__card__usernames">
          <Text
            variant="paragraph1"
            tag="span"
            color="tertiary.main"
          >
            {item.name}
          </Text>
          <Text
            variant="paragraph2"
            tag="span"
            color="tertiary.main"
            opacity=".7"
          >
            {item.username}
          </Text>
        </div>
      </Box>
      <a href={item.url} target="_blank" rel="noopener noreferrer" className="profiles__card__link">
        <Text
          variant="paragraph1"
          tag="span"
          color="secondary.main"
          margin="0 5px 0 0"
        >
          Github
        </Text>
        <img src="/images/github.svg" alt="" />
      </a>
    </ProfileCardWrapper>
  );
}

ProfileCard.defaultProps = {
  main: '',
};

ProfileCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
  main: PropTypes.bool,
};
