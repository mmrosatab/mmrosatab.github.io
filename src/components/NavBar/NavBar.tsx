import { useTranslation } from "react-i18next"
import {
    NavBarContainer,
    UnorderedList,
    ListItem,
    FlagsContainer,
    FlagButton,
    LogoContainer,
    Logo,
    ContainerLogoAndNavBarLinks,
    ContainerSocialMediaAndFlags,
    SocialMediaContainer,
    SocialMediaButton,
} from "./styles"
import brazilImg from '../../assets/brazil-flag.svg'
import usaImg from '../../assets/usa-flag.svg'
import spainImg from '../../assets/spain-flag.svg'
import infinityImg from '../../assets/infinity.svg'
import githubImg from '../../assets/github.svg'
import linkedinImg from '../../assets/linkedin.svg'
import i18n from "../../i18n/i18"
import { NavBarLink } from "./NavBarLink"

export function NavBar(): JSX.Element{

    const { t } = useTranslation()

    const handleChangeLanguage = (language: string) => {
        i18n.changeLanguage(language)
    }

    return (
        <NavBarContainer>
            <ContainerLogoAndNavBarLinks>
                <LogoContainer>
                    <Logo src={infinityImg} alt="infinity image"/>
                </LogoContainer>
                <UnorderedList>
                    <ListItem><NavBarLink to='/'>{t('home')}</NavBarLink></ListItem>
                    <ListItem><NavBarLink to='/a'>{t('portifolio')}</NavBarLink></ListItem>
                    <ListItem><NavBarLink to='/b'>{t('curriculum')}</NavBarLink></ListItem>
                    <ListItem><NavBarLink to='/c'>{t('classes')}</NavBarLink></ListItem>
                    <ListItem><NavBarLink to='/d'>{t('budgets')}</NavBarLink></ListItem>
                    <ListItem><NavBarLink to='/Contact'>{t('contact')}</NavBarLink></ListItem>
                </UnorderedList>
            </ContainerLogoAndNavBarLinks>

            <ContainerSocialMediaAndFlags>
                <SocialMediaContainer>
                    <SocialMediaButton
                        img={githubImg}
                        href='https://github.com/mmrosatab'
                        target='_blank'
                    />
                    <SocialMediaButton
                        img={linkedinImg}
                        href='https://www.linkedin.com/in/mmrosatab/'
                        target='_blank'
                    />
                </SocialMediaContainer>
                <FlagsContainer>
                    <FlagButton
                        img={brazilImg}
                        onClick={() => handleChangeLanguage('pt')}
                    />
                    <FlagButton
                        img={spainImg}
                        onClick={() => handleChangeLanguage('es')}
                    />
                    <FlagButton
                        img={usaImg}
                        onClick={() => handleChangeLanguage('en')}
                    />
                </FlagsContainer>
            </ContainerSocialMediaAndFlags>
        </NavBarContainer>
    )
}