/**
 * Created by usamaahmed on 4/11/17.
 */
import gql from 'graphql-tag';


export const ItemDelete = gql`
    mutation ItemDelete($id : Int!) {
        ItemDelete(id : $id) {
        id
        }
    }
`;

export const ItemStore = gql`
    mutation ItemStore($name : String, $user_id : Int, $category_id : Int, $type : String) {
        ItemStore (name: $name, user_id: $user_id , category_id: $category_id, type: $type) {
            id
            name
            user_id
            category_id
            type
        }
    }
`;

export const ItemEdit = gql`
    mutation ItemEdit($id : Int!,$name : String, $user_id : Int, $category_id : Int, $type : String) {
        ItemEdit (id : $id, name: $name, user_id: $user_id , category_id: $category_id, type: $type) {
            id
            name
            user_id
            category_id
            type
        }
    }
`;

export const UserMetaEdit = gql`
    mutation UserMetaEdit($id : Int!, $logo : String, $establishment_year: String, $fax : String) {
        UserMetaEdit(id : $id, logo : $logo , establishment_year : $establishment_year, fax : $fax) {
            id
            logo
            fax
            establishment_year
        }
    }
`

export const Authenticate = gql`
    mutation authenticate($email: String!, $password : String!) {
        authenticate(email : $email, password : $password)
    }
`