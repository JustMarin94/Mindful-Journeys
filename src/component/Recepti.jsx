export default function Recepti() {
    return(
        <div className="recepti">
      {/* Header */}
      <div className="header">
        <p className="headline">Popularni recepti koje ne možeš propustiti!</p>
        <p className="subheadline">
          Recepti koje naši studenti obožavaju, isprobaj ih i ti!
        </p>
      </div>

      {/* Recipes */}
      <div className="recipes-container">
        {/* Recipe 1 */}
        <div className="recipe-card">
          <h3 className="recipe-title">Pašta s tunom na crveno</h3>
          <p className="recipe-description">
            Ovaj recept za brzu i ukusnu tjesteninu s tunom...
          </p>
          <button className="btn-view-more">POGLEDAJ VIŠE</button>
        </div>

        {/* Recipe 2 */}
        <div className="recipe-card">
          <h3 className="recipe-title">Tortilja pizza</h3>
          <p className="recipe-description">
            Ovaj recept je prava stvar za brz, ukusan obrok, savršen...
          </p>
          <button className="btn-view-more">POGLEDAJ VIŠE</button>
        </div>

        {/* Recipe 3 */}
        <div className="recipe-card">
          <h3 className="recipe-title">Rižoto sa povrćem</h3>
          <p className="recipe-description">
            Rižoto je uvijek dobar izbor kad želite jednostavan...
          </p>
          <button className="btn-view-more">POGLEDAJ VIŠE</button>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-info">
          <p>
            RIaktiv recepti – tvoj put do zdravih i brzih obroka na studentski
            način!
          </p>
        </div>

        <div className="footer-links">
          <a href="#" className="footer-link">Facebook</a>
          <a href="#" className="footer-link">Instagram</a>
        </div>
      </div>

      {/* Navigation */}
      <div className="navigation">
        <button className="nav-arrow">←</button>
        <button className="nav-arrow">→</button>
      </div>
    </div>
  )
    
}