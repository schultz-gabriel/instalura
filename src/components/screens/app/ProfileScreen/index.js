/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ProfilePageWrapper from './style/ProfilePageWrapper';
import Grid from '../../../foundations/layout/Grid';
import Post from '../../../commons/PhotoPost';
import UserCard from '../../../commons/ProfilePageUserCard';

export default function ProfilePage(props) {
  const { posts } = props;
  const { githubInfo } = props;
  const { user } = props;
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
            <ProfilePageWrapper.UserInfo>
              <UserCard githubInfo={githubInfo} posts={posts} />
            </ProfilePageWrapper.UserInfo>
            <ProfilePageWrapper.UserPics>
              <ul className="userPosts">
                {posts.reverse().slice(0, 30).map((post) => (
                  <Post item={post} user={user} key={post.createdAt} postProps="profile" />
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
  user: PropTypes.object.isRequired,
};
