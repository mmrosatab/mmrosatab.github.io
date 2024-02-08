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
import { useEffect } from "react"

type LanguageOptions = 'en' | 'es' | 'pt'
const LANG_KEY = 'LANG_REACT_APP'

export function NavBar(): JSX.Element{

    const { t } = useTranslation()

    const handleChangeLanguage = (language: LanguageOptions) => {
        i18n.changeLanguage(language)
        setLanguageOnStorage(language)
    }

    const setLanguage = (language: LanguageOptions) => {
        i18n.changeLanguage(language)
    }

    const setLanguageOnStorage = (language: LanguageOptions) => {
        if(window.localStorage){
            window.localStorage.setItem(LANG_KEY, language)
        }
    }

    const loadStorageInformation = () => {
        if(window.localStorage){
            const language = window.localStorage.getItem(LANG_KEY) as LanguageOptions

            if(language && language.length > 0){
                setLanguage(language)
            }
        }
    }

    useEffect(() => {
        loadStorageInformation()
    }, [])

    return (
        <NavBarContainer>
            <ContainerLogoAndNavBarLinks>
                <LogoContainer>
                    <Logo src={infinityImg} alt="infinity image"/>
                </LogoContainer>
                <UnorderedList>
                    <ListItem><NavBarLink to='/'>{t('home')}</NavBarLink></ListItem>
                    <ListItem><NavBarLink to='/a'>{t('portfolio')}</NavBarLink></ListItem>
                    <ListItem><NavBarLink to='/b'>{t('resume')}</NavBarLink></ListItem>
                    <ListItem><NavBarLink to='/c'>{t('classes')}</NavBarLink></ListItem>
                    <ListItem><NavBarLink to='/d'>{t('budgets')}</NavBarLink></ListItem>
                    <ListItem><NavBarLink to='/contact'>{t('contact')}</NavBarLink></ListItem>
                </UnorderedList>
            </ContainerLogoAndNavBarLinks>

            <ContainerSocialMediaAndFlags>
                <SocialMediaContainer>
                    <SocialMediaButton
                        $imageSource={githubImg}
                        href='https://github.com/mmrosatab'
                        target='_blank'
                    />
                    <SocialMediaButton
                        $imageSource={linkedinImg}
                        href='https://www.linkedin.com/in/mmrosatab/'
                        target='_blank'
                    />
                </SocialMediaContainer>
                <FlagsContainer>
                    <FlagButton
                        type="button"
                        $imageSource={brazilImg}
                        onClick={() => handleChangeLanguage('pt')}
                    />
                    <FlagButton
                        type="button"
                        $imageSource={spainImg}
                        onClick={() => handleChangeLanguage('es')}
                    />
                    <FlagButton
                        type="button"
                        $imageSource={usaImg}
                        onClick={() => handleChangeLanguage('en')}
                    />
                </FlagsContainer>
            </ContainerSocialMediaAndFlags>
        </NavBarContainer>
    )
}