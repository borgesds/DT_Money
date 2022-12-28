import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImg from "../../assets/logo.png"
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <div>
                    <img src={logoImg} alt="" />
                    <h2>DT Money</h2>
                </div>
                
                {/* modal */}
                <Dialog.Root>
                    {/* asChild usa seu modelo de botão */}
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Noma Transação</NewTransactionButton>
                    </Dialog.Trigger>

                    {/* conteúdo do modal*/}
                    <NewTransactionModal />
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}