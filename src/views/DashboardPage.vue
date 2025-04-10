<script setup lang="ts">
import { ref } from 'vue'

const user = ref({
  name: 'John Doe',
  email: 'john@example.com',
  role: 'lecturer', // or 'student'
})

const files = ref([{}, {}, {}]) // example list

const isLecturer = () => user.value.role === 'lecturer'
const isStudent = () => user.value.role === 'student'
</script>


<template>
  <div class="flex flex-col min-h-screen bg-gray-50">
    <Navbar />

    <main class="flex-1 container mx-auto px-4 py-8">
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-800">
          Welcome, {{ user.name }}!
        </h1>
        <p class="text-gray-600">
          {{ isLecturer() ? 'Manage your educational resources' : 'Access your learning materials' }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle class="flex items-center">
              <FileText class="h-5 w-5 mr-2 text-rms-blue" />
              Resources
            </CardTitle>
            <CardDescription>Available files</CardDescription>
          </CardHeader>
          <CardContent>
            <p class="text-3xl font-bold text-rms-blue">{{ files.length }}</p>
            <Button as-child class="mt-4 w-full" variant="outline">
              <RouterLink to="/files">
                <FileText class="h-4 w-4 mr-2" />
                Browse Files
              </RouterLink>
            </Button>
          </CardContent>
        </Card>

        <Card v-if="isLecturer()">
          <CardHeader>
            <CardTitle class="flex items-center">
              <Upload class="h-5 w-5 mr-2 text-rms-blue" />
              Upload
            </CardTitle>
            <CardDescription>Share resources</CardDescription>
          </CardHeader>
          <CardContent>
            <p class="text-sm text-gray-500 mb-4">
              Upload ZIP files (min 2MB) for your students
            </p>
            <Button as-child class="w-full bg-rms-blue hover:bg-rms-darkBlue">
              <RouterLink to="/upload">
                <Upload class="h-4 w-4 mr-2" />
                Upload Resources
              </RouterLink>
            </Button>
          </CardContent>
        </Card>

        <Card v-if="isStudent()">
          <CardHeader>
            <CardTitle class="flex items-center">
              <Download class="h-5 w-5 mr-2 text-rms-blue" />
              Downloads
            </CardTitle>
            <CardDescription>Access materials</CardDescription>
          </CardHeader>
          <CardContent>
            <p class="text-sm text-gray-500 mb-4">
              Download resources shared by your lecturers
            </p>
            <Button as-child class="w-full bg-rms-blue hover:bg-rms-darkBlue">
              <RouterLink to="/files">
                <Download class="h-4 w-4 mr-2" />
                Download Resources
              </RouterLink>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle class="flex items-center">
              <User class="h-5 w-5 mr-2 text-rms-blue" />
              Account
            </CardTitle>
            <CardDescription>Your profile</CardDescription>
          </CardHeader>
          <CardContent class="space-y-2">
            <div>
              <p class="text-sm font-semibold">Name:</p>
              <p>{{ user.name }}</p>
            </div>
            <div>
              <p class="text-sm font-semibold">Email:</p>
              <p>{{ user.email }}</p>
            </div>
            <div>
              <p class="text-sm font-semibold">Role:</p>
              <p class="capitalize">{{ user.role }}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  </div>
</template>
