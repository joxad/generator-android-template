package <%= appPackage %>;

import com.joxad.easydatabinding.fragment.FragmentBaseVM;
import <%= appPackage %>.R;
import <%= appPackage %>.BR;
import <%= appPackage %>.databinding.<%= name %>Binding;
import <%= appPackage %>.<%= packageName %>.<%= name %>;

/**
 * Generated by generator-android-template
 */
public class <%= name %>VM extends FragmentBaseVM<<%= name %>, <%= name %>Binding> {
  /***
    * @param fragment
    * @param binding
    */
   public <%= name %>VM(<%= name %> fragment, <%= name %>Binding binding) {
       super(fragment, binding);
   }

   @Override
   public void onCreate() {

   }
}
