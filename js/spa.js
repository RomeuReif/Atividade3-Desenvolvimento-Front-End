const routes = {
    home: `
        <section id="sobre>
            <h2>Quem somos</h2>
            <p>A ONG esperança viva é uma organização sem fins lucrativos dedicada a transformar vidas através da solidariedade e da inclusão social.</p>
            <img src="img/thumb_esperança-viva.jpg" alt="Equipe da ONG" width="500">
        </section>
    `,
    projetos: `
        <section id="projetos">
            <h2>Nossos Projetos</h2>
            <div class="grid">
                <div class="card">
                    <h3>Projeto Sementes do Futuro</h3>
                    <p>Educação para crianças em vulnerabilidade social.</p>
                </div>
                <div class="card">
                    <h3>Projeto Mãos Solidárias</h3>
                    <p>Distribuição de cestas básicas e roupas.</p>
                </div>
            </div>
    </section>
    `,
    cadastro: `
        <section id="formulario">
            <h2>Cadastro de Voluntário</h2>
            <form id="formCadastro">
                <fieldset>
                    <legend>Informações Pessoais</legend>
                    <label>Nome Completo:</label>
                    <input type="text" id="nome" required>
                    <label>E-mail:</label>
                    <input type="email" id="email" required>
                    <label>Telefone:</label>
                    <input type="tel" id="telefone" placeholder="(47) 99999-9999" required>
                </fieldset>
                <fieldset>
                    <legend>Endereço</legend>
                    <label>Cidade:</label>
                    <input type="text" id="cidade" required>
                    <label>Estado:</label>
                    <select id="estado" required>
                        <option value="">Selecione</option>
                        <option value="SC">SC</option>
                        <option value="PR">PR</option>
                        <option value="RS">RS</option>
                    </select>
                </fieldset>
                <button type="submit" class="btn">Enviar Cadastro</button>
            </form>
    </section>
    `
};



