/** @jsxImportSource @emotion/react */


import { Fragment, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { ArrowRightIcon as LucideArrowRightIcon, LinkIcon as LucideLinkIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { Avatar as RadixThemesAvatar, Box as RadixThemesBox, Button as RadixThemesButton, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import env from "/env.json"
import NextLink from "next/link"
import { Text } from "@chakra-ui/react"
import NextHead from "next/head"



export function Link_bd5df7bc9e7545e08391a40533840622 () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "height": "100%", "diaplay": "block", "borderRadius": "1em", "alignItems": "start", "textDecortion": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.instagram.com/fmorenoadmin/`} passHref={true}>
  <RadixThemesButton css={{"alignItems": "start", "width": "100%", "height": "100%", "diaplay": "block", "padding": "0.5em", "borderRadius": "1em"}}>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start"}} direction={`row`} gap={`2`}>
  <LucideArrowRightIcon css={{"color": "var(--current-color)", "width": "2em", "alignItems": "start"}}/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start"}} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"fontSize": "1em"}}>
  {`Instagam`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontSize": "0.8em"}}>
  {`Instagram`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Fragment_ac0b06893fc1b15016f3e0532508036d () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue(connectErrors.length >= 2) ? (
  <Fragment>
  <RadixThemesDialog.Root css={{"zIndex": 9999}} open={connectErrors.length >= 2}>
  <RadixThemesDialog.Content>
  <RadixThemesDialog.Title>
  {`Connection Error`}
</RadixThemesDialog.Title>
  <RadixThemesText as={`p`}>
  {`Cannot connect to server: `}
  {(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}
  {`. Check if server is reachable at `}
  {getBackendURL(env.EVENT).href}
</RadixThemesText>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Link_7df33d46af770d2d73b9e071ae3b1dd9 () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "height": "100%", "diaplay": "block", "borderRadius": "1em", "alignItems": "start", "textDecortion": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.facebook.com/fmorenoadmin/`} passHref={true}>
  <RadixThemesButton css={{"alignItems": "start", "width": "100%", "height": "100%", "diaplay": "block", "padding": "0.5em", "borderRadius": "1em"}}>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start"}} direction={`row`} gap={`2`}>
  <LucideArrowRightIcon css={{"color": "var(--current-color)", "width": "2em", "alignItems": "start"}}/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start"}} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"fontSize": "1em"}}>
  {`Facebook`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontSize": "0.8em"}}>
  {`Facebook`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_f886267ee8ffb1b252b84067a62d38ed () {


  return (
    <RadixThemesLink asChild={true} css={{"textDecortion": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.instagram.com/fmorenoadmin/`} passHref={true}>
  <LucideLinkIcon css={{"color": "var(--current-color)"}}>
  {`link`}
</LucideLinkIcon>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_b7a1b9d6ff6b1b2330688a8a4f66b698 () {


  return (
    <RadixThemesLink asChild={true} css={{"textDecortion": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.youtube.com/@fmorenoadmin`} passHref={true}>
  <LucideLinkIcon css={{"color": "var(--current-color)"}}>
  {`link`}
</LucideLinkIcon>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_8bc6df5a76cff4312ce093083606ad64 () {


  return (
    <RadixThemesLink asChild={true} css={{"textDecortion": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://frankmorenoalburqueque.com/`} passHref={true}>
  {`Frank Moreno`}
</NextLink>
</RadixThemesLink>
  )
}

export function Link_8220fcbb3a555b82af06578fc4ec3ba6 () {


  return (
    <RadixThemesLink asChild={true} css={{"textDecortion": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.facebook.com/fmorenoadmin/`} passHref={true}>
  <LucideLinkIcon css={{"color": "var(--current-color)"}}>
  {`link`}
</LucideLinkIcon>
</NextLink>
</RadixThemesLink>
  )
}

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Link_8046d9256ab23f71a6de5bfb31030f84 () {


  return (
    <RadixThemesLink asChild={true} css={{"textDecortion": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://twitch.tv/fmorenoadmin/`} passHref={true}>
  <LucideLinkIcon css={{"color": "var(--current-color)"}}>
  {`link`}
</LucideLinkIcon>
</NextLink>
</RadixThemesLink>
  )
}

export function Fragment_966c0378eb9d65bdfb5286644be9b831 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const state = useContext(StateContexts.state)


  return (
    <Fragment>
  {isTrue(((!state.is_hydrated) || (connectErrors.length > 0))) ? (
  <Fragment>
  <LucideWifiOffIcon css={{"color": "crimson", "zIndex": 9999, "position": "fixed", "bottom": "30px", "right": "30px", "animation": `${pulse} 1s infinite`}} size={32}>
  {`wifi_off`}
</LucideWifiOffIcon>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Link_3a614f33d0117a0e34ac5b02b45f9818 () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "height": "100%", "diaplay": "block", "borderRadius": "1em", "alignItems": "start", "textDecortion": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://twitch.tv/fmorenoadmin/`} passHref={true}>
  <RadixThemesButton css={{"alignItems": "start", "width": "100%", "height": "100%", "diaplay": "block", "padding": "0.5em", "borderRadius": "1em"}}>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start"}} direction={`row`} gap={`2`}>
  <LucideArrowRightIcon css={{"color": "var(--current-color)", "width": "2em", "alignItems": "start"}}/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start"}} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"fontSize": "1em"}}>
  {`Twitch`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontSize": "0.8em"}}>
  {`Directos los Sábados y Domingos`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_524b860947aaae2285f9d0bc4667582c () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "height": "100%", "diaplay": "block", "borderRadius": "1em", "alignItems": "start", "textDecortion": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.youtube.com/@fmorenoadmin`} passHref={true}>
  <RadixThemesButton css={{"alignItems": "start", "width": "100%", "height": "100%", "diaplay": "block", "padding": "0.5em", "borderRadius": "1em"}}>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start"}} direction={`row`} gap={`2`}>
  <LucideArrowRightIcon css={{"color": "var(--current-color)", "width": "2em", "alignItems": "start"}}/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start"}} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"fontSize": "1em"}}>
  {`Youtube`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontSize": "0.8em"}}>
  {`Tutoriales Semanales`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment>
  <div css={{"position": "fixed", "width": "100vw", "height": "0"}}>
  <Fragment_966c0378eb9d65bdfb5286644be9b831/>
</div>
  <Fragment_ac0b06893fc1b15016f3e0532508036d/>
</Fragment>
  <RadixThemesBox>
  <RadixThemesFlex align={`start`} css={{"position": "sticky", "background": "blue", "paddingInlineStart": "1em", "paddingInlineEnd": "1em", "paddingTop": "0.8em", "paddingBottom": "0.8em", "zIndex": "999", "top": "0"}} direction={`row`} gap={`2`}>
  <RadixThemesText as={`p`}>
  {`frmorenoadmin`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex css={{"display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <RadixThemesFlex align={`start`} css={{"maxWidth": "600px", "width": "100%", "marginTop": "2em", "marginBottom": "2em"}} direction={`column`} gap={`2`}>
  <RadixThemesFlex css={{"display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start"}} direction={`column`} gap={`9`}>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start"}} direction={`row`} gap={`2`}>
  <RadixThemesAvatar size={`7`} src={`https://www.frankmorenoalburqueque.com/assets/images/ico490x458.webp`}/>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`column`} gap={`2`}>
  <RadixThemesHeading size={`6`}>
  {`FRANK MORENO A.`}
</RadixThemesHeading>
  <RadixThemesText as={`p`} size={`3`}>
  {`@fmorenoadmin`}
</RadixThemesText>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <Link_8046d9256ab23f71a6de5bfb31030f84/>
  <Link_b7a1b9d6ff6b1b2330688a8a4f66b698/>
  <Link_8220fcbb3a555b82af06578fc4ec3ba6/>
  <Link_f886267ee8ffb1b252b84067a62d38ed/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex css={{"width": "100%"}} gap={`2`}>
  <RadixThemesBox css={{"fontSize": "0.8em"}}>
  <Text as={`span`} sx={{"color": "red"}}>
  {`PHP `}
</Text>
  <Text as={`span`} sx={{"fontWeigth": "bold", "color": "blue"}}>
  {`+7`}
</Text>
  {` Años de Experiencia`}
</RadixThemesBox>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesBox css={{"fontSize": "0.8em"}}>
  <Text as={`span`} sx={{"color": "red"}}>
  {`Python `}
</Text>
  <Text as={`span`} sx={{"fontWeigth": "bold", "color": "blue"}}>
  {`+1`}
</Text>
  {` Años de Experiencia`}
</RadixThemesBox>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesBox css={{"fontSize": "0.8em"}}>
  <Text as={`span`} sx={{"color": "red"}}>
  {`MySQL `}
</Text>
  <Text as={`span`} sx={{"fontWeigth": "bold", "color": "blue"}}>
  {`+7`}
</Text>
  {` Años de Experiencia`}
</RadixThemesBox>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesBox css={{"fontSize": "0.8em"}}>
  <Text as={`span`} sx={{"color": "red"}}>
  {`PostgreSQL `}
</Text>
  <Text as={`span`} sx={{"fontWeigth": "bold", "color": "blue"}}>
  {`+5`}
</Text>
  {` Años de Experiencia`}
</RadixThemesBox>
</RadixThemesFlex>
  <RadixThemesText as={`p`}>
  {`Soy webMaster 
                Programador PHP - Semi-Senior, con mas de 7 años de experiencia. 
                Programador Python - Junior. 

                Partner de Microsoft. 

                !Bienvenid@¡`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex css={{"width": "100%", "alignItems": "center", "display": "flex", "justifyContent": "center"}}>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "alignItems": "start"}} direction={`column`} gap={`2`}>
  <RadixThemesHeading css={{"width": "100%", "paddingTop": "1em"}} size={`4`}>
  {`Comunidad:`}
</RadixThemesHeading>
  <Link_3a614f33d0117a0e34ac5b02b45f9818/>
  <Link_524b860947aaae2285f9d0bc4667582c/>
  <Link_7df33d46af770d2d73b9e071ae3b1dd9/>
  <Link_bd5df7bc9e7545e08391a40533840622/>
  <RadixThemesHeading css={{"width": "100%", "paddingTop": "1em"}} size={`4`}>
  {`Comunidad:`}
</RadixThemesHeading>
  <Link_3a614f33d0117a0e34ac5b02b45f9818/>
  <Link_524b860947aaae2285f9d0bc4667582c/>
  <Link_7df33d46af770d2d73b9e071ae3b1dd9/>
  <Link_bd5df7bc9e7545e08391a40533840622/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex css={{"display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesFlex align={`baseline`} css={{"marginBottom": "2em"}} direction={`row`} gap={`2`}>
  <RadixThemesText as={`p`}>
  {`Copyright © 2017-2024`}
</RadixThemesText>
  <Link_8bc6df5a76cff4312ce093083606ad64/>
  <RadixThemesText as={`p`}>
  {`Todos los derechos reservados.`}
</RadixThemesText>
  <img css={{"width": "100px", "height": "auto"}} src={`https://www.frankmorenoalburqueque.com/assets/images/ico490x458.webp`}/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
