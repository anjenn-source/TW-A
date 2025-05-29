import dbConnect from '@/lib/dbConnect'
import User from '@/lib/models/User'
import bcrypt from 'bcryptjs'

export async function POST(req) {
  try {
    await dbConnect()

    const { email, password } = await req.json()

    if (!email || !password) {
      return new Response(
        JSON.stringify({ message: 'Missing email or password' }),
        { status: 400 }
      )
    }

    // Check if user exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return new Response(
        JSON.stringify({ message: 'Email already registered' }),
        { status: 409 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create user
    const newUser = new User({
      email,
      password: hashedPassword,
    })

    await newUser.save()

    return new Response(
      JSON.stringify({ message: 'User created successfully' }),
      { status: 201 }
    )
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
    })
  }
}
