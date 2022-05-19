<template>
  <div>
    <h3>Hi {{ account.user.firstName }}!</h3>
    <p>You're logged in Grocery Mgt!!</p>
    <!-- <h3>Users from secure api end point:</h3> -->
    <em v-if="users.loading">Loading users...</em>
    <span v-if="users.error" class="text-danger">ERROR: {{ users.error }}</span>
    <div>
      <div>
        <q-card>
          <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
            <q-tab name="grocery" label="Grocery" />
            <q-tab name="users" label="Users" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="grocery">
              <div class="text-h6">Products</div>
              <div>
                <q-table
                title="Grocey Items"
                :data="data"
                :columns="columns"
                row-key="name"
                />
            </div>
            </q-tab-panel>

            <q-tab-panel name="users">
              <div class="text-h6">User</div>
              <ul v-if="users.items">
                <li v-for="user in users.items" :key="user.id">
                  {{ user.firstName + " " + user.lastName }}
                  <span v-if="user.deleting"><em> - Deleting...</em></span>
                  <span v-else-if="user.deleteError" class="text-danger">
                    - ERROR: {{ user.deleteError }}</span
                  >
                  <span v-else>
                    -
                    <a @click="deleteUser(user.id)" class="text-danger"
                      >Delete</a
                    ></span
                  >
                </li>
              </ul>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>

    <p>
      <router-link to="/login">Logout</router-link>
    </p>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      tab: "grocery",
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Name',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'price', align: 'right', label: 'Price', field: 'price' },
      ],
      data: [
        {
          name: 'Dairy',
          price: 159,
        },
        {
          name: 'Eggs',
          price: 119,
        },
        {
          name: 'Milk',
          price: 21,
        },
        {
          name: 'Eggs',
          price: 35,
        },
        {
          name: 'Cheese',
          price: 55,
        },
        {
          name: 'Yogurt',
          price: 251,
        },
        {
          name: 'Milk Yogurt',
          price: 149,
        },
      ],
    };
  },
  computed: {
    ...mapState({
      account: (state) => state.account,
      users: (state) => state.users.all,
    }),
  },
  created() {
    this.getAllUsers();
  },
  methods: {
    ...mapActions("users", {
      getAllUsers: "getAll",
      deleteUser: "deleteUser",
    }),
  },
};
</script>
