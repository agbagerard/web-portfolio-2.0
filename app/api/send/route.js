import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
	try {
		const { data, error } = await resend.emails.send({
			from: 'Gerard <agbagerard@gmail.com>',
			to: ['canvawond@gmail.com'],
			subject: 'Hello world',
			react: (
				<>
					<p>Email Body</p>
				</>
			),
		});

		if (error) {
			return Response.json({ error }, { status: 500 });
		}

		return Response.json(data);
	} catch (error) {
		return Response.json({ error }, { status: 500 });
	}
}
