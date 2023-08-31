require('dotenv').config()

exports.send = (req, res) => {
    const { to, year, head, body, chart } = req.body

    const { jsPDF } = require('jspdf')
    const autoTable = require('jspdf-autotable')

    // initialize jsPDF
    const doc = new jsPDF()

    autoTable.default(doc, {
        head: head,
        body: body
    })

    if (chart != '') {
        doc.addImage(chart, 'PNG', 0, (body.length + 1) * 15, 220, 110)
    }

    const buffer = Buffer.from(doc.output('arraybuffer')).toString('base64')

    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const msg = {
        to: to,
        from: {
            name: 'Jackie Wang',
            email: 'jackiewang@cloudwaveinc.com'
        },
        subject: `Employee Report for ${year}`,
        text: `This email is for ${year} employees report.`,
        html: `This email is for ${year} employees report.`,
        attachments: [{
            filename: `report_${year}.pdf`,
            content: buffer,
            type: 'application/pdf',
            disposition: 'attachment'
        }]
    }

    sgMail.send(msg)
        .then(() => {
            console.log('Email sent')

            res.send('Email sent successfully')
        })
        .catch((err) => {
            console.error(err)

            res.status(500).send({
                message: err.message || 'Some errors have occurred when retrieving the employees'
            })
        })
}