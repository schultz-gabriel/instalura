/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ProfilePageWrapper from './style/ProfilePageWrapper';
import Grid from '../../foundations/layout/Grid';
import Box from '../../foundations/layout/Box';
import Text from '../../foundations/Text';

export default function ProfilePage(props) {
  const { posts } = props;
  const { githubInfo } = props;
  return (
    <ProfilePageWrapper>
      <Grid.Container
        marginTop="100px"
      >
        <Grid.Row>
          <Grid.Col
            value={{ xs: 12, md: 10, lg: 8 }}
            offset={{ xs: 0, md: 1, lg: 2 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            {/* {console.log(posts)} */}
            <ProfilePageWrapper.UserInfo>
              <section className="user__image">
                <img className="profilePic" src={`${githubInfo.avatar}`} alt="Foto de perfil" />
              </section>
              <section className="user__data">
                <div className="user__data__counter">
                  <Text
                    variant="subTitle"
                    tag="span"
                    color="tertiary.main"
                  >
                    {posts.length}
                    <br />
                  </Text>
                  <Text
                    variant="smallestException"
                    tag="span"
                    color="tertiary.main"
                    opacity=".7"
                  >
                    Posts
                    <br />
                  </Text>
                </div>
                <div className="user__data__counter">
                  <Text
                    variant="subTitle"
                    tag="span"
                    color="tertiary.main"
                  >
                    {githubInfo.following}
                    <br />
                  </Text>
                  <Text
                    variant="smallestException"
                    tag="span"
                    color="tertiary.main"
                    opacity=".7"
                  >
                    Seguindo
                    <br />
                  </Text>
                </div>
                <div className="user__data__counter">
                  <Text
                    variant="subTitle"
                    tag="span"
                    color="tertiary.main"
                  >
                    {githubInfo.followers}
                    <br />
                  </Text>
                  <Text
                    variant="smallestException"
                    tag="span"
                    color="tertiary.main"
                    opacity=".7"
                  >
                    Seguidores
                    <br />
                  </Text>
                </div>
              </section>
              <section className="user__bio">
                <Text
                  variant="subTitle"
                  tag="h1"
                  color="tertiary.main"
                  margin="16px 0 0 0"
                >
                  {githubInfo.name}
                </Text>
                <Text
                  variant="paragraph1"
                  tag="p"
                  color="tertiary.main"
                  opacity=".7"
                  margin="0"
                >
                  {githubInfo.bio}
                </Text>
              </section>
            </ProfilePageWrapper.UserInfo>
            <ProfilePageWrapper.UserPics>
              <ul className="userPosts">
                {posts.reverse().slice(0, 30).map((post) => (
                  <li key={post.createdAt} className="userPosts__post">
                    <img className="userPosts__post__image" src={post.photoUrl} alt="." />
                    <div className="userPosts__post__feedback">
                      <Box
                        display="flex"
                      >
                        <img className="userPosts__post__feedback__icon" src="/images/likes.png" alt="" />
                        <Text
                          variant="paragraph1"
                          tag="p"
                          color="tertiary.light"
                          margin="0"
                        >
                          {post.likes.length}
                        </Text>
                      </Box>
                      <Box
                        display="flex"
                        margin="0 0 0 1.5rem"
                      >
                        <img className="userPosts__post__feedback__icon" src="/images/comments.png" alt="" />
                        <Text
                          variant="paragraph1"
                          tag="p"
                          color="tertiary.light"
                          margin="0"
                        >
                          0
                        </Text>
                      </Box>
                    </div>
                  </li>
                ))}
              </ul>
            </ProfilePageWrapper.UserPics>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </ProfilePageWrapper>
  );
}

ProfilePage.propTypes = {
  githubInfo: PropTypes.object.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string,
    slug: PropTypes.string,
    description: PropTypes.string,
  })).isRequired,
};
