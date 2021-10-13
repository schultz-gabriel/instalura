import React from 'react';
import PropTypes from 'prop-types';
import FeedWrapper from './style/FeedPageWrapper';
import Grid from '../../foundations/layout/Grid';
import Box from '../../foundations/layout/Box';
import Text from '../../foundations/Text';
import Button from '../../commons/Button';
import Link from '../../commons/Link';

const friends = [
  {
    name: 'Gabriel Schultz',
    username: 'SchultzGabriel',
    avatar: 'https://avatars.githubusercontent.com/u/81654505?v=4',
  },
  {
    name: 'Victor Dantas',
    username: 'victordantasdev',
    avatar: 'https://avatars.githubusercontent.com/u/64330605?v=4',
  },
  {
    name: 'Carol Andrade',
    username: 'carolandrade1',
    avatar: 'https://avatars.githubusercontent.com/u/65976843?v=4',
  },
  {
    name: 'Rayanne Barros',
    username: 'rayanne-barros',
    avatar: 'https://avatars.githubusercontent.com/u/81394995?v=4',
  },
];

export default function FeedScreen(props) {
  const { posts } = props;
  const { githubInfo } = props;
  // console.log(githubInfo);
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
              {posts.slice(0, 30).map((post) => (
                <li key={post.id} className="posts__post">
                  <section className="posts__post-header">
                    <Link
                      href="/app/profile"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <img className="posts__post-header__pic" src={githubInfo.avatar} alt={`perfil de${githubInfo.name}`} />
                      <Text
                        variant="subTitle"
                        tag="h2"
                        color="tertiary.main"
                        margin="0 0 0 1rem"
                      >
                        {githubInfo.name}
                      </Text>
                    </Link>
                    <Button ghost className="button">
                      <img src="/images/menu.png" alt="icone de menu" />
                    </Button>
                  </section>
                  <section className="posts__post-body">
                    <img src={post.photoUrl} alt={post.description} />
                  </section>
                  <section className="posts__post-footer">
                    <Box
                      display="flex"
                      alignItems="center"
                      width="100%"
                      justifyContent="space-between"
                    >
                      <section className="posts__post-footer__feedback-section">
                        <Box
                          alignItems="center"
                          display="flex"
                          justifyContent="space-around"
                          margin="0 15px 0 0"
                        >
                          <Button ghost className="button">
                            <img src="/images/heart.png" alt="" />
                          </Button>
                          <Text
                            variant="subTitle"
                            tag="span"
                            color="tertiary.main"
                            margin="0 0 0 10px"
                          >
                            {post.likes.length}
                          </Text>
                        </Box>
                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent="space-around"
                          margin="0 15px 0 0"
                        >
                          <Button ghost className="button">
                            <img src="/images/comments-1.png" alt="" />
                          </Button>
                          <Text
                            variant="subTitle"
                            tag="span"
                            color="tertiary.main"
                            margin="0 0 0 10px"
                          >
                            0
                          </Text>
                        </Box>
                        <Button ghost className="button">
                          <img src="/images/send.png" alt="" />
                        </Button>
                      </section>
                      <Button ghost className="button">
                        <img src="/images/save.png" alt="" />
                      </Button>
                    </Box>
                  </section>
                </li>
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
              <section className="profiles__card">
                <Box
                  display="flex"
                  alignItems="center"
                >
                  <img src={githubInfo.avatar} className="profiles__card__pic" alt={`perfil de${githubInfo.name}`} />
                  <div className="profiles__card__usernames">
                    <Text
                      variant="paragraph1"
                      tag="span"
                      color="tertiary.main"
                    >
                      {githubInfo.name}
                    </Text>
                    <Text
                      variant="paragraph2"
                      tag="span"
                      color="tertiary.main"
                      opacity=".7"
                    >
                      {githubInfo.username}
                    </Text>
                  </div>
                </Box>
                <a href={githubInfo.url} target="_blank" rel="noopener noreferrer" className="profiles__card__link">
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
              </section>
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
                  <li key={item.name} className="profiles__card">
                    <Box
                      display="flex"
                      alignItems="center"
                      width="100%"
                    >
                      <img src={item.avatar} className="profiles__card__pic--friends" alt={`perfil de${item.name}`} />
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
                    <a href={`https://github.com/${item.username}`} target="_blank" rel="noopener noreferrer" className="profiles__card__link">
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
                  </li>
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
  // eslint-disable-next-line react/forbid-prop-types
  githubInfo: PropTypes.object.isRequired,
};
