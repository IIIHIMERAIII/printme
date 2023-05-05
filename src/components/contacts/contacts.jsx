import { ContactsWrapper, ContactsList, ContactsItem } from "./styled"

export const Contacts = () => {
    return (
        <ContactsWrapper>
            <ContactsList>
                <ContactsItem>Місто Полтава <br/> вул. Пушкіна, 53, оф. 11</ContactsItem>
                <ContactsItem> {`(+380) 50 404 96 36`} <br/> {`(+380) 68 404 96 36`} </ContactsItem>
            </ContactsList>
        </ContactsWrapper>
    )
}