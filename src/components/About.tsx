import { Link } from 'gatsby';
import * as _ from 'lodash';
import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { colors } from '../styles/colors';
import { PageContext } from '../templates/post';

const PostCardStyles = css`
  flex: 1 1 300px;
  overflow: hidden;
  margin: 0 20px 40px;
  min-height: 300px;
  background: #fff center center;
  background-size: cover;
  border-radius: 5px;
  box-shadow: rgba(39, 44, 49, 0.06) 8px 14px 38px, rgba(39, 44, 49, 0.03) 1px 3px 8px;
  transition: all 0.5s ease;

  :hover {
    box-shadow: rgba(39, 44, 49, 0.07) 8px 28px 50px, rgba(39, 44, 49, 0.04) 1px 6px 12px;
    transition: all 0.4s ease;
    transform: translate3D(0, -1px, 0) scale(1.02);
  }
`;

const PostCardContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PostCardContentLink = css`
  position: relative;
  flex-grow: 1;
  display: block;
  padding: 25px 25px 0;
  color: ${colors.darkgrey};

  :hover {
    text-decoration: none;
  }
`;

const PostCardTitle = styled.h2`
  margin-top: 0;
  color: #45282C;
  text-align: center;
`;

const PostCardExcerpt = styled.section`
  font-family: Georgia, serif;
`;

export interface PostCardProps {
  post: PageContext;
}

const About: React.FC<PostCardProps> = ({ post }) => {
  return (
    <article
      className={`post-card ${post[0].frontmatter.image ? '' : 'no-image'}`}
      css={PostCardStyles}
    >
      <PostCardContent className="post-card-content">
        <Link className="post-card-content-link" css={PostCardContentLink} to='/about-me'>
          <header className="post-card-header">
            <PostCardTitle>Hi, I'm Chris!</PostCardTitle>
          </header>
          <PostCardExcerpt>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </PostCardExcerpt>
        </Link>
      </PostCardContent>
    </article>
  );
};

export default About;
