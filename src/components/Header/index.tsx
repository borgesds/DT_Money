import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImg from "../../assets/logo.svg"

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <div>
                    <img src={logoImg} alt="" />
                    <h2>DT Money</h2>
                </div>
                

                <NewTransactionButton>Noma Transação</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}