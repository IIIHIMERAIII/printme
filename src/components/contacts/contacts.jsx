import { ContactsWrapper, ContactsList, ContactsItem, ContactLink } from "./styled"

export const Contacts = () => {
    return (
        <ContactsWrapper>
            <ContactsList>
                <ContactsItem>м. Полтава <br/> вул. Пушкіна, 53, оф. 11</ContactsItem>
                <ContactsItem> <ContactLink href='tel:+380504049636' > {`(+380) 50 404 96 36`} </ContactLink> <br/> <ContactLink href='tel:+380684049636'> {`(+380) 68 404 96 36`} </ContactLink> </ContactsItem>
            </ContactsList>
        </ContactsWrapper>
    )
}