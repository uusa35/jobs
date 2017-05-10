/**
 * Created by usamaahmed on 4/10/17.
 */
import gql from 'graphql-tag';

export const UserIndex = gql`
    query {
        users {
            id
            name
            email
            active
            created_at
            user_meta {
                id
                fax
                phone
                logo
                establishment_year
                catalogue
                description
                user_id
                created_at
            }
            items {
              id
              user_id
              name
              type
              category_id
              type
              created_at
              updated_at
            }
        }
    }
`

export const Item = gql`
    query item($id : Int!) {
        item(id : $id) {
            id
            name
            category_id
            user_id
            type
        }
    }
`

export const Items = gql`
    query {
        items {
            id
            name
            category_id
            user_id
            image
            created_at
        }
    }
`