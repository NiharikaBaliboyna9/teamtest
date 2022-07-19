/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      posts {
        items {
          id
          userID
          createdAt
          alias
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      posts {
        items {
          id
          userID
          createdAt
          alias
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      posts {
        items {
          id
          userID
          createdAt
          alias
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      user {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      createdAt
      alias
      updatedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      user {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      createdAt
      alias
      updatedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      user {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      createdAt
      alias
      updatedAt
    }
  }
`;
