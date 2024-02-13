import { useTranslation } from "react-i18next"
import {
    NavBarContainer,
    UnorderedList,
    ListItem,
    FlagsContainer,
    FlagButton,
    LogoContainer,
    Logo,
    NavBarLinksAndButtonsContainer,
    SocialMediaAndFlagsContainer,
    SocialMediaContainer,
    SocialMediaButton,
    MenuButton,
    CrossButton,
} from "./styles"
import brazilImg from '../../assets/brazil-flag.svg'
import usaImg from '../../assets/usa-flag.svg'
import spainImg from '../../assets/spain-flag.svg'
import infinityImg from '../../assets/infinity.svg'
import githubImg from '../../assets/github.svg'
import linkedinImg from '../../assets/linkedin.svg'
import menuImg from '../../assets/menu.svg'
import crossImg from '../../assets/cross.svg'
import i18n from "../../i18n/i18"
import { NavBarLink } from "./NavBarLink"
import { useEffect, useState } from "react"

type LanguageOptions = 'en' | 'es' | 'pt'
const LANG_KEY = 'LANG_REACT_APP'

export function NavBar(): JSX.Element{

    const { t } = useTranslation()
    const [openMenu, setOpenMenu] = useState(false)

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

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }
    
    useEffect(() => {
        loadStorageInformation()
    }, [])

    return (
        <NavBarContainer>
            <LogoContainer>
                <Logo src={infinityImg} alt="infinity image"/>
                
            </LogoContainer>
            <MenuButton
                $imageSource={menuImg}  
                onClick={toggleMenu}
                id='menu-button'
                open={openMenu}
            />
            <CrossButton 
                $imageSource={crossImg} 
                onClick={toggleMenu}
                id='cross-button'
                open={openMenu}
            />
            <NavBarLinksAndButtonsContainer
                id='navbar-links-buttons'
                open={openMenu}
            >
                <UnorderedList>
                    <ListItem><NavBarLink to='/'>{t('home')}</NavBarLink></ListItem>
                    <ListItem><NavBarLink to='/a'>{t('portfolio')}</NavBarLink></ListItem>
                    <ListItem><NavBarLink to='/b'>{t('resume')}</NavBarLink></ListItem>
                    <ListItem><NavBarLink to='/c'>{t('classes')}</NavBarLink></ListItem>
                    <ListItem><NavBarLink to='/d'>{t('budgets')}</NavBarLink></ListItem>
                    <ListItem><NavBarLink to='/contact'>{t('contact')}</NavBarLink></ListItem>
                </UnorderedList>

                <SocialMediaAndFlagsContainer>
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
                </SocialMediaAndFlagsContainer>
            </NavBarLinksAndButtonsContainer>
        </NavBarContainer>
    )
}