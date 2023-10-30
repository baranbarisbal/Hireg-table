import { gql } from "@apollo/client";

export const MY_QUERY = gql`
  query getCompanyApplicantList(
    $page: Int!
    $pageSize: Int
    $filter: ApplicantListFilter
    $sort: ApplicantListSort
  ) {
    getCompanyApplicantList(
      page: $page
      pageSize: $pageSize
      filter: $filter
      sort: $sort
    ) {
      applicants {
        ...CoreTalentFragment
        email
        phoneNumber
        address
        gender
        dateOfBirth
        gradUni
        salaryExp
        sourceLink
        sourceType
        sourceUpdatedAt
        updatedAt
        createdAt
        tags {
          id
          name
          color
          __typename
        }
        skills {
          id
          name
          color
          __typename
        }
        applications {
          id
          aiFit
          score
          lexorank
          jobListing {
            id
            name
            color
            type
            __typename
          }
          stage {
            id
            name
            __typename
          }
          assignees {
            id
            firstName
            lastName
            profilePictureUrl
            email
            __typename
          }
          resume {
            id
            name
            url
            size
            pageCount
            uploadedAt
            __typename
          }
          __typename
        }
        __typename
      }
      total
      pages
      __typename
    }
  }

  fragment CoreTalentFragment on Applicant {
    id
    firstName
    lastName
    rating
    isFavoritedByMe
    lastApplication {
      id
      aiFit
      score
      lexorank
      resume {
        id
        name
        url
        size
        pageCount
        uploadedAt
        __typename
      }
      jobListing {
        id
        name
        color
        type
        __typename
      }
      stage {
        id
        name
        __typename
      }
      assignees {
        id
        firstName
        lastName
        profilePictureUrl
        email
        __typename
      }
      __typename
    }
    __typename
  }
`;
