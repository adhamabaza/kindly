export async function POST(request: Request) {
  const data = await request.json().catch(() => null);
  if (!data || typeof data.name !== 'string' || !data.name.trim() || typeof data.contact !== 'string' || data.contact.length < 6 || typeof data.age !== 'string' || !data.age.trim() || !/^\d{4}-\d{2}-\d{2}$/.test(data.date || '')) return Response.json({saved:false,error:'invalid_input'},{status:400});
  // Connect a verified admissions inbox or durable database here before enabling submissions.
  // Never claim delivery based on an unverified external response.
  return Response.json({saved:false,error:'admissions_not_configured'},{status:503});
}
