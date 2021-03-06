const { User } = require("../models");

class DashboardController {
    async index (req, res) {
        const providers = await User.findAll({ where: { provider: true } });
        return res.render("adm/dashboard", { providers });
    }

}

module.exports = new DashboardController();
