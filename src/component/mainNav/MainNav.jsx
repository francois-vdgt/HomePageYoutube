import "C:/Users/fvandergucht/WorkFlow/HomePageYoutube/src/component/mainNav/mainNav.scss"
import LinkNav from "C:/Users/fvandergucht/WorkFlow/HomePageYoutube/src/component/linkNav/LinkNav.jsx"
import BtnLogin from "../btn-login/BtnLogin"

export default function MainNav({isOpen}){

    return(
        <>
            <div className={`container-nav-open ${isOpen ? "open-menu" : "close-menu"}`}>
                <div className="navCategory">
                    <LinkNav icon={<span class="material-symbols-outlined">home</span>} text={"Accueil"} open={isOpen}/>
                    <LinkNav icon={<span class="material-symbols-outlined">swap_vert</span>} text={"Short"} open={isOpen}/>
                    <LinkNav icon={<span class="material-symbols-outlined">subscriptions</span>} text={"Abonnement"} open={isOpen}/>
                </div>
                <div className="navCategory">
                    <LinkNav icon={<span class="material-symbols-outlined">video_library</span>} text={"Vous"} open={isOpen}/>
                    <LinkNav icon={<span class="material-symbols-outlined">update</span>} text={"Historique"} open={isOpen}/>
                </div>
                <div className="navCategory">
                    <p>
                        Connectez-vous à YouTube pour cliquer sur "J'aime", ajouter un commentaire et vous abonner.
                    </p>
                    <BtnLogin />
                </div>
                <div className="navCategory">
                    <h2 className="subtitle-nav">Explorer</h2>
                    <LinkNav icon={<span class="material-symbols-outlined">local_fire_department</span>} text={"Tendence"} open={isOpen}/>
                    <LinkNav icon={<span class="material-symbols-outlined">music_note</span>} text={"Musique"} open={isOpen}/>
                    <LinkNav icon={<span class="material-symbols-outlined">movie</span>} text={"Film"} open={isOpen}/>
                    <LinkNav icon={<span class="material-symbols-outlined">sports_esports</span>} text={"Jeux vidéo"} open={isOpen}/>
                    <LinkNav icon={<span class="material-symbols-outlined">news</span>} text={"Actualités"} open={isOpen}/>
                    <LinkNav icon={<span class="material-symbols-outlined">trophy</span>} text={"Sport"} open={isOpen}/>
                    <LinkNav icon={<span class="material-symbols-outlined">settings_input_antenna</span>} text={"Podcasts"} open={isOpen}/>
                </div>
                <div className="navCategory">
                    <LinkNav icon={<span class="material-symbols-outlined">add_circle</span>} text={"Chaînes"} open={isOpen}/>
                </div>
                <div className="navCategory">
                    <h2 className="subtitle-nav">Autre contenues Youtube</h2>
                    <LinkNav icon={""} text={"Youtube Premium"} open={isOpen}/>
                    <LinkNav icon={""} text={"Youtube Music"} open={isOpen}/>
                    <LinkNav icon={""} text={"Youtube Kids"} open={isOpen}/>
                </div>
                <div className="navCategory">
                    <LinkNav icon={<span class="material-symbols-outlined">settings</span>} text={"Paramètres"} open={isOpen}/>
                    <LinkNav icon={<span class="material-symbols-outlined">flag</span>} text={"Historique des sign..."} open={isOpen}/>
                    <LinkNav icon={<span class="material-symbols-outlined">help</span>} text={"Aide"} open={isOpen}/>
                    <LinkNav icon={<span class="material-symbols-outlined">feedback</span>} text={"Envoyer des comm..."} open={isOpen}/>
                </div>
                <div className="navCategory">
                    <p>
                        PrésentationPresseDroits d'auteurNous contacterCréateursPublicitéDéveloppeurs
                        Conditions d'utilisationConfidentialitéRègles et sécuritéPremiers pas sur YouTubeTester de nouvelles fonctionnalités
                        © 2024 Google LLC
                    </p>
                </div>
            </div>

            <div className={`container-nav-close ${isOpen ? "close-menu" : "open-menu"}`}>
                <div className="navCategory">
                    <LinkNav icon={<span class="material-symbols-outlined">home</span>} text={"Accueil"} open={isOpen}/>
                    <LinkNav icon={<span class="material-symbols-outlined">swap_vert</span>} text={"Short"}/>
                    <LinkNav icon={<span class="material-symbols-outlined">subscriptions</span>} text={"Abonnement"} open={isOpen}/>
                    <LinkNav icon={<span class="material-symbols-outlined">video_library</span>} text={"Vous"} open={isOpen}/>
                    <LinkNav icon={<span class="material-symbols-outlined">update</span>} text={"Historique"} open={isOpen}/>
                </div>
            </div>
        </>
    )
}