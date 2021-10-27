/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import FeedWrapper from './style/FeedPageWrapper';
import Grid from '../../../foundations/layout/Grid';
import Text from '../../../foundations/Text';
import Post from '../../../commons/PhotoPost';
import ProfileCard from '../../../commons/ProfileCard';

const friends = [
  {
    name: 'Gabriel Schultz',
    username: 'SchultzGabriel',
    avatar: 'https://avatars.githubusercontent.com/u/81654505?v=4',
    url: 'https://github.com/SchultzGabriel',
  },
  {
    name: 'Victor Dantas',
    username: 'victordantasdev',
    avatar: 'https://avatars.githubusercontent.com/u/64330605?v=4',
    url: 'https://github.com/victordantasdev',
  },
  {
    name: 'Carol Andrade',
    username: 'carolandrade1',
    avatar: 'https://avatars.githubusercontent.com/u/65976843?v=4',
    url: 'https://github.com/carolandrade1',
  },
  {
    name: 'Rayanne Barros',
    username: 'rayanne-barros',
    avatar: 'https://avatars.githubusercontent.com/u/81394995?v=4',
    url: 'https://github.com/rayanne-barros',
  },
];

export default function FeedScreen(props) {
  const { posts } = props;
  const { githubInfo } = props;
  const { user } = props;
  return (
    <FeedWrapper>
      <Grid.Container
        marginTop="100px"
      >
        <Grid.Row>
          <Grid.Col
            value={{ xs: 12, md: 6 }}
            offset={{ xs: 0, md: 1 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <ul className="posts">
              {posts.reverse().slice(0, 30).map((post) => (
                <Post item={post} user={user} githubInfo={githubInfo} key={post.createdAt} postProps="feed" />
              ))}
            </ul>
          </Grid.Col>
          <Grid.Col
            value={{ md: 5, lg: 4 }}
            offset={{ md: 0, lg: 0 }}
            display="flex"
            // position="relative"
          >
            <section className="profiles">
              <ProfileCard item={githubInfo} main="true" />
              <Text
                variant="paragraph1"
                tag="span"
                color="tertiary.main"
                margin="20px 5px 0 0"
                opacity=".7"
              >
                Projetos da galera
              </Text>
              <ul>
                {friends.map((item) => (
                  <ProfileCard item={item} key={item.username} />
                ))}
              </ul>
            </section>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </FeedWrapper>
  );
}

FeedScreen.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string,
    slug: PropTypes.string,
    description: PropTypes.string,
  })).isRequired,
  githubInfo: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};
