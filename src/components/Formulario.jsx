

const Formulario = () => {
  return (
    <div className="contenedor">
        <form>
            <div className="campo">
                <label htmlFor="ciudad">Ciudad</label>
                <input 
                    type="text"
                    id="ciudad"
                    name="ciudad"
                />
            </div>
            <div className="campo">
                <label htmlFor="pais">Pais</label>
                <select id="pais" name="pais">
                    <option value="">Seleccione un Pais</option>
                    <option value="CL">Chile</option>
                    <option value="CO">Colombia</option>
                    <option value="ES">España</option>
                    <option value="US">Estados Unidos</option>

                </select>
            </div>
            <input value="Consultar Clima" type="submit" />
        </form>
    </div>
  )
}

export default Formulario