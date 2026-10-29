import { FlatList, Text, TextInput, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";
import { useState } from "react";
import SubscriptionCard from "@/components/SubscriptionCard";
import { useSubscriptionStore } from "@/lib/subscriptionStore";

const SafeAreaView = styled(RNSafeAreaView);

const Subscriptions = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const { subscriptions } = useSubscriptionStore();
  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredSubscriptions = subscriptions.filter((subscription) =>
    subscription.name.toLowerCase().includes(normalizedQuery) ||
    subscription.category?.toLowerCase().includes(normalizedQuery) ||
    subscription.plan?.toLowerCase().includes(normalizedQuery)
  );

  return (
    <SafeAreaView className="flex-1 bg-background">
      <FlatList
        data={filteredSubscriptions}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View className="px-5 pt-5">
            <Text className="text-3xl font-sans-bold text-primary mb-5">Subscriptions</Text>
            <TextInput
              className="bg-card rounded-xl px-4 py-3 text-primary mb-4"
              placeholder="Search subscriptions..."
              placeholderTextColor="#666"
              value={searchQuery}
              onChangeText={setSearchQuery}
              accessibilityLabel="Search subscriptions"
            />
          </View>
        }
        renderItem={({ item }) => (
          <SubscriptionCard
            {...item}
            expanded={expandedId === item.id}
            onPress={() => setExpandedId((currentId) => currentId === item.id ? null : item.id)}
          />
        )}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20, gap: 12 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        ListEmptyComponent={
          <Text className="home-empty-state px-5">
            {normalizedQuery ? "No matching subscriptions." : "No subscriptions yet."}
          </Text>
        }
      />
    </SafeAreaView>
  )
};

export default Subscriptions;
