// Layouts
import ModuleLayout from './layouts/Module.svelte'
import AuthLayout from './layouts/Auth.svelte'

// Components
import SearchComponent from './atoms/Search.svelte'
import WebnavComponent from './molecules/Webnav.svelte'
import AsideComponent from './molecules/Aside.svelte'


export default {
    Module : ModuleLayout,
    Auth : AuthLayout,
    Search : SearchComponent,
    Webnav : WebnavComponent,
    Aside : AsideComponent
}

// Layouts
export const Module = ModuleLayout
export const Auth = AuthLayout

// Components
export const Search = SearchComponent
export const Webnav = WebnavComponent
export const Aside = AsideComponent